/* ============================================================
   dados-base.js
   Factos estruturados do projecto + geradores de perguntas.
   Todas as respostas provêm do documento:
   "A política de expansão do ensino básico de 7 para 9 classes
    em Moçambique: desafios e perspectivas na visão dos
    intervenientes educativos" — Carlota Roberto Monjane,
    UP-Maputo, 2026.
   ============================================================ */

window.BANCO_GERADO = { 1: [], 2: [], 3: [] };

(function () {
  "use strict";

  /* ------------------------- SIGLAS ------------------------- */
  var SIGLAS = [
    ["ADE", "Apoio Directo às Escolas"],
    ["EBC", "Escola Básica Completa"],
    ["EP1", "Ensino Primário do 1.º Grau"],
    ["EP2", "Ensino Primário do 2.º Grau"],
    ["ESG1", "1.º Ciclo do Ensino Secundário Geral"],
    ["ESG2", "2.º Ciclo do Ensino Secundário Geral"],
    ["FASE", "Fundo de Apoio ao Sector da Educação"],
    ["FMI", "Fundo Monetário Internacional"],
    ["IFP", "Instituto de Formação de Professores"],
    ["INDE", "Instituto Nacional do Desenvolvimento da Educação"],
    ["MINEDH", "Ministério da Educação e Desenvolvimento Humano"],
    ["MZN", "Metical, moeda da República de Moçambique"],
    ["ODS", "Objectivos de Desenvolvimento Sustentável"],
    ["PCEB", "Plano Curricular do Ensino Básico"],
    ["PEE", "Plano Estratégico da Educação"],
    ["PRE", "Programa de Reabilitação Económica"],
    ["SADC", "Comunidade de Desenvolvimento da África Austral"],
    ["SNE", "Sistema Nacional de Educação"],
    ["TALE", "Termo de Assentimento Livre e Esclarecido"],
    ["TCLE", "Termo de Consentimento Livre e Esclarecido"],
    ["UEM", "Universidade Eduardo Mondlane"],
    ["UP-Maputo", "Universidade Pedagógica de Maputo"]
  ];

  /* ------------------------- DATAS ------------------------- */
  var DATAS = [
    ["Em que ano foi proclamada a independência nacional de Moçambique?", "1975",
      "A independência foi proclamada a 25 de Junho de 1975; o texto caracteriza o sistema colonial herdado como dual e discriminatório.", "Cap. 2.2.1, p. 15"],
    ["Em que ano foi decretada a nacionalização da educação, da saúde e da justiça?", "1975",
      "A nacionalização ocorreu a 24 de Julho de 1975 e retirou a tutela do ensino às missões religiosas.", "Cap. 2.2.1.1, p. 15"],
    ["Em que ano foi aprovada a Lei n.º 4/83, que instituiu o primeiro SNE?", "1983",
      "A Lei n.º 4/83, de 23 de Março, instituiu formalmente o primeiro Sistema Nacional de Educação.", "Cap. 2.2.1.2, p. 16"],
    ["Em que ano foi aprovada a Lei n.º 6/92?", "1992",
      "A Lei n.º 6/92, de 6 de Maio, revogou a Lei n.º 4/83 e liberalizou o sector da educação.", "Cap. 2.2.2.1, p. 17"],
    ["Em que ano foram assinados os Acordos Gerais de Paz em Roma?", "1992",
      "Os Acordos de Roma (1992) encerraram a guerra civil iniciada em 1977 e redefiniram o papel do Estado.", "Cap. 2.2.2, p. 16"],
    ["Em que ano foi aprovada a Lei n.º 18/2018?", "2018",
      "A Lei n.º 18/2018 é de 28 de Dezembro de 2018 e revogou a Lei n.º 6/92.", "Cap. 2.1.2.2 / 2.2.4, pp. 10 e 19"],
    ["Em que ano foi adoptado o Plano Curricular do Ensino Básico (PCEB)?", "2004",
      "O PCEB de 2004 foi concebido pelo INDE e introduziu ciclos de aprendizagem, ensino bilingue e currículo local.", "Cap. 2.2.3.1, p. 18"],
    ["Em que ano foi implementado o Programa de Reabilitação Económica (PRE)?", "1987",
      "O PRE de 1987 marcou a viragem para a economia de mercado e a aproximação às instituições de Bretton Woods.", "Cap. 2.2.2, p. 16"],
    ["Em que ano foi aprovada a Constituição que abriu caminho ao multipartidarismo?", "1990",
      "A Constituição de 1990 e os Acordos de Paz de 1992 enquadram a Lei n.º 6/92.", "Cap. 2.2.2, p. 16"],
    ["Em que ano terminou a guerra civil que destruiu mais de 40% da rede escolar primária?", "1992",
      "A guerra decorreu entre 1977 e 1992 e destruiu deliberadamente mais de 40% da frágil rede escolar primária.", "Cap. 2.2.1.2, p. 16"]
  ];

  /* ------------------------ NÚMEROS ------------------------ */
  var NUMEROS = [
    ["Quantas classes integra o novo Ensino Básico criado pela Lei n.º 18/2018?", "9 classes (1.ª à 9.ª)",
      ["7 classes (1.ª à 7.ª)", "8 classes (1.ª à 8.ª)", "12 classes (1.ª à 12.ª)"],
      "O Ensino Básico passa a conglobar 9 classes, da 1.ª à 9.ª, gratuito, universal e obrigatório.", "Cap. 2.1.2.2 / 2.2.4.1, pp. 10 e 19-20"],
    ["Quantos participantes integram a amostra global do estudo?", "52 participantes",
      ["26 participantes", "40 participantes", "104 participantes"],
      "A amostra é de N = 52: 4 directores, 16 professores, 16 alunos e 16 encarregados de educação.", "Cap. 3.4 / Quadro 4, pp. 39 e 44"],
    ["Quantas Escolas Básicas Completas compõem o campo empírico?", "4 escolas",
      ["2 escolas", "6 escolas", "8 escolas"],
      "São 4 EBC: duas na zona urbana consolidada (KaMpfumo) e duas na periurbana (KaMavota e KaMubukwana).", "Cap. 3.3, p. 39"],
    ["Quantos distritos municipais estão representados na amostra?", "3 distritos",
      ["2 distritos", "4 distritos", "7 distritos"],
      "KaMpfumo, KaMavota e KaMubukwana — três distritos municipais do Município de Maputo.", "Quadro 4, p. 44"],
    ["Quantos participantes foram previstos por cada escola?", "13 participantes",
      ["10 participantes", "16 participantes", "52 participantes"],
      "Cada escola contribui com 1 director, 4 professores, 4 alunos e 4 encarregados: 13 por escola.", "Quadro 4, p. 44"],
    ["Que percentagem das escolas primárias da capital reconvertidas não dispõe de laboratórios, bibliotecas ou salas de informática?", "Mais de 65%",
      ["Cerca de 25%", "Cerca de 40%", "Mais de 90%"],
      "O Relatório de Monitoria do MINEDH (2020, p. 25) aponta mais de 65% das escolas primárias da capital reconvertidas sem esses espaços.", "Cap. 1.2, p. 2"],
    ["Segundo Dias (2010), que percentagem das EBC reconvertidas não possui laboratórios?", "Mais de 90%",
      ["Cerca de 50%", "Cerca de 65%", "Cerca de 75%"],
      "Mais de 90% das EBC reconvertidas não possuem laboratórios, material de microscopia ou reagentes.", "Cap. 2.4.1.2, p. 28"],
    ["Qual é o rácio de alunos por sala frequentemente relatado nas turmas de 8.ª e 9.ª classes da capital?", "Entre 75 e 90 alunos",
      ["Entre 30 e 40 alunos", "Entre 45 e 55 alunos", "Entre 100 e 120 alunos"],
      "Os rácios oscilam entre 75 e 90 alunos por sala, forçando três a quatro turnos diários.", "Cap. 1.2, p. 2-3"],
    ["Em quantos turnos diários passaram a funcionar várias escolas com a expansão?", "Três a quatro turnos",
      ["Um a dois turnos", "Dois turnos apenas", "Cinco turnos"],
      "A sobrelotação impôs regimes de três a quatro turnos curtos, com tempos lectivos de 35 ou 30 minutos.", "Cap. 1.2 / 2.4.1.1, pp. 3 e 27"],
    ["Para quantos minutos foram encurtados os tempos lectivos em algumas disciplinas?", "35 ou 30 minutos",
      ["40 ou 45 minutos", "50 minutos", "60 minutos"],
      "Os blocos foram comprimidos para 35 ou mesmo 30 minutos, inviabilizando o cumprimento integral dos programas.", "Cap. 2.4.1.1, p. 27"],
    ["Qual era a taxa de analfabetismo herdada em 1975?", "Superior a 93%",
      ["Cerca de 50%", "Cerca de 65%", "Superior a 75%"],
      "A taxa de analfabetismo superior a 93% limitava drasticamente a base de quadros técnicos nacionais.", "Cap. 2.2.1, p. 15"],
    ["Que parte da rede escolar primária foi destruída pela guerra civil?", "Mais de 40%",
      ["Cerca de 10%", "Cerca de 20%", "Cerca de 30%"],
      "O conflito (1977-1992) destruiu deliberadamente mais de 40% da frágil rede escolar primária.", "Cap. 2.2.1.2, p. 16"],
    ["Que fracção dos graduados da 7.ª classe conseguia transitar imediatamente para a 8.ª classe?", "Menos de um terço",
      ["Cerca de metade", "Cerca de dois terços", "A quase totalidade"],
      "Menos de um terço dos graduados da 7.ª classe garantia a transição imediata para a 8.ª classe no sistema público.", "Cap. 2.2.2.2, p. 17"],
    ["Que percentagem do tempo lectivo total era reservada ao currículo local no PCEB de 2004?", "20%",
      ["10%", "15%", "30%"],
      "O PCEB institucionalizou o currículo local, reservando obrigatoriamente 20% do tempo lectivo.", "Cap. 2.2.3.1, p. 18"],
    ["Quantas afirmações compõe o questionário com escala Likert aplicado a professores?", "10 afirmações",
      ["5 afirmações", "8 afirmações", "15 afirmações"],
      "O Apêndice F apresenta um questionário de 10 afirmações em escala Likert de 5 pontos.", "Cap. 3.5.4 / Apêndice F, pp. 41 e 54"],
    ["Quantos grupos focais foram previstos no desenho metodológico?", "8 sessões (4 com alunos e 4 com encarregados)",
      ["4 sessões apenas", "6 sessões", "12 sessões"],
      "Realizam-se 4 grupos focais com alunos e 4 com encarregados de educação, num total de 8 sessões.", "Cap. 3.5.2 / Quadro 6, pp. 40 e 45"],
    ["Qual é o valor total estimado do orçamento do projecto?", "120.750,00 MZN",
      ["75.000,00 MZN", "98.500,00 MZN", "150.000,00 MZN"],
      "O Quadro 6 totaliza 120.750,00 meticais, distribuídos por 14 itens de despesa.", "Quadro 6, pp. 44-45"],
    ["Qual é o item mais caro do orçamento?", "Transporte e deslocações no terreno (20.250,00 MZN)",
      ["Encadernação e apresentação final (9.000,00 MZN)", "Transcrição áudio (15.000,00 MZN)", "Revisão linguística (12.000,00 MZN)"],
      "As 45 deslocações a 450,00 MZN somam 20.250,00 MZN; o acolhimento dos grupos focais soma 20.000,00 MZN.", "Quadro 6, p. 45"],
    ["Em que mês do cronograma está previsto o trabalho de campo intensivo?", "Setembro de 2026",
      ["Julho de 2026", "Agosto de 2026", "Novembro de 2026"],
      "O cronograma prevê Setembro para o trabalho de campo intensivo e Outubro para transcrição e análise.", "Quadro 5, p. 44"],
    ["Quantas cópias da versão final estão orçamentadas para o júri e arquivo da biblioteca?", "5 exemplares",
      ["2 exemplares", "3 exemplares", "10 exemplares"],
      "A encadernação prevê 5 cópias a 1.800,00 MZN, num total de 9.000,00 MZN.", "Quadro 6, p. 45"]
  ];

  /* ------------------------ AUTORES ------------------------ */
  var AUTORES = [
    ["A abordagem do Ciclo de Políticas é atribuída a que autores?", "Stephen Ball, Richard Bowe e Anne Gold",
      ["Robert Yin, Egon Guba e Yvonna Lincoln", "Laurence Bardin, Maurice Tardif e António Nóvoa", "José Carlos Libâneo, Dermeval Saviani e Gaudêncio Frigotto"],
      "O referencial foi desenvolvido por Ball, Bowe e Gold (1992) e sistematizado por Jefferson Mainardes (2006).", "Cap. 2.1, p. 7"],
    ["Quem sistematizou o Ciclo de Políticas para a literatura de língua portuguesa?", "Jefferson Mainardes",
      ["Stephen Ball", "Robert Yin", "Bernard Charlot"],
      "Mainardes (2006) fez a releitura metodológica das formulações de Ball, Bowe e Gold.", "Cap. 2.1.4, pp. 12-13"],
    ["Quem cunhou a noção de 'inclusão excludente' mobilizada no trabalho?", "Saviani, Craidy e Franco e Frigotto",
      ["Ball, Bowe e Gold", "Apple e Sacristán", "Durkheim e Weber"],
      "Saviani (2008), Craidy e Franco (2007, p. 89) e Frigotto (2010, p. 71) formulam a expressão 'inclusão excludente'.", "Cap. 2.3.3.2, pp. 25-26"],
    ["Quem defende que o currículo resulta de uma selecção cultural dos grupos dominantes?", "Michael Apple",
      ["Maurice Tardif", "Michael de Certeau", "Robert Yin"],
      "Apple (2006, p. 38) sustenta que o currículo é resultado provisório de uma selecção cultural.", "Cap. 2.3.1.2, p. 22"],
    ["Quem propõe os cinco níveis de transformação curricular?", "José Gimeno Sacristán",
      ["Stephen Ball", "António Nóvoa", "Jean Piaget"],
      "Sacristán (2000, p. 105) distingue currículo prescrito, apresentado, moldado, em acção e realizado.", "Cap. 2.3.2.1, pp. 23-24"],
    ["A que autor é associada a teoria dos saberes docentes plurais?", "Maurice Tardif",
      ["Michael Apple", "Robert Yin", "Egon Guba"],
      "Tardif (2002, p. 36) descreve os saberes da formação, disciplinares, curriculares e experienciais.", "Cap. 2.3.2.2, p. 24"],
    ["Quem critica a redução da avaliação a um acto burocrático de classificação?", "Cipriano Luckesi",
      ["Heloísa Lück", "Miguel Arroyo", "Carlos Gomez"],
      "Luckesi (2011, p. 42) denuncia a avaliação reduzida a verificação de notas para alimentar a estatística oficial.", "Cap. 2.4.2.3, p. 30"],
    ["Quem sublinha a exigência de estratégias de mediação de conflitos na gestão do clima escolar?", "Heloísa Lück",
      ["Yvonna Lincoln", "Laurence Bardin", "Maria Craidy"],
      "Luck (2009, p. 33) trata da gestão democrática, segura e harmoniosa do clima escolar.", "Cap. 2.4.3.1, p. 31"],
    ["Que autor clássico sustenta a função de socialização e coesão moral da escola?", "Émile Durkheim",
      ["Michel Foucault", "Pierre Bourdieu", "Jürgen Habermas"],
      "Durkheim (2007, p. 15) é mobilizado para a função de inculcação da solidariedade e disciplina moral.", "Cap. 2.3.3.1, p. 25"],
    ["Quem analisa a relação pragmática das famílias populares com a escola?", "Carlos Rodrigues Brandão",
      ["Miguel Arroyo", "Mário e Nangassane", "Stephen Ball"],
      "Brandão (2002, p. 58) mostra a relação de esperança e depois desilusão das famílias face à escola pública.", "Cap. 2.5.2.1, p. 34"],
    ["Quem trata a adolescência como transição identitária que exige novos espaços escolares?", "Miguel Arroyo",
      ["Maurice Tardif", "Jefferson Mainardes", "José Sacristán"],
      "Arroyo (1987, p. 42) sustenta a necessidade de espaços que estimulem autonomia e convivência juvenil.", "Cap. 2.5.2.2, p. 34"],
    ["Quem teorizou o estudo de caso como estratégia de investigação empírica?", "Robert Yin",
      ["Laurence Bardin", "Yvonna Lincoln", "Maria Minayo"],
      "Yin (2015) fundamenta o estudo de caso múltiplo adotado no Capítulo 3.", "Cap. 3.2, p. 38"],
    ["Quem propõe os quatro critérios de rigor da investigação qualitativa?", "Lincoln e Guba",
      ["Bogdan e Biklen", "Creswell e Creswell", "Gil e Minayo"],
      "Credibilidade, transferibilidade, dependabilidade e confirmabilidade (Lincoln & Guba, 1985).", "Cap. 3.7, p. 42"],
    ["Quem define a Análise de Conteúdo em três fases?", "Laurence Bardin",
      ["Robert Yin", "Stephen Ball", "Maurice Tardif"],
      "Bardin (2011) organiza a análise em pré-análise, exploração do material e tratamento dos resultados com inferência.", "Cap. 3.6, pp. 41-42"],
    ["Que autor é associado ao conceito de 'tácticas' de sobrevivência pedagógica?", "Michel de Certeau",
      ["Michael Apple", "Émile Durkheim", "António Nóvoa"],
      "A nota de rodapé ao Cap. 2.1.3.2 remete para a teoria de Michel de Certeau sobre a invenção do quotidiano.", "Cap. 2.1.3.2, p. 12"],
    ["Quem analisa os paradoxos da qualidade educativa em Moçambique, citado a propósito das turmas de 80 alunos?", "Mário e Nangassane",
      ["Gomez e Mazula", "Basílio e Golias", "Castiano e Ngoenha"],
      "Mário e Nangassane (2007) são citados sobre a inventividade docente perante turmas com mais de oitenta estudantes.", "Cap. 2.1.3.1, p. 12"],
    ["Quem estudou a transição pós-independência e a ruptura com o sistema colonial?", "Carlos Gomez",
      ["Miguel Arroyo", "Robert Yin", "Heloísa Lück"],
      "Gomez (1999, p. 45) é referência para o legado colonial e para a edificação do sistema nacional.", "Cap. 2.2.1, p. 15"],
    ["Quem articula cultura e matrizes de poder na educação moçambicana?", "Brazão Mazula",
      ["Basílio", "Golias", "Dias"],
      "Mazula (1995, p. 94) é mobilizado para a formação do 'Homem Novo' e a dimensão cultural da educação.", "Cap. 2.2.1, p. 15"],
    ["Quem descreve a estruturação do SNE e a divisão EP1/EP2?", "Golias",
      ["Cabaço", "Carmo", "Creswell"],
      "Golias (1993, p. 51) descreve o Ensino Primário de 7 classes, subdividido em EP1 e EP2.", "Cap. 2.2.1.2, p. 16"],
    ["Que autor sustenta a tese de que a expansão sem recursos produz 'democratização ilusória'?", "Dermeval Saviani",
      ["Stephen Ball", "Michael Apple", "Robert Yin"],
      "Saviani (2008, p. 45) adverte para o risco de democratização ilusória quando a ampliação ocorre por decreto sem recursos.", "Cap. 1.2, p. 3"]
  ];

  /* ---------------------- GERADORES ---------------------- */
  function uid(base, i) { return base + "-" + i; }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function distratores(lista, correta, campo, n) {
    var pool = lista.filter(function (x) { return x[0] !== correta; });
    var out = [];
    var copia = pool.slice();
    while (out.length < n && copia.length) {
      var k = Math.floor(Math.random() * copia.length);
      out.push(campo === 1 ? copia[k][1] : copia[k][1]);
      copia.splice(k, 1);
    }
    return out;
  }

  /* 1) Siglas */
  SIGLAS.forEach(function (s, i) {
    var opcoes = [s[1]].concat(
      distratores(SIGLAS.filter(function (x) { return x[0] !== s[0]; }).map(function (x) { return [x[0], x[1]]; }), s[0], 1, 3)
    );
    window.BANCO_GERADO[1].push({
      id: uid("sigla", i),
      tipo: "mc",
      tema: "Siglas e conceitos",
      nivel: 1,
      pergunta: "Na lista de siglas e acrónimos do trabalho, o que significa «" + s[0] + "»?",
      opcoes: opcoes,
      detalhe: "A sigla " + s[0] + " designa " + s[1] + ", conforme a Lista de Siglas e Acrónimos.",
      fonte: "Lista de Siglas e Acrónimos, p. v"
    });
  });

  /* 2) Datas */
  DATAS.forEach(function (d, i) {
    var anos = [];
    DATAS.forEach(function (x) {
      if (x[1] !== d[1] && anos.indexOf(x[1]) < 0) anos.push(x[1]);
    });
    window.BANCO_GERADO[2].push({
      id: uid("data", i),
      tipo: "mc",
      tema: "Cronologia legal",
      nivel: 2,
      pergunta: d[0],
      opcoes: [d[1]].concat(shuffle(anos).slice(0, 3)),
      detalhe: d[2],
      fonte: d[3]
    });
  });

  /* 3) Números */
  NUMEROS.forEach(function (n, i) {
    window.BANCO_GERADO[3].push({
      id: uid("num", i),
      tipo: "mc",
      tema: "Dados e números",
      nivel: 3,
      pergunta: n[0],
      opcoes: [n[1]].concat(n[2]),
      detalhe: n[3],
      fonte: n[4]
    });
  });

  /* 4) Autores */
  AUTORES.forEach(function (a, i) {
    window.BANCO_GERADO[4] = window.BANCO_GERADO[4] || [];
    window.BANCO_GERADO[4].push({
      id: uid("autor", i),
      tipo: "mc",
      tema: "Autores e teorias",
      nivel: 4,
      pergunta: a[0],
      opcoes: [a[1]].concat(a[2]),
      detalhe: a[3],
      fonte: a[4]
    });
  });
})();
