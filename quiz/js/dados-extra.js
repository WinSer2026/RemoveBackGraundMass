/* ============================================================
   dados-extra.js — camada generativa adicional
   Ciclos e classes, autores e conceitos, localização no trabalho
   e itens de Verdadeiro/Falso. Tudo ancorado no documento.
   ============================================================ */

(function () {
  "use strict";
  var G = window.BANCO_GERADO;
  for (var n = 1; n <= 5; n++) { if (!G[n]) G[n] = []; }
  function sh(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------- 1) Ciclos e classes: Lei 18/2018 (nível 1) ---------- */
  var CICLOS18 = [
    ["1.ª", "1.º Ciclo do Ensino Básico (1.ª à 3.ª classe)"],
    ["2.ª", "1.º Ciclo do Ensino Básico (1.ª à 3.ª classe)"],
    ["3.ª", "1.º Ciclo do Ensino Básico (1.ª à 3.ª classe)"],
    ["4.ª", "2.º Ciclo do Ensino Básico (4.ª à 6.ª classe)"],
    ["5.ª", "2.º Ciclo do Ensino Básico (4.ª à 6.ª classe)"],
    ["6.ª", "2.º Ciclo do Ensino Básico (4.ª à 6.ª classe)"],
    ["7.ª", "3.º Ciclo do Ensino Básico (7.ª à 9.ª classe)"],
    ["8.ª", "3.º Ciclo do Ensino Básico (7.ª à 9.ª classe)"],
    ["9.ª", "3.º Ciclo do Ensino Básico (7.ª à 9.ª classe)"]
  ];
  var OPCOES_CICLO18 = [
    "1.º Ciclo do Ensino Básico (1.ª à 3.ª classe)",
    "2.º Ciclo do Ensino Básico (4.ª à 6.ª classe)",
    "3.º Ciclo do Ensino Básico (7.ª à 9.ª classe)",
    "2.º Ciclo do Ensino Secundário (10.ª à 12.ª classe)"
  ];

  CICLOS18.forEach(function (c, i) {
    G[1].push({
      id: "ciclo18-" + i,
      tipo: "mc",
      tema: "Estrutura do SNE",
      nivel: 1,
      pergunta: "Na organização do Ensino Básico de 9 classes da Lei n.º 18/2018, a " + c[0] + " classe integra:",
      opcoes: [c[1]].concat(OPCOES_CICLO18.filter(function (o) { return o !== c[1]; })),
      detalhe: "O Ensino Básico organiza-se em três ciclos: 1.º (1.ª-3.ª), 2.º (4.ª-6.ª) e 3.º (7.ª-9.ª).",
      fonte: "Cap. 2.2.4.1, p. 20"
    });
  });

  /* ---------- 2) Ciclos e classes: Lei 6/92 (nível 2) ---------- */
  var CICLOS92 = [
    ["1.ª", "Ensino Primário do 1.º Grau (EP1, 1.ª à 5.ª)"],
    ["3.ª", "Ensino Primário do 1.º Grau (EP1, 1.ª à 5.ª)"],
    ["5.ª", "Ensino Primário do 1.º Grau (EP1, 1.ª à 5.ª)"],
    ["6.ª", "Ensino Primário do 2.º Grau (EP2, 6.ª e 7.ª)"],
    ["7.ª", "Ensino Primário do 2.º Grau (EP2, 6.ª e 7.ª)"],
    ["8.ª", "1.º Ciclo do Ensino Secundário Geral (ESG1, 8.ª à 10.ª)"],
    ["10.ª", "1.º Ciclo do Ensino Secundário Geral (ESG1, 8.ª à 10.ª)"],
    ["11.ª", "2.º Ciclo do Ensino Secundário Geral (ESG2, 11.ª e 12.ª)"],
    ["12.ª", "2.º Ciclo do Ensino Secundário Geral (ESG2, 11.ª e 12.ª)"]
  ];
  var OPCOES_CICLO92 = [
    "Ensino Primário do 1.º Grau (EP1, 1.ª à 5.ª)",
    "Ensino Primário do 2.º Grau (EP2, 6.ª e 7.ª)",
    "1.º Ciclo do Ensino Secundário Geral (ESG1, 8.ª à 10.ª)",
    "2.º Ciclo do Ensino Secundário Geral (ESG2, 11.ª e 12.ª)"
  ];

  CICLOS92.forEach(function (c, i) {
    G[2].push({
      id: "ciclo92-" + i,
      tipo: "mc",
      tema: "Estrutura do SNE",
      nivel: 2,
      pergunta: "No modelo da Lei n.º 6/92, a " + c[0] + " classe pertencia a:",
      opcoes: [c[1]].concat(OPCOES_CICLO92.filter(function (o) { return o !== c[1]; })),
      detalhe: "A Lei n.º 6/92 manteve a estrutura de 7 classes do primário: EP1 (1.ª-5.ª) e EP2 (6.ª-7.ª); o secundário ia da 8.ª à 12.ª.",
      fonte: "Cap. 2.2.1.2 / 2.2.2.1, pp. 16-17"
    });
  });

  /* ---------- 3) Autores e conceitos (nível 4) ---------- */
  var CONCEITOS = [
    ["a «inclusão excludente» ou «exclusão por dentro»", "Saviani, Craidy e Franco e Frigotto", "Saviani, Craidy e Franco e Frigotto cunharam a expressão para descrever o acesso sem direito ao conhecimento.", "Cap. 2.3.3.2, pp. 25-26"],
    ["os cinco níveis de transformação curricular", "José Gimeno Sacristán", "Sacristán distingue currículo prescrito, apresentado, moldado, em acção e realizado.", "Cap. 2.3.2.1, pp. 23-24"],
    ["os saberes docentes plurais", "Maurice Tardif", "Tardif identifica saberes da formação, disciplinares, curriculares e experienciais.", "Cap. 2.3.2.2, p. 24"],
    ["a selecção cultural do currículo", "Michael Apple", "Apple demonstra que o currículo expressa os interesses dos grupos dominantes.", "Cap. 2.3.1.2, pp. 22-23"],
    ["a crítica da avaliação como acto burocrático", "Cipriano Luckesi", "Luckesi denuncia a avaliação reduzida à verificação de notas.", "Cap. 2.4.2.3, p. 30"],
    ["a gestão do clima escolar e da convivência", "Heloísa Lück", "Luck trata das estratégias de mediação de conflitos na gestão escolar.", "Cap. 2.4.3.1, p. 31"],
    ["a função moral e socializadora da escola", "Émile Durkheim", "Durkheim sustenta a função de inculcação da solidariedade e da disciplina moral.", "Cap. 2.3.3.1, p. 25"],
    ["as «tácticas» de sobrevivência pedagógica", "Michel de Certeau", "A noção de táctica remete para a teoria da invenção do quotidiano.", "Cap. 2.1.3.2, nota 6, p. 12"],
    ["o estudo de caso múltiplo", "Robert Yin", "Yin fundamenta o estudo de caso como estratégia de investigação empírica.", "Cap. 3.2, p. 38"],
    ["os quatro critérios de rigor qualitativo", "Lincoln e Guba", "Credibilidade, transferibilidade, dependabilidade e confirmabilidade.", "Cap. 3.7, p. 42"],
    ["a Análise de Conteúdo em três fases", "Laurence Bardin", "Pré-análise, exploração do material e tratamento com inferência.", "Cap. 3.6, pp. 41-42"],
    ["a sistematização do Ciclo de Políticas em português", "Jefferson Mainardes", "Mainardes (2006) faz a releitura metodológica de Ball, Bowe e Gold.", "Cap. 2.1.4, pp. 12-13"],
    ["a relação das famílias populares com a escola", "Carlos Rodrigues Brandão", "Brandão mostra a esperança de mobilidade convertida em desilusão.", "Cap. 2.5.2.1, p. 34"],
    ["a adolescência como transição que exige novos espaços", "Miguel Arroyo", "Arroyo defende espaços que estimulem autonomia e convivência juvenil.", "Cap. 2.5.2.2, p. 34"],
    ["os paradoxos da qualidade educativa em Moçambique", "Mário e Nangassane", "São citados sobre turmas com mais de oitenta estudantes e a qualidade educativa.", "Cap. 2.1.3.1 / 2.4.2.1, pp. 12 e 29"],
    ["a transição pós-independência e a ruptura colonial", "Carlos Gomez", "Gomez analisa o legado colonial e a edificação do sistema nacional.", "Cap. 2.2.1, p. 15"],
    ["a articulação entre cultura e matrizes de poder", "Brazão Mazula", "Mazula é mobilizado para a dimensão cultural da educação.", "Cap. 2.2.1 / 2.6.1, pp. 15 e 36"],
    ["a descrição do SNE de 1983 e da divisão EP1/EP2", "Golias", "Golias (1993, p. 51) descreve a estrutura do ensino primário de 7 classes.", "Cap. 2.2.1.2, p. 16"],
    ["a tese da «democratização ilusória»", "Dermeval Saviani", "Saviani adverte para o risco de ampliação por decreto sem recursos.", "Cap. 1.2, p. 3"],
    ["o papel regulador e disputado do Estado na política educacional", "Saviani (2013)", "O Estado não é árbitro neutro; reflecte correlações de forças.", "Cap. 2.3.1.1, p. 22"]
  ];
  var AUTORES_POOL = ["Stephen Ball", "Robert Yin", "Laurence Bardin", "Maurice Tardif", "Michael Apple", "José Gimeno Sacristán", "Jefferson Mainardes", "Heloísa Lück", "Cipriano Luckesi", "Émile Durkheim"];

  CONCEITOS.forEach(function (c, i) {
    var todos = CONCEITOS.map(function (x) { return x[1]; }).concat(AUTORES_POOL);
    var outros = [];
    todos.forEach(function (a) { if (a !== c[1] && outros.indexOf(a) < 0) outros.push(a); });
    G[4].push({
      id: "conceito-" + i,
      tipo: "mc",
      tema: "Autores e teorias",
      nivel: 4,
      pergunta: "A quem se associa, no trabalho, " + c[0] + "?",
      opcoes: [c[1]].concat(sh(outros).slice(0, 3)),
      detalhe: c[2],
      fonte: c[3]
    });
  });

  /* ---------- 4) Onde está no trabalho (nível 3) ---------- */
  var LOCAIS = [
    ["a matriz analítica dos contextos do Ciclo de Políticas", "Quadro 1", [["Quadro 2", "Quadro 3", "Quadro 6"]], "O Quadro 1 cruza contexto, foco primordial, actores-chave e manifestação na reforma.", "Quadro 1, p. 14"],
    ["o comparativo entre a Lei n.º 6/92 e a Lei n.º 18/2018", "Quadro 2", [["Quadro 1", "Quadro 4", "Quadro 5"]], "O Quadro 2 compara estrutura, escolaridade obrigatória, locus de oferta, perfil docente e impacto económico.", "Quadro 2, p. 21"],
    ["a matriz metodológica integrada", "Quadro 3", [["Quadro 1", "Quadro 4", "Quadro 6"]], "O Quadro 3 liga objectivos específicos, categorias, fontes, técnicas e procedimentos de análise.", "Quadro 3, p. 43"],
    ["a alocação da amostra pelos quatro cenários", "Quadro 4", [["Quadro 2", "Quadro 5", "Quadro 6"]], "O Quadro 4 distribui 1 director, 4 professores, 4 alunos e 4 encarregados por escola.", "Quadro 4, p. 44"],
    ["o cronograma de execução em 2026", "Quadro 5", [["Quadro 3", "Quadro 4", "Quadro 6"]], "O Quadro 5 cobre de Julho a Dezembro de 2026, da revisão bibliográfica à defesa.", "Quadro 5, p. 44"],
    ["o orçamento estimativo em meticais", "Quadro 6", [["Quadro 3", "Quadro 4", "Quadro 5"]], "O Quadro 6 discrimina 14 itens, totalizando 120.750,00 MZN.", "Quadro 6, pp. 44-45"],
    ["o guião de entrevista para directores e gestores", "Apêndice A", [["Apêndice C", "Apêndice E", "Apêndice F"]], "O Apêndice A tem quatro blocos com oito perguntas sobre transição, RH, infra-estruturas/ADE e convivência.", "Apêndice A, p. 49"],
    ["o guião de entrevista para professores da 8.ª e 9.ª", "Apêndice B", [["Apêndice A", "Apêndice D", "Apêndice G"]], "O Apêndice B aborda formação, condições de trabalho e avaliação da aprendizagem.", "Apêndice B, p. 50"],
    ["o guião de grupo focal para alunos", "Apêndice C", [["Apêndice B", "Apêndice D", "Apêndice E"]], "O Apêndice C usa linguagem adequada a adolescentes de 13 a 16 anos.", "Apêndice C, p. 51"],
    ["o guião de grupo focal para encarregados de educação", "Apêndice D", [["Apêndice A", "Apêndice C", "Apêndice G"]], "O Apêndice D usa linguagem popular, sem termos técnicos.", "Apêndice D, p. 52"],
    ["a grelha de observação directa das infra-estruturas", "Apêndice E", [["Apêndice B", "Apêndice F", "Apêndice G"]], "O Apêndice E tem seis aspectos classificados em Bom, Suficiente ou Mau.", "Apêndice E, p. 53"],
    ["o questionário com escala Likert de 1 a 5", "Apêndice F", [["Apêndice D", "Apêndice E", "Apêndice G"]], "O Apêndice F apresenta 10 afirmações para professores.", "Apêndice F, p. 54"],
    ["a ficha sociodemográfica e o guião de análise documental", "Apêndice G", [["Apêndice A", "Apêndice E", "Apêndice F"]], "O Apêndice G tem duas partes: caracterização dos participantes e análise documental.", "Apêndice G, p. 55"],
    ["a credencial de autorização para recolha de dados", "Anexo A", [["Anexo B", "Anexo C", "Apêndice G"]], "A credencial é emitida pela Direcção da Faculdade de Educação e Psicologia da UP-Maputo.", "Anexo A, p. 56"],
    ["o Termo de Consentimento Livre e Esclarecido", "Anexo B", [["Anexo A", "Anexo C", "Apêndice F"]], "O TCLE é assinado pelos participantes adultos.", "Anexo B, p. 57"],
    ["o Termo de Assentimento Livre e Esclarecido", "Anexo C", [["Anexo A", "Anexo B", "Apêndice D"]], "O TALE é assinado pelos alunos menores de idade.", "Anexo C, p. 58"]
  ];

  LOCAIS.forEach(function (l, i) {
    G[3].push({
      id: "local-" + i,
      tipo: "mc",
      tema: "Estrutura do trabalho",
      nivel: 3,
      pergunta: "Onde se encontra, no trabalho, " + l[0] + "?",
      opcoes: [l[1]].concat(l[2][0]),
      detalhe: l[3],
      fonte: l[4]
    });
  });

  /* ---------- 5) Verdadeiro / Falso (níveis 1 a 5) ---------- */
  var VF = [
    [1, "O trabalho tem como autora Carlota Roberto Monjane.", true, "O nome consta da capa e da declaração de honra.", "Capa, p. i"],
    [1, "O estudo foi apresentado à Universidade Eduardo Mondlane.", false, "Foi apresentado à Universidade Pedagógica de Maputo, Faculdade de Educação e Psicologia.", "Folha de rosto, p. ii"],
    [1, "O trabalho é um projecto de pesquisa de mestrado em Políticas Públicas Educacionais.", true, "É requisito de avaliação e qualificação nesse curso de mestrado.", "Folha de rosto, p. ii"],
    [1, "A Lei n.º 18/2018 revogou a Lei n.º 6/92.", true, "A Lei n.º 18/2018 encerrou o ciclo de vida da Lei n.º 6/92.", "Cap. 2.2.4, p. 19"],
    [1, "A Lei n.º 6/92 instituiu o primeiro Sistema Nacional de Educação.", false, "Foi a Lei n.º 4/83 que instituiu formalmente o primeiro SNE.", "Cap. 2.2.1.2, p. 16"],
    [1, "O Ensino Básico criado em 2018 tem a duração de nove classes.", true, "Vai da 1.ª à 9.ª classe, gratuito e obrigatório.", "Cap. 2.2.4.1, p. 19"],
    [1, "O estudo adoptou uma abordagem quantitativa com amostragem aleatória.", false, "Adoptou uma abordagem predominantemente qualitativa, de cariz interpretativo.", "Cap. 3.1, p. 38"],
    [1, "A amostra global é de 52 participantes.", true, "4 directores, 16 professores, 16 alunos e 16 encarregados de educação.", "Cap. 3.4, p. 39"],
    [1, "O referencial central é o Ciclo de Políticas de Ball, Bowe e Gold.", true, "Sistematizado na literatura portuguesa por Mainardes (2006).", "Cap. 2.1, p. 7"],
    [1, "A técnica de tratamento de dados é a análise estatística descritiva.", false, "É a Análise de Conteúdo de Laurence Bardin.", "Cap. 3.6, p. 41"],
    [1, "O campo empírico são quatro Escolas Básicas Completas do Município de Maputo.", true, "Duas em KaMpfumo e duas em KaMavota e KaMubukwana.", "Cap. 3.3, p. 39"],
    [1, "O trabalho inclui um capítulo dedicado à apresentação e discussão dos resultados.", false, "Tem três capítulos: introdução, revisão da literatura e metodologia; os resultados serão produzidos na fase de campo.", "Cap. 1.6, p. 5"],

    [2, "Na Lei n.º 18/2018, o Ensino Primário vai da 1.ª à 6.ª classe.", true, "O primário tem duração unificada de seis classes, em dois ciclos.", "Quadro 2, p. 21"],
    [2, "Na Lei n.º 18/2018, o 1.º Ciclo do Ensino Secundário corresponde à 8.ª à 10.ª classe.", false, "Corresponde à 7.ª à 9.ª classe; o 10.º ao 12.º é o 2.º Ciclo.", "Quadro 2, p. 21"],
    [2, "A Lei n.º 6/92 aboliu o monopólio estatal sobre o ensino.", true, "Autorizou estabelecimentos privados, cooperativos, comunitários e confessionais.", "Cap. 2.2.2.1, p. 17"],
    [2, "A Lei n.º 4/83 organizava o ensino primário em 9 classes.", false, "Organizava em 7 classes: EP1 (1.ª-5.ª) e EP2 (6.ª-7.ª).", "Cap. 2.2.1.2, p. 16"],
    [2, "O 3.º Ciclo do Ensino Básico marca a passagem da monodocência ao modelo disciplinar.", true, "Com introdução de disciplinas específicas e laboratórios.", "Cap. 2.2.4.1, p. 20"],
    [2, "O PCEB de 2004 reservou 20% do tempo lectivo ao currículo local.", true, "Para conteúdos comunitários, ofícios práticos e saberes endógenos.", "Cap. 2.2.3.1, p. 18"],
    [2, "O estudo de caso adoptado é um estudo de caso único.", false, "É um estudo de caso múltiplo, com 4 escolas.", "Cap. 3.2, p. 38"],
    [2, "Os grupos focais foram realizados apenas com alunos.", false, "Foram previstos 4 grupos focais com alunos e 4 com encarregados de educação.", "Cap. 3.5.2, p. 40"],
    [2, "A amostragem é intencional não probabilística, com saturação teórica.", true, "Gil (2008) e Creswell e Creswell (2018) sustentam a opção.", "Cap. 3.4, p. 39"],
    [2, "O contexto de influência é onde as políticas são executadas nas escolas.", false, "É a arena onde as políticas são originadas, disputadas e legitimadas; a execução ocorre no contexto da prática.", "Cap. 2.1.1, p. 8"],
    [2, "O ADE é a principal fonte de financiamento descentralizado das escolas primárias.", true, "Criado sob os auspícios do Banco Mundial.", "Cap. 2.4.3.2, p. 32"],
    [2, "A guerra civil destruiu menos de 10% da rede escolar primária.", false, "Destruiu mais de 40% da frágil rede escolar primária.", "Cap. 2.2.1.2, p. 16"],

    [3, "Mais de 65% das escolas primárias da capital reconvertidas não têm laboratórios, bibliotecas ou salas de informática.", true, "Dados do Relatório de Monitoria do MINEDH (2020, p. 25).", "Cap. 1.2, p. 2"],
    [3, "O rácio de alunos por sala nas turmas de 8.ª e 9.ª da capital não excede 40 alunos.", false, "Oscila entre 75 e 90 alunos por sala.", "Cap. 1.2, p. 3"],
    [3, "Os tempos lectivos foram reduzidos para 35 ou 30 minutos em algumas disciplinas.", true, "Consequência dos três a quatro turnos diários.", "Cap. 2.4.1.1, p. 27"],
    [3, "A amostra prevê 16 professores, quatro por escola.", true, "Abrangendo Ciências Naturais, Matemática e Ciências Sociais/Línguas.", "Cap. 3.4, p. 40"],
    [3, "O orçamento total do projecto é de 120.750,00 meticais.", true, "Somatório dos 14 itens do Quadro 6.", "Quadro 6, p. 45"],
    [3, "O trabalho de campo intensivo está previsto para Outubro de 2026.", false, "Está previsto para Setembro; Outubro é para transcrição, tratamento e análise.", "Quadro 5, p. 44"],
    [3, "A grelha de observação classifica os aspectos em Bom, Suficiente ou Mau.", true, "Seis aspectos: salas, mobiliário, manuais, laboratórios, sanitários e clima de aula.", "Apêndice E, p. 53"],
    [3, "O questionário Likert tem 20 afirmações.", false, "Tem 10 afirmações, numa escala de 1 a 5.", "Apêndice F, p. 54"],
    [3, "Na grelha de observação, cerca de 30% dos alunos da 8.ª e 9.ª sentam-se no chão ou em latas.", true, "O mobiliário é classificado como «Mau».", "Apêndice E, p. 53"],
    [3, "Os critérios de rigor adoptados são credibilidade, transferibilidade, dependabilidade e confirmabilidade.", true, "Critérios de Lincoln e Guba (1985).", "Cap. 3.7, p. 42"],
    [3, "O item mais caro do orçamento é a encadernação e apresentação final.", false, "É o transporte e deslocações no terreno, com 20.250,00 MZN.", "Quadro 6, p. 45"],
    [3, "A ficha sociodemográfica integra o Apêndice G.", true, "Junto com o guião de análise documental.", "Apêndice G, p. 55"],

    [4, "Ball (1994) acrescentou dois contextos suplementares aos três originais.", true, "Resultados/efeitos e estratégia política.", "Cap. 2.1, p. 7"],
    [4, "Mainardes defende que o Ciclo de Políticas acentua a dicotomia entre macro e micro.", false, "Defende precisamente que o modelo a supera, articulando macro e micro.", "Cap. 2.1.4.1, p. 13"],
    [4, "Para Apple, o currículo é um campo de batalha pela definição do conhecimento oficial.", true, "Expressa os interesses dos grupos dominantes.", "Cap. 2.3.1.2, p. 22"],
    [4, "Saviani considera que a ampliação da escolaridade por decreto, sem recursos, produz democratização ilusória.", true, "Citação em caixa, Saviani (2008, p. 45).", "Cap. 1.2, p. 3"],
    [4, "A «inclusão excludente» significa que o aluno está fora da escola.", false, "Significa que está dentro da escola sem acesso ao conhecimento, apesar do certificado.", "Cap. 2.3.3.2, pp. 25-26"],
    [4, "Para Sacristán, o sucesso de uma reforma mede-se pela qualidade do currículo prescrito.", false, "Mede-se pelas condições reais do currículo em acção.", "Cap. 2.3.2.1, p. 24"],
    [4, "Tardif sustenta que a mudança curricular sem apropriação empurra os docentes para práticas rotineiras.", true, "A autonomia exige condições materiais e formação continuada.", "Cap. 2.3.2.2, pp. 24-25"],
    [4, "A observação directa serve para contrastar as declarações com a realidade material.", true, "É uma exigência da triangulação de fontes e métodos.", "Cap. 3.5.3, p. 41"],
    [4, "O trabalho defende que a Lei n.º 18/2018 previu uma matriz de transição gradual e calendarizada.", false, "O texto legal não previu essa matriz nem vinculou o orçamento às infra-estruturas.", "Cap. 2.1.2.2, p. 11"],
    [4, "A recontextualização implica que o texto normativo sofre mutação pedagógica ao chegar à escola.", true, "Depende da cultura profissional e das condições locais.", "Cap. 2.1.3.1, pp. 11-12"],
    [4, "As tácticas de sobrevivência pedagógica são sempre pedagogicamente positivas.", false, "São engenhosas, mas por vezes pedagogicamente deficitárias.", "Cap. 2.1.3.2, p. 12"],
    [4, "O contexto da estratégia política analisa a mobilização e a reivindicação colectiva.", true, "Inclui a organização sindical dos professores e comunidades.", "Cap. 2.1.4.2, p. 14"],

    [5, "O consentimento dos pais dispensa o assentimento do aluno menor.", false, "São exigidos cumulativamente o TCLE dos pais e o TALE do aluno.", "Cap. 3.8, p. 43"],
    [5, "O anonimato é garantido por códigos alfanuméricos como «Gestor 1» e «Professor A».", true, "Consta das considerações éticas do Capítulo 3.8.", "Cap. 3.8, p. 43"],
    [5, "A recolha de dados pode iniciar-se antes da credencial institucional.", false, "Só após a obtenção da credencial emitida pela Faculdade.", "Cap. 3.8, p. 42"],
    [5, "A pergunta principal abrange gestores, professores, alunos e encarregados de educação.", true, "É a base da amostra de 52 participantes.", "Cap. 1.3, p. 3"],
    [5, "A tese do trabalho é que a expansão resolveu os problemas de qualidade do ensino básico.", false, "O trabalho mostra a distância entre a intenção legislativa e as condições de implementação.", "Cap. 1.2, p. 3"],
    [5, "O estudo pretende generalizar estatisticamente os resultados ao país.", false, "Pretende transferibilidade, com descrição densa, sem generalização estatística.", "Cap. 3.7, p. 42"],
    [5, "A triangulação de fontes e métodos é requisito de validade assumido pelo estudo.", true, "Entrevistas, grupos focais, observação e documentos.", "Cap. 3.5, p. 40"],
    [5, "O quarto objectivo específico prevê propor linhas estratégicas de intervenção.", true, "Para mitigar os constrangimentos diagnosticados.", "Cap. 1.5.2, p. 5"],
    [5, "A escolha de Maputo se explica pela ausência de EBC nas outras províncias.", false, "Explica-se pela concentração e celeridade da reconversão na capital e pela diversidade socioterritorial que permite comparar contextos.", "Cap. 1.2 / 3.3, pp. 2 e 39"],
    [5, "O trabalho assume uma lente qualitativa porque o objecto envolve significados e recontextualizações.", true, "Justificação explicitada no Capítulo 3.1.", "Cap. 3.1, p. 38"],
    [5, "A declaração de honra afirma que o trabalho já foi apresentado noutra instituição.", false, "Afirma o contrário: é original e nunca apresentado para obtenção de grau.", "Declaração de Honra, p. i"],
    [5, "O trabalho dedica-se aos professores, alunos e gestores escolares moçambicanos.", true, "É o teor da dedicatória.", "Dedicatória, p. iii"]
  ];

  VF.forEach(function (v, i) {
    G[v[0]].push({
      id: "vf-" + i,
      tipo: "mc",
      tema: "Verdadeiro ou Falso",
      nivel: v[0],
      pergunta: "Verdadeiro ou falso? " + v[1],
      opcoes: [v[2] ? "Verdadeiro" : "Falso", v[2] ? "Falso" : "Verdadeiro"],
      detalhe: v[3],
      fonte: v[4]
    });
  });
})();
