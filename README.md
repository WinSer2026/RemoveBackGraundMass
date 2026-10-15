# RemoveBackGraundMass

Aplicação Windows para remover o fundo de imagens em massa, usando a API do remove.bg.
Abre numa janela própria (não precisa de navegador).

## Usar (Windows)

1. Descarregue `Remover Fundo.exe` (ver abaixo) e faça duplo clique.
2. Na primeira execução é criado um atalho **Remover Fundo** no ambiente de trabalho.
3. Cole a sua **API key** do remove.bg no topo e clique em **Escolher imagens…**.
4. Cada imagem é processada e guardada automaticamente em `Downloads\RemoveBG\AAAA-MM-DD\`.
5. Na secção **Histórico** escolha um dia para ver, abrir ou apagar as imagens desse dia.

Formatos: qualquer imagem que o Pillow consiga ler (JPG, PNG, WEBP, GIF, BMP, TIFF, etc.), até 20 MB por ficheiro.

## Obter o .exe

O `.exe` é gerado automaticamente pelo GitHub Actions (workflow *Build Windows EXE*):
- Aba **Actions** do repositório → último run → secção **Artifacts** → `Remover-Fundo-Windows`.
- Ou correr manualmente o workflow com *Run workflow*.

## Gerar localmente (Windows)

Com Python 3.10+ instalado, execute `app\build_windows.bat`. O resultado fica em `app\dist\Remover Fundo.exe`.

## Código

- `app/app.py` – lógica (fila de envios, chamadas à API, histórico, atalho).
- `app/web/index.html` – interface.
- Para correr sem gerar o .exe: `cd app && pip install -r requirements.txt && python app.py`.

## Notas

- A chave da API fica guardada em `%APPDATA%\RemoveBG\config.json`.
- Por omissão é enviada uma imagem de cada vez à API (evita limites de pedidos). Pode mudar na caixa "Envios à API de cada vez".
