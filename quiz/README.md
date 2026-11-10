# Quiz de Defesa — Expansão do Ensino Básico de 7 para 9 Classes

Aplicação web de treino para a defesa do projecto de pesquisa de **Carlota Roberto Monjane**,
*«A política de expansão do ensino básico de 7 para 9 classes em Moçambique: desafios e
perspectivas na visão dos intervenientes educativos»* (UP-Maputo, Faculdade de Educação e
Psicologia, Curso de Mestrado em Políticas Públicas Educacionais, 2026).

**Todas as perguntas têm resposta no próprio trabalho.** Cada resposta indica o capítulo, o
quadro/apêndice e a página impressa onde pode ser conferida.

---

## Como abrir

Não precisa de instalar nada nem de internet:

```
quiz/index.html
```

Basta abrir esse ficheiro no navegador (duplo clique). Também funciona servido por HTTP:

```bash
cd quiz && python3 -m http.server 8000
# abrir http://localhost:8000
```

---

## Mecânica

| Elemento | Comportamento |
|---|---|
| Tempo por pergunta | **10 segundos** (anel countdown; fica vermelho nos últimos 3 s) |
| Resposta visível | **5 segundos** com barra decrescente; depois avança sozinho |
| Níveis | **1 Fundamentos → 2 Aprofundamento → 3 Precisão → 4 Análise → 5 Banca** |
| Rondas | 10 perguntas por ronda, sorteadas do banco do nível |
| Rotação | Nenhuma pergunta se repete até todo o banco do nível ser usado; depois o baralho recomeça embaralhado |
| Ordem | **Não segue os capítulos** — temas e níveis aparecem misturados |
| Perguntas abertas | Responder em voz alta, revelar a resposta-modelo e auto-avaliar |
| Modo defesa | 10 perguntas sorteadas de todos os níveis, com peso maior nos níveis 3–5 |

Atalhos de teclado: `1`–`4` escolhem opção · `Enter` revela (pergunta aberta) · `→` avança ·
`P` pausa · `Esc` termina a ronda · `?` abre a ajuda.

---

## Banco de perguntas

**448 perguntas** no total, distribuídas por nível:

| Nível | Perguntas | Foco |
|---|---:|---|
| 1 · Fundamentos | 95 | identificação, siglas, ideias-âncora, estrutura do SNE |
| 2 · Aprofundamento | 86 | comparação das leis, contexto de influência, quadros 1 e 2, história |
| 3 · Precisão | 106 | números, quadros 3–6, instrumentos, ética, estrutura do documento |
| 4 · Análise | 71 | articulação teoria-prática, citações em caixa, coerência metodológica |
| 5 · Banca | 58 | objecções do júri e respostas abertas de defesa |

O banco é construído em três camadas:

1. **Perguntas autorais** (`dados-n1.js` … `dados-n5.js`) — escritas à medida do documento,
   incluindo réplicas típicas de júri e 18 respostas abertas com resposta-modelo.
2. **Camada generativa de factos** (`dados-base.js`) — siglas, cronologia legal, números do
   trabalho e autor↔conceito, gerados a partir de tabelas fiéis ao texto.
3. **Camada generativa estrutural** (`dados-extra.js`) — enquadramento de cada classe nos
   ciclos de 1992 e de 2018, localização de cada quadro/apêndice/anexo, pares autor-conceito e
   60 itens de verdadeiro/falso, todos com justificação e fonte.

---

## Ficheiros

```
quiz/
├── index.html          estrutura da aplicação
├── css/estilo.css      tema visual (papel, tinta, ouro)
└── js/
    ├── dados-base.js   factos + geradores (siglas, datas, números, autores)
    ├── dados-n1.js     nível 1
    ├── dados-n2.js     nível 2
    ├── dados-n3.js     nível 3
    ├── dados-n4.js     nível 4
    ├── dados-n5.js     nível 5 (inclui respostas abertas)
    ├── dados-extra.js  geradores estruturais + verdadeiro/falso
    └── app.js          motor: níveis, rotação, temporizador, resultados
```

O progresso, o histórico de erros e a posição da rotação ficam guardados em `localStorage`
do navegador. Podem ser exportados em JSON no ecrã **Progresso** e apagados a qualquer momento.

---

## Notas de rigor

- O trabalho é um **projecto de pesquisa** (três capítulos: Introdução, Revisão da Literatura,
  Metodologia), sem capítulo de resultados. As perguntas de nível 4 e 5 incidem por isso na
  metodologia, nos instrumentos, na amostra, no orçamento, no cronograma, no estado da arte e
  na teoria — não em resultados empíricos que ainda não existem.
- As referências de página correspondem à **paginação impressa** do documento (a página 1 é a
  primeira do Capítulo 1); no PDF, essa página é a 13.ª.
