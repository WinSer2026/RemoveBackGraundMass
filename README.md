# RemoveBackGraundMass

Aplicação web simples (um único ficheiro `index.html`, sem dependências) para remover o fundo de imagens em massa usando a API do remove.bg.

## Como usar

1. Abra `index.html` no navegador (duplo clique), ou sirva a pasta com `python3 -m http.server 8000` e abra `http://localhost:8000`.
2. Cole a sua **API key** do remove.bg no campo indicado (fica guardada só no seu navegador).
3. Arraste ou escolha várias imagens (qualquer formato, até 20 MB cada).
4. As imagens são processadas em simultâneo (número configurável). Cada uma é descarregada automaticamente assim que fica pronta, uma a uma.
5. Os resultados ficam guardados por dia na secção **Histórico**: escolha a data, baixe uma imagem, todas as de um dia, ou apague um dia.

## Notas

- Imagens em formatos que o navegador não pode ler (ex.: GIF, BMP, AVIF) são convertidas para PNG antes do envio.
- O navegador pode pedir permissão para "descarregar vários ficheiros" na primeira vez; aceite para o descarregamento automático funcionar.
- Os resultados são guardados no IndexedDB do navegador. Limpar os dados do navegador apaga o histórico.
- A chave da API fica visível para quem usar este navegador; use-a apenas no seu computador.
