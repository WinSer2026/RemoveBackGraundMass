@echo off
REM Gera RemoveBG.exe (uma única ficheiro) a partir do código.
REM Requer Python 3.10+ instalado no Windows.
cd /d "%~dp0"
python -m pip install -r requirements.txt
python -m PyInstaller --noconfirm --onefile --windowed --name "Remover Fundo" ^
  --add-data "web;web" app.py
echo.
echo Pronto: dist\Remover Fundo.exe
pause
