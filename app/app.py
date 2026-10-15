"""Remover Fundo em Massa - aplicação Windows (janela própria, sem navegador).

Pedidos à API remove.bg são feitos aqui (Python), por isso não há problemas de CORS.
Os resultados são guardados em  ~/Downloads/RemoveBG/AAAA-MM-DD/  (um pasta por dia).
"""
import io
import json
import os
import shutil
import subprocess
import sys
import threading
import uuid
from datetime import datetime

import requests
import webview
from PIL import Image

API_URL = "https://api.remove.bg/v1.0/removebg"
MAX_BYTES = 20 * 1024 * 1024
NATIVE_EXT = {".jpg", ".jpeg", ".png", ".webp"}
CREATE_NO_WINDOW = 0x08000000


def resource(rel):
    """Caminho de um recurso empacotado (funciona no .exe e no código-fonte)."""
    base = getattr(sys, "_MEIPASS", os.path.dirname(os.path.abspath(__file__)))
    return os.path.join(base, rel)


def config_path():
    d = os.path.join(os.environ.get("APPDATA") or os.path.expanduser("~"), "RemoveBG")
    os.makedirs(d, exist_ok=True)
    return os.path.join(d, "config.json")


def load_cfg():
    try:
        with open(config_path(), encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}


def save_cfg(cfg):
    with open(config_path(), "w", encoding="utf-8") as f:
        json.dump(cfg, f, indent=2)


def out_root():
    d = os.path.join(os.path.expanduser("~"), "Downloads", "RemoveBG")
    os.makedirs(d, exist_ok=True)
    return d


def unique_path(path):
    base, ext = os.path.splitext(path)
    p, n = path, 2
    while os.path.exists(p):
        p = f"{base} ({n}){ext}"
        n += 1
    return p


def to_png(data):
    """Converte qualquer formato que o Pillow consiga ler para PNG."""
    img = Image.open(io.BytesIO(data))
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGBA")
    buf = io.BytesIO()
    img.save(buf, "PNG")
    return buf.getvalue()


class Api:
    """Métodos expostos à interface (window.pywebview.api)."""

    def __init__(self):
        self.window = None
        self.jobs = []
        self.lock = threading.Lock()
        self.conc = int(load_cfg().get("conc", 1))
        self.sem = threading.Semaphore(self.conc)

    # ----- configuração -----
    def get_config(self):
        cfg = load_cfg()
        return {"key": cfg.get("key", ""), "conc": self.conc, "out": out_root()}

    def set_key(self, key):
        cfg = load_cfg()
        cfg["key"] = (key or "").strip()
        save_cfg(cfg)
        return True

    def set_conc(self, n):
        cfg = load_cfg()
        cfg["conc"] = self.conc = max(1, int(n))
        save_cfg(cfg)
        with self.lock:
            self.sem = threading.Semaphore(self.conc)
        return True

    # ----- fila de processamento -----
    def pick_files(self):
        paths = self.window.create_file_dialog(
            webview.OPEN_DIALOG,
            allow_multiple=True,
            file_types=("Imagens e outros ficheiros (*.*)",),
        )
        if paths:
            self.add_files(list(paths))
        return len(paths or [])

    def add_files(self, paths):
        for p in paths:
            job = {
                "id": uuid.uuid4().hex,
                "name": os.path.basename(p),
                "src": p,
                "status": "A processar…",
                "ok": False,
                "failed": False,
            }
            with self.lock:
                self.jobs.append(job)
            if os.path.getsize(p) > MAX_BYTES:
                job.update(status="Erro: maior que 20 MB", failed=True)
            else:
                threading.Thread(target=self._run, args=(job,), daemon=True).start()

    def _run(self, job):
        with self.sem:  # um envio à API de cada vez (por omissão)
            self._process(job)

    def _process(self, job):
        try:
            key = load_cfg().get("key", "").strip()
            if not key:
                raise RuntimeError("falta a chave da API (cole-a no topo)")
            with open(job["src"], "rb") as f:
                data = f.read()
            name = job["name"]
            ext = os.path.splitext(name)[1].lower()
            if ext not in NATIVE_EXT:
                try:
                    data = to_png(data)
                    name = os.path.splitext(name)[0] + ".png"
                except Exception:
                    pass  # deixa a API decidir
            r = requests.post(
                API_URL,
                headers={"X-Api-Key": key},
                files={"image_file": (name, data)},
                data={"size": "auto"},
                timeout=180,
            )
            if r.status_code != 200:
                try:
                    msg = r.json()["errors"][0]["title"]
                except Exception:
                    msg = f"erro {r.status_code}"
                raise RuntimeError(msg)
            day = datetime.now().strftime("%Y-%m-%d")
            folder = os.path.join(out_root(), day)
            os.makedirs(folder, exist_ok=True)
            base = os.path.splitext(job["name"])[0]
            out = unique_path(os.path.join(folder, base + "_sem_fundo.png"))
            with open(out, "wb") as f:
                f.write(r.content)
            job.update(status=f"Pronto – guardado em {day}", ok=True)
        except Exception as e:
            job.update(status=f"Erro: {e}", failed=True)

    def get_jobs(self):
        with self.lock:
            return [
                {k: j[k] for k in ("id", "name", "status", "ok", "failed")}
                for j in self.jobs
            ]

    def retry(self, job_id):
        for j in self.jobs:
            if j["id"] == job_id and j["failed"]:
                j.update(status="A processar…", failed=False)
                threading.Thread(target=self._run, args=(j,), daemon=True).start()
        return True

    def clear_done(self):
        with self.lock:
            self.jobs = [j for j in self.jobs if not (j["ok"] or j["failed"])]
        return True

    # ----- histórico (pastas por dia) -----
    def list_days(self):
        root = out_root()
        days = []
        for d in sorted(os.listdir(root), reverse=True):
            full = os.path.join(root, d)
            if os.path.isdir(full):
                n = len([f for f in os.listdir(full) if f.lower().endswith(".png")])
                days.append({"day": d, "count": n})
        return days

    def list_files(self, day):
        folder = self._day_folder(day)
        if not folder or not os.path.isdir(folder):
            return []
        files = []
        for f in sorted(os.listdir(folder)):
            p = os.path.join(folder, f)
            if os.path.isfile(p):
                files.append({
                    "name": f,
                    "kb": round(os.path.getsize(p) / 1024),
                    "time": datetime.fromtimestamp(os.path.getmtime(p)).strftime("%H:%M"),
                })
        return files

    def open_file(self, day, name):
        folder = self._day_folder(day)
        if folder:
            os.startfile(os.path.join(folder, os.path.basename(name)))
        return True

    def open_day(self, day):
        folder = self._day_folder(day)
        if folder and os.path.isdir(folder):
            os.startfile(folder)
        return True

    def delete_day(self, day):
        folder = self._day_folder(day)
        if folder and os.path.isdir(folder):
            shutil.rmtree(folder)
        return True

    def _day_folder(self, day):
        """Garante que só se acede a pastas dentro de RemoveBG/."""
        if not day or os.path.basename(day) != day:
            return None
        return os.path.join(out_root(), day)


def ensure_shortcut():
    """Na primeira execução do .exe, cria um atalho no ambiente de trabalho."""
    if not getattr(sys, "frozen", False) or os.name != "nt":
        return
    cfg = load_cfg()
    if cfg.get("shortcut"):
        return
    try:
        ps_desktop = '[Environment]::GetFolderPath("Desktop")'
        desktop = subprocess.run(
            ["powershell", "-NoProfile", "-Command", ps_desktop],
            capture_output=True, text=True, creationflags=CREATE_NO_WINDOW,
        ).stdout.strip()
        lnk = os.path.join(desktop, "Remover Fundo.lnk")
        exe = sys.executable
        ps = (
            f'$s=(New-Object -ComObject WScript.Shell).CreateShortcut("{lnk}");'
            f'$s.TargetPath="{exe}";$s.WorkingDirectory="{os.path.dirname(exe)}";$s.Save()'
        )
        subprocess.run(["powershell", "-NoProfile", "-Command", ps],
                       creationflags=CREATE_NO_WINDOW)
        cfg["shortcut"] = True
        save_cfg(cfg)
    except Exception:
        pass


if __name__ == "__main__":
    api = Api()
    api.window = webview.create_window(
        "Remover Fundo em Massa",
        resource(os.path.join("web", "index.html")),
        js_api=api,
        width=960,
        height=720,
    )
    webview.start(ensure_shortcut)
