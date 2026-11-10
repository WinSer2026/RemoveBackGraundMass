/* ============================================================
   NÍVEL 2 — APROFUNDAMENTO
   Estrutura do SNE, comparação das leis, actores e quadros.
   ============================================================ */
window.DADOS = window.DADOS || {};
window.DADOS[2] = [

  { id:"n2-01", tipo:"mc", tema:"Lei 18/2018", pergunta:"Como se organiza o Ensino Primário na Lei n.º 18/2018?",
    opcoes:["Em dois ciclos: 1.º Ciclo (1.ª à 3.ª) e 2.º Ciclo (4.ª à 6.ª)","Em dois graus: EP1 (1.ª à 5.ª) e EP2 (6.ª e 7.ª)","Num único ciclo de seis classes sem subdivisão","Em três ciclos de duas classes cada"],
    detalhe:"O Ensino Primário passa a ter duração unificada de seis classes, organizada em dois ciclos de três.",
    fonte:"Cap. 2.2.4.1 / Quadro 2, pp. 19-21" },

  { id:"n2-02", tipo:"mc", tema:"Lei 18/2018", pergunta:"Como se organiza o Ensino Secundário na Lei n.º 18/2018?",
    opcoes:["1.º Ciclo (7.ª à 9.ª) e 2.º Ciclo (10.ª à 12.ª)","ESG1 (8.ª à 10.ª) e ESG2 (11.ª e 12.ª)","1.º Ciclo (7.ª e 8.ª) e 2.º Ciclo (9.ª à 12.ª)","Um ciclo único de seis classes"],
    detalhe:"O 1.º Ciclo do Ensino Secundário (7.ª à 9.ª) é absorvido pelo Ensino Básico obrigatório.",
    fonte:"Quadro 2, p. 21" },

  { id:"n2-03", tipo:"mc", tema:"Lei 18/2018", pergunta:"Qual é a principal inovação social da Lei n.º 18/2018, segundo o Capítulo 1?",
    opcoes:["A criação do Ensino Básico de 9 classes, gratuito e universalmente obrigatório","A introdução do ensino bilingue","A abolição dos exames de transição","A criação do ensino técnico-profissional"],
    detalhe:"O Artigo 11.º consagra o Ensino Básico de 9 classes como gratuito e universalmente obrigatório.",
    fonte:"Cap. 1.1, p. 2" },

  { id:"n2-04", tipo:"mc", tema:"Lei 18/2018", pergunta:"Em que artigos da Lei n.º 18/2018 se consagra a expansão da Educação Básica Obrigatória e Gratuita?",
    opcoes:["Artigos 11.º e 12.º","Artigos 1.º e 2.º","Artigos 18.º e 19.º","Artigos 5.º e 6.º"],
    detalhe:"Os Artigos 11.º e 12.º são expressamente identificados como o núcleo da expansão para 9 classes.",
    fonte:"Cap. 2.1.2.2, p. 10" },

  { id:"n2-05", tipo:"mc", tema:"Lei 18/2018", pergunta:"O que distingue o 3.º Ciclo do Ensino Básico dos restantes ciclos?",
    opcoes:["A passagem da monodocência para o modelo disciplinar, com laboratórios e base propedêutica","A frequência obrigatória em regime de internato","A inexistência de avaliação formal","O ensino exclusivo em língua inglesa"],
    detalhe:"O 3.º Ciclo (7.ª, 8.ª e 9.ª) marca a transição do professor único para a leccionação por especialidade.",
    fonte:"Cap. 2.2.4.1, p. 20" },

  { id:"n2-06", tipo:"mc", tema:"Lei 6/92", pergunta:"Qual foi a inovação legislativa mais controversa da Lei n.º 6/92?",
    opcoes:["A abolição do monopólio estatal sobre o ensino, abrindo-o ao sector privado, comunitário e confessional","A extinção do ensino primário de 7 classes","A introdução da escolaridade obrigatória até à 12.ª","A nacionalização das escolas missionárias"],
    detalhe:"A lei autorizou a criação de estabelecimentos privados, cooperativos, comunitários e confessionais.",
    fonte:"Cap. 2.2.2.1, p. 17" },

  { id:"n2-07", tipo:"mc", tema:"Lei 6/92", pergunta:"Que estrutura de ensino primário a Lei n.º 6/92 manteve?",
    opcoes:["Sete classes (EP1 de 1.ª a 5.ª e EP2 de 6.ª e 7.ª)","Nove classes em três ciclos","Cinco classes de ensino básico","Oito classes com exame final"],
    detalhe:"A lei expurgou referências ao socialismo, mas manteve quase intacta a estrutura organizacional herdada de 1983.",
    fonte:"Cap. 2.2.2.1, p. 17" },

  { id:"n2-08", tipo:"mc", tema:"Lei 4/83", pergunta:"Que princípio educativo a Lei n.º 4/83 consagrou?",
    opcoes:["Uma educação científica, universal e orientada para a edificação do socialismo","Uma educação confessional de base católica","Uma educação bilingue generalizada","Uma educação ao longo da vida centrada em competências"],
    detalhe:"A Lei n.º 4/83 instituiu o SNE com o objectivo de edificar uma educação científica e universal e a língua portuguesa como língua exclusiva de ensino.",
    fonte:"Cap. 1.1 / 2.2.1.2, pp. 1 e 16" },

  { id:"n2-09", tipo:"mc", tema:"Quadro 2", pergunta:"Segundo o Quadro 2, onde eram ministradas as 8.ª e 9.ª classes no modelo da Lei n.º 6/92?",
    opcoes:["Exclusivamente em Escolas Secundárias (ESG1)","Em Escolas Básicas Completas de proximidade","Em escolas técnicas profissionalizantes","Em centros de educação de adultos"],
    detalhe:"A mudança de locus é uma das linhas de fractura mais relevantes do quadro comparativo.",
    fonte:"Quadro 2, p. 21" },

  { id:"n2-10", tipo:"mc", tema:"Quadro 2", pergunta:"Que diferença de perfil docente o Quadro 2 assinala entre os dois modelos?",
    opcoes:["Do perfil monodisciplinar com formação superior passou-se a um desafio de convivência com docentes formados nos IFP","Do perfil generalista passou-se ao perfil exclusivamente universitário","Não há qualquer alteração no perfil docente","O perfil passou de universitário para técnico-profissional"],
    detalhe:"O modelo novo vive o desafio de transição entre docentes dos IFP e docentes com formação superior.",
    fonte:"Quadro 2, p. 21" },

  { id:"n2-11", tipo:"mc", tema:"Quadro 2", pergunta:"Que impacto económico para as famílias o Quadro 2 destaca no novo modelo?",
    opcoes:["Extensão da gratuitidade da matrícula até à 9.ª classe, reduzindo custos directos de acesso","Aumento das propinas para compensar a expansão","Criação de um imposto escolar municipal","Eliminação de todas as despesas escolares"],
    detalhe:"No modelo anterior havia propinas e despesas elevadas de deslocação para os estabelecimentos secundários.",
    fonte:"Quadro 2, p. 21" },

  { id:"n2-12", tipo:"mc", tema:"Contexto da influência", pergunta:"Que mecanismo de financiamento externo é referido como instrumento de condicionalidade?",
    opcoes:["O Fundo de Apoio ao Sector da Educação (FASE)","O Fundo Monetário para a Infância","O Programa de Reabilitação Económica","O Orçamento de Investimento Público"],
    detalhe:"O apoio orçamental sectorial via FASE confere aos doadores capacidade de intervenção nas prioridades curriculares.",
    fonte:"Cap. 2.1.1.2, p. 9" },

  { id:"n2-13", tipo:"mc", tema:"Contexto da influência", pergunta:"A que se refere o conceito de «policy borrowing»?",
    opcoes:["À circulação global e adopção acelerada de modelos de política educativa de outros países","Ao empréstimo de manuais escolares entre alunos","Ao financiamento bancário da construção de escolas","À transferência de professores entre províncias"],
    detalhe:"O policy borrowing induz a adopção de modelos bem-sucedidos nos países centrais, mas desajustados às condições locais.",
    fonte:"Cap. 2.1.1.1, p. 9" },

  { id:"n2-14", tipo:"mc", tema:"Contexto da produção do texto", pergunta:"Porque se afirma que os textos políticos contêm «silêncios estratégicos»?",
    opcoes:["Porque resultam de compromissos e negociações, omitindo por vezes meios, prazos e recursos","Porque são escritos em linguagem cifrada","Porque não são publicados no Boletim da República","Porque são redigidos apenas por juristas"],
    detalhe:"A ambiguidade discursiva permite harmonizar pontos de vista opostos e angariar consenso político.",
    fonte:"Cap. 2.1.2 / 2.1.2.1, pp. 9-10" },

  { id:"n2-15", tipo:"mc", tema:"Contexto da produção do texto", pergunta:"Que omissão o trabalho imputa à Lei n.º 18/2018?",
    opcoes:["Não previu matriz de transição gradual nem vinculou o Orçamento do Estado à construção de salas, laboratórios e bibliotecas","Não definiu a duração do Ensino Primário","Não criou o Ensino Secundário","Não mencionou o ODS 4"],
    detalhe:"A lei gerou um compromisso simbólico, transferindo tacitamente para as escolas e direcções distritais a resolução da escassez.",
    fonte:"Cap. 2.1.2.2, p. 11" },

  { id:"n2-16", tipo:"mc", tema:"Contexto da prática", pergunta:"Segundo Bowe, Ball e Gold (1992, p. 22), o que sucede às políticas no contexto da prática?",
    opcoes:["São sujeitas a processos de interpretação, adaptação, resistência e recriação","São executadas de forma passiva e linear","São anuladas por falta de regulamentação","São avaliadas apenas por indicadores estatísticos"],
    detalhe:"Os profissionais trazem histórias, experiências, valores e crenças; a política é interpretada e traduzida em realidades materiais específicas.",
    fonte:"Cap. 2.1.3, p. 11" },

  { id:"n2-17", tipo:"mc", tema:"Contexto da prática", pergunta:"Que exemplos de «tácticas de sobrevivência pedagógica» o trabalho indica?",
    opcoes:["Redução informal da profundidade dos programas, substituição de aulas práticas por expositivas e cópia de sumários","Greves sistemáticas e abandono do posto de trabalho","Recusa de leccionar as disciplinas do 3.º ciclo","Devolução dos manuais escolares ao MINEDH"],
    detalhe:"Estas micro-práticas de ajustamento são engenhosas, ainda que pedagogicamente deficitárias.",
    fonte:"Cap. 2.1.3.2, p. 12" },

  { id:"n2-18", tipo:"mc", tema:"Contexto suplementar", pergunta:"Sobre o que incide o contexto dos resultados/efeitos da política?",
    opcoes:["Os impactos reais, frequentemente não previstos ou perversos, na equidade, retenção e qualidade","A elaboração técnica dos decretos","A mobilização sindical dos professores","A escolha dos manuais escolares"],
    detalhe:"Analisa a promoção da equidade social, a melhoria das taxas de retenção e a qualidade da aprendizagem das populações vulneráveis.",
    fonte:"Cap. 2.1.4.2, pp. 13-14" },

  { id:"n2-19", tipo:"mc", tema:"Contexto suplementar", pergunta:"O que caracteriza o contexto da estratégia política?",
    opcoes:["A capacidade de mobilização, organização sindical e reivindicação colectiva dos professores e comunidades","A redacção final do texto legal","O recenseamento escolar anual","A formação inicial nos IFP"],
    detalhe:"É o contexto que analisa a resposta colectiva às desigualdades e deficiências geradas pela implementação.",
    fonte:"Cap. 2.1.4.2, p. 14" },

  { id:"n2-20", tipo:"mc", tema:"Quadro 1", pergunta:"No Quadro 1, que actores são associados ao contexto da produção do texto?",
    opcoes:["Técnicos do MINEDH, juristas e consultores educacionais","Banco Mundial, UNESCO e SADC","Gestores escolares, professores, alunos e encarregados","Investigadores e avaliadores de políticas"],
    detalhe:"O Quadro 1 distribui actores-chave e manifestações por cada contexto do ciclo.",
    fonte:"Quadro 1, p. 14" },

  { id:"n2-21", tipo:"mc", tema:"Quadro 1", pergunta:"No Quadro 1, que actores figuram no contexto da prática?",
    opcoes:["Gestores escolares, professores, alunos e encarregados de educação","Doadores internacionais e o MINEDH","Técnicos e juristas do ministério","Investigadores e avaliadores externos"],
    detalhe:"O contexto da prática é onde se dá a conversão de salas primárias e a adaptação de rotinas escolares.",
    fonte:"Quadro 1, p. 14" },

  { id:"n2-22", tipo:"mc", tema:"Mainardes", pergunta:"Qual é, para Mainardes (2006), a principal virtude do Ciclo de Políticas?",
    opcoes:["Superar a dicotomia entre a dimensão macro-estrutural e a micro-sociológica","Permitir previsões estatísticas sobre a matrícula","Substituir a análise documental pela observação","Eliminar a influência das agências internacionais"],
    detalhe:"O ciclo articula o Estado, as leis e as agendas transnacionais com o quotidiano da sala de aula.",
    fonte:"Cap. 2.1.4.1, p. 13" },

  { id:"n2-23", tipo:"mc", tema:"Contexto histórico", pergunta:"Que estrutura dual caracterizava o sistema colonial português?",
    opcoes:["O ensino oficial para colonos e assimilados e o ensino rudimentar confiado às missões católicas","O ensino laico e o ensino militar","O ensino urbano gratuito e o rural pago","O ensino técnico e o ensino superior"],
    detalhe:"O Acordo Missionário de 1940 confiava às missões a instrução elementar da população rural, subserviente e voltada ao trabalho braçal.",
    fonte:"Cap. 2.2.1, p. 15" },

  { id:"n2-24", tipo:"mc", tema:"Contexto histórico", pergunta:"Que efeito teve a guerra civil de 1977-1992 sobre o sistema educativo?",
    opcoes:["Destruiu mais de 40% da rede escolar primária, matou professores e deslocou populações","Aumentou a matrícula por via da ajuda humanitária","Não teve impacto significativo na rede escolar","Concentrou os alunos nas zonas rurais"],
    detalhe:"O conflito mergulhou o sistema numa crise infra-estrutural profunda.",
    fonte:"Cap. 2.2.1.2, p. 16" },

  { id:"n2-25", tipo:"mc", tema:"Contexto histórico", pergunta:"Que papel o Estado assumiu com a Lei n.º 6/92?",
    opcoes:["De provedor único passou a entidade reguladora e parceira na prestação de serviços sociais","De regulador passou a provedor único","Deixou de intervir na educação","Passou a gerir directamente as escolas privadas"],
    detalhe:"A transição para a economia de mercado e o multipartidarismo redefiniram o papel do Estado.",
    fonte:"Cap. 2.2.2, pp. 16-17" },

  { id:"n2-26", tipo:"mc", tema:"Gargalo 7.ª/8.ª", pergunta:"Porque a transição da 7.ª para a 8.ª classe funcionava como «funil de exclusão social»?",
    opcoes:["Porque as escolas secundárias eram poucas e concentradas nas capitais e sedes distritais, sem vagas nem capacidade financeira para a deslocação","Porque os exames eram eliminatórios e sem segunda chamada","Porque os alunos não queriam prosseguir estudos","Porque a lei proibia a transição"],
    detalhe:"Milhares de adolescentes ficavam impedidos de prosseguir por falta de vagas ou incapacidade de custear transporte e permanência.",
    fonte:"Cap. 1.1 / 2.2.2.2, pp. 1-2 e 17" },

  { id:"n2-27", tipo:"mc", tema:"Gargalo 7.ª/8.ª", pergunta:"Que consequências sociais o trabalho associa ao abandono forçado após a 7.ª classe?",
    opcoes:["Exclusão social, desemprego juvenil, vulnerabilidade à criminalidade e trabalho infantil precário","Aumento da frequência do ensino técnico","Redução do trabalho informal","Maior retenção no ensino primário"],
    detalhe:"Adolescentes de 12 e 13 anos eram empurrados para o abandono e para a rua.",
    fonte:"Cap. 2.2.2.2, p. 17" },

  { id:"n2-28", tipo:"mc", tema:"PEE", pergunta:"Quais foram os três Planos Estratégicos da Educação referidos?",
    opcoes:["PEE I (1999-2003), PEE II (2006-2011) e PEE III (2012-2016)","PEE I (1992-1998), PEE II (2000-2005) e PEE III (2010-2015)","PEE I (2000-2004), PEE II (2005-2009) e PEE III (2010-2014)","PEE I (1987-1992), PEE II (1993-1999) e PEE III (2000-2010)"],
    detalhe:"Os PEE definiram a expansão do acesso ao ensino primário, a erradicação de propinas, a redução das disparidades de género e a eficiência do sistema.",
    fonte:"Cap. 2.2.3, p. 18" },

  { id:"n2-29", tipo:"mc", tema:"PCEB 2004", pergunta:"Como o PCEB de 2004 organizou os ciclos de aprendizagem?",
    opcoes:["1.º Ciclo (1.ª e 2.ª), 2.º Ciclo (3.ª à 5.ª) e 3.º Ciclo (6.ª e 7.ª)","1.º Ciclo (1.ª à 3.ª), 2.º Ciclo (4.ª à 6.ª) e 3.º Ciclo (7.ª à 9.ª)","Dois ciclos de quatro e três classes","Sem organização em ciclos"],
    detalhe:"O PCEB introduziu três ciclos e o regime de promoção semi-automática entre classes do mesmo ciclo.",
    fonte:"Cap. 2.2.3.1, p. 18" },

  { id:"n2-30", tipo:"mc", tema:"PCEB 2004", pergunta:"Que modelo linguístico o PCEB introduziu?",
    opcoes:["O ensino bilingue, com línguas moçambicanas de matriz bantu (L1) nas classes iniciais e português (L2)","O ensino exclusivo em português desde a 1.ª classe","O ensino em inglês a partir da 3.ª classe","O ensino em francês como segunda língua"],
    detalhe:"O bilingue procurava atenuar o choque linguístico das crianças rurais.",
    fonte:"Cap. 2.2.3.1, p. 18" },

  { id:"n2-31", tipo:"mc", tema:"PCEB 2004", pergunta:"O que era o «currículo local» no PCEB?",
    opcoes:["20% do tempo lectivo para conteúdos comunitários, ofícios práticos e saberes endógenos","Um currículo paralelo para escolas privadas","Um conjunto de disciplinas optativas de línguas estrangeiras","A formação cívica obrigatória na 7.ª classe"],
    detalhe:"O currículo local promovia a integração entre a escola e o meio.",
    fonte:"Cap. 2.2.3.1, p. 18" },

  { id:"n2-32", tipo:"mc", tema:"Massificação", pergunta:"Que paradoxo o trabalho assinala na expansão do acesso?",
    opcoes:["A expansão quantitativa das matrículas não foi acompanhada de investimento proporcional em salas de aula e formação docente","O acesso diminuiu com o aumento do orçamento","Os professores aumentaram mais rapidamente do que os alunos","A qualidade melhorou com a massificação"],
    detalhe:"Avaliações longitudinais revelaram deterioração na leitura, compreensão e raciocínio matemático.",
    fonte:"Cap. 2.2.3.2, p. 19" },

  { id:"n2-33", tipo:"mc", tema:"Reconversão EBC", pergunta:"Qual era a lógica da reconversão das escolas primárias em EBC?",
    opcoes:["Garantir a oferta das 8.ª e 9.ª classes na comunidade de origem, sem construir edifícios de raiz","Reduzir o número de professores necessários","Transferir as turmas para o ensino privado","Encerrar as escolas secundárias distritais"],
    detalhe:"A medida evitava a deslocação massiva dos alunos para edifícios secundários distantes.",
    fonte:"Cap. 1.1 / 2.2.4.2, pp. 2 e 20" },

  { id:"n2-34", tipo:"mc", tema:"Reconversão EBC", pergunta:"Que responsabilidades adicionais passaram para as direcções das escolas primárias?",
    opcoes:["A gestão administrativa, espacial e pedagógica das novas turmas do 3.º ciclo","Apenas a gestão financeira do ADE","A contratação de professores universitários","A certificação dos exames nacionais"],
    detalhe:"As direcções absorveram a coorte de adolescentes que antes abandonava em busca de vagas no ESG1 distrital.",
    fonte:"Cap. 2.2.4.2, p. 20" },

  { id:"n2-35", tipo:"mc", tema:"Política pública", pergunta:"Para Libâneo (2012), o que são políticas públicas educacionais?",
    opcoes:["O conjunto de decisões, acções, omissões, financiamentos e programas assumidos pelo Estado para regular o sistema de ensino","Apenas as leis aprovadas pelo Parlamento","Os planos de aula dos professores","As orientações das agências internacionais"],
    detalhe:"As políticas são forjadas em articulação, tensão ou disputa com sindicatos, pais, intelectuais, ONGs e organismos internacionais.",
    fonte:"Cap. 2.3.1, pp. 21-22" },

  { id:"n2-36", tipo:"mc", tema:"Política pública", pergunta:"Que duas funções paradoxais Torres (2001) e Lima (2011) atribuem às políticas educacionais?",
    opcoes:["Acumulação económica e legitimação política e ideológica","Inclusão social e redistribuição de renda","Formação técnica e investigação científica","Alfabetização e ensino superior"],
    detalhe:"A educação forma força de trabalho e, simultaneamente, legitima a ordem social.",
    fonte:"Cap. 2.3.1.1, p. 22" },

  { id:"n2-37", tipo:"mc", tema:"Apple", pergunta:"Porque Apple (2006) afirma que o currículo é um «campo de batalha»?",
    opcoes:["Porque nele se define o conhecimento oficial e que cultura merece ser transmitida, marginalizando saberes subalternos","Porque os professores disputam salários","Porque as escolas competem por alunos","Porque os manuais são produzidos no estrangeiro"],
    detalhe:"O currículo expressa os interesses materiais e as visões de mundo dos grupos dominantes.",
    fonte:"Cap. 2.3.1.2, pp. 22-23" },

  { id:"n2-38", tipo:"mc", tema:"Sacristán", pergunta:"Quais são os cinco níveis de transformação curricular de Sacristán?",
    opcoes:["Prescrito, apresentado aos professores, moldado pelos professores, em acção e realizado/avaliado","Nacional, provincial, distrital, escolar e individual","Formal, informal, oculto, nulo e extra","Teórico, prático, técnico, crítico e pós-crítico"],
    detalhe:"A tipologia mostra que o sucesso de uma reforma não se mede pela retórica do currículo prescrito.",
    fonte:"Cap. 2.3.2.1, pp. 23-24" },

  { id:"n2-39", tipo:"mc", tema:"Tardif", pergunta:"Que saberes Tardif (2002) identifica no trabalho docente?",
    opcoes:["Saberes da formação profissional, disciplinares, curriculares e experienciais","Saberes teóricos e saberes práticos apenas","Saberes científicos e saberes religiosos","Saberes individuais e saberes institucionais"],
    detalhe:"O trabalho docente é uma praxis complexa mobilizada por um amálgama de saberes plurais e em mutação.",
    fonte:"Cap. 2.3.2.2, p. 24" },

  { id:"n2-40", tipo:"mc", tema:"Tardif", pergunta:"O que acontece quando o currículo muda por decreto sem apropriação pelos professores?",
    opcoes:["Os docentes tendem a refugiar-se em práticas rotineiras, defensivas e motorísticas do passado","Os docentes aderem imediatamente à inovação","Os docentes abandonam a profissão em massa","Os docentes passam a avaliar por projectos"],
    detalhe:"A autonomia pedagógica exige condições materiais dignas, estabilidade salarial e formação continuada não punitiva.",
    fonte:"Cap. 2.3.2.2, p. 25" },

  { id:"n2-41", tipo:"mc", tema:"Escolaridade obrigatória", pergunta:"Que função protectora a UNESCO (2020) atribui a um ciclo ininterrupto de 9 anos?",
    opcoes:["Prevenir o trabalho infantil, a gravidez na adolescência, o casamento prematuro e a exploração económica","Aumentar a competitividade das exportações","Reduzir a natalidade","Formar quadros para a função pública"],
    detalhe:"A escola fornece competências de vida e pensamento crítico essenciais à saúde pública e à coesão nacional.",
    fonte:"Cap. 2.3.3.1, p. 25" },

  { id:"n2-42", tipo:"mc", tema:"Inclusão excludente", pergunta:"O que significa «inclusão excludente» ou «exclusão por dentro»?",
    opcoes:["O Estado garante o acesso físico e a matrícula, mas exclui o aluno do direito ao conhecimento por degradação das condições","A exclusão de alunos por falta de documentos","A inclusão de alunos com deficiência em turmas regulares","A transferência de alunos para escolas privadas"],
    detalhe:"O estudante conclui o ciclo e obtém certificado, mas permanece privado das competências para a sua emancipação.",
    fonte:"Cap. 2.3.3.2, pp. 25-26" },

  { id:"n2-43", tipo:"mc", tema:"Desafios infra-estruturais", pergunta:"Que condições de leccionação o MINEDH (2020, p. 25) reconhece?",
    opcoes:["Turmas em salas de construção precária ou ao ar livre, sentadas no chão, expostas às intempéries","Funcionamento exclusivo em edifícios de alvenaria","Uso generalizado de salas digitais","Turmas médias de 30 alunos"],
    detalhe:"Centenas de milhares de alunos estudam em condições precárias, sob a sombra de árvores e alpendres improvisados.",
    fonte:"Cap. 2.4.1.1, p. 27" },

  { id:"n2-44", tipo:"mc", tema:"Mobiliário", pergunta:"Porque o mobiliário escolar das EBC é considerado inadequado?",
    opcoes:["Porque se mantêm carteiras bipessoais concebidas para crianças de 6 ou 7 anos, usadas por adolescentes de 14 a 16 anos","Porque é demasiado moderno para as escolas públicas","Porque é fabricado localmente","Porque não existe mobiliário em nenhuma escola"],
    detalhe:"A inadequação provoca desconforto, posturas lesivas da coluna e decréscimo da concentração.",
    fonte:"Cap. 2.4.1.2, p. 28" },

  { id:"n2-45", tipo:"mc", tema:"Formação docente", pergunta:"Como se caracterizava historicamente a divisão da formação de professores?",
    opcoes:["IFP para o ensino primário com modelo generalista e universidades para o secundário com paradigma disciplinar","Universidades para o primário e IFP para o secundário","Ambas as formações eram idênticas","Apenas as universidades formavam professores"],
    detalhe:"A abrupta transferência das turmas de 8.ª e 9.ª para as EBC mobilizou professores generalistas dos IFP.",
    fonte:"Cap. 2.4.2, pp. 29-30" },

  { id:"n2-46", tipo:"mc", tema:"Formação docente", pergunta:"Que consequência o desfasamento entre formação e disciplina leccionada produz?",
    opcoes:["Insegurança profissional e um ensino mecânico, assente na leitura do manual e na recusa do debate científico","Maior criatividade metodológica","Redução do absentismo docente","Melhoria dos resultados dos alunos"],
    detalhe:"O desfasamento gera dificuldades em esclarecer dúvidas analíticas dos alunos.",
    fonte:"Cap. 2.4.2.1, p. 30" },

  { id:"n2-47", tipo:"mc", tema:"Metodologias", pergunta:"Porque predominam as metodologias expositivas nas EBC?",
    opcoes:["Pela sobrelotação, ruído, falta de espaço e turnos curtos, que empurram o docente para o ensino frontal","Por opção ideológica dos professores contra o construtivismo","Por exigência expressa da Lei n.º 18/2018","Por falta de formação em pedagogia"],
    detalhe:"O modelo frontal centra-se na autoridade vocal do professor, na memorização e no ditado passivo.",
    fonte:"Cap. 2.4.2.2, p. 30" },

  { id:"n2-48", tipo:"mc", tema:"Avaliação", pergunta:"O que é «aprovação administrativa» no trabalho?",
    opcoes:["A transição de alunos sem competências por pressão para cumprir metas de aproveitamento e evitar a retenção","A aprovação de professores por concurso público","A autorização ministerial para abrir turmas","O registo de notas no sistema informático"],
    detalhe:"Gera acúmulo de deficits cognitivos que se manifestam nos exames nacionais e na vida profissional.",
    fonte:"Cap. 2.4.2.3, pp. 30-31" },

  { id:"n2-49", tipo:"mc", tema:"Convivência", pergunta:"Que faixas etárias convivem no mesmo recinto escolar com a reconversão?",
    opcoes:["Crianças de 6 e 7 anos do 1.º Ciclo e adolescentes de 14 a 17 anos do 3.º Ciclo","Crianças de 10 a 12 anos e jovens de 18 a 20 anos","Apenas adolescentes de 14 a 17 anos","Crianças de 6 a 9 anos e adultos"],
    detalhe:"A ausência de espaços separados, a partilha de balneários e a falta de apoio psicopedagógico geram tensões.",
    fonte:"Cap. 2.4.3.1, p. 31" },

  { id:"n2-50", tipo:"mc", tema:"ADE", pergunta:"Que problemas afectam o ADE após a expansão?",
    opcoes:["Os montantes per capita não foram reajustados nem indexados e há atrasos na transferência das tranches","O ADE passou a ser pago directamente às famílias","O ADE foi extinto em 2018","O ADE só financia a construção de laboratórios"],
    detalhe:"A falta de liquidez obriga gestores a recorrer a contribuições informais dos pais para manter a escola aberta.",
    fonte:"Cap. 2.4.3.2, p. 32" },

  { id:"n2-51", tipo:"mc", tema:"Percepções docentes", pergunta:"Que três factores compõem o desgaste profissional dos professores, segundo a secção 2.5.1.2?",
    opcoes:["Turmas com mais de 80 alunos, cargas horárias em três turnos e pressão burocrática","Salários elevados, falta de alunos e excesso de férias","Formação superior, estabilidade e reconhecimento","Turnos reduzidos, turmas pequenas e autonomia"],
    detalhe:"A isto acresce a erosão do poder de compra dos salários e o preenchimento diário de formulários estatísticos.",
    fonte:"Cap. 2.5.1.2, p. 33" },

  { id:"n2-52", tipo:"mc", tema:"Estado da arte", pergunta:"Que padrão a literatura internacional identifica nas reformas de universalização decretadas top-down?",
    opcoes:["Resvalam para crises estruturais quando não são sustentadas por planificação financeira, infra-estruturas e valorização docente","Aumentam sempre a qualidade da aprendizagem","São indiferentes ao financiamento","Dependem apenas da vontade dos professores"],
    detalhe:"A convergência é quase axiomática nos casos do Brasil, Chile, Nigéria, Quénia, África do Sul e Ruanda.",
    fonte:"Cap. 2.6.1, p. 35" },

  { id:"n2-53", tipo:"mc", tema:"Estado da arte", pergunta:"Que tipo de estudos a autora considera escassos em Moçambique?",
    opcoes:["Estudos empíricos qualitativos e etnográficos que analisem a recontextualização da Lei n.º 18/2018 no chão da escola","Estudos estatísticos sobre a matrícula","Manuais de formação de professores","Relatórios de auditoria financeira"],
    detalhe:"A maioria dos diagnósticos pré-existentes incide sobre análises documentais e relatórios macro-estatísticos.",
    fonte:"Cap. 2.6.2, p. 36" },

  { id:"n2-54", tipo:"mc", tema:"Metodologia", pergunta:"Que cinco características Bogdan e Biklen (1994) atribuem à investigação qualitativa?",
    opcoes:["Ambiente natural como fonte de dados; carácter descritivo; interesse no processo; análise indutiva; importância dos significados","Aleatoriedade, replicabilidade, objectividade, mensurabilidade e generalização","Hipótese, variável, amostra, teste e conclusão","Observação, experimentação, medição, comparação e previsão"],
    detalhe:"A opção qualitativa justifica-se por o objecto não se reduzir a variáveis mensuráveis.",
    fonte:"Cap. 3.1, p. 38" },

  { id:"n2-55", tipo:"mc", tema:"Metodologia", pergunta:"Porque foi escolhido o estudo de caso múltiplo e não o caso único?",
    opcoes:["Para permitir comparações intra e inter-contextuais e obter evidência mais robusta e generalizável","Porque o caso único é proibido em educação","Para reduzir o número de entrevistas","Porque permite tratamento estatístico"],
    detalhe:"Yin (2015, p. 58) considera a evidência de casos múltiplos mais robusta e convincente.",
    fonte:"Cap. 3.2, pp. 38-39" }
];
