/* ============================================================
   app.js — Quiz de Defesa
   Motor: níveis, rotação do banco, temporizador 10s + revelação 5s.
   ============================================================ */
(function () {
  "use strict";

  /* ------------------------- Configuração ------------------------- */
  var IS_TOUCH = window.matchMedia ? window.matchMedia("(hover: none)").matches : false;
  var SEG_PERGUNTA = 10;   // segundos para responder
  var SEG_REVELAR = 5;     // segundos com a resposta visível
  var POR_SESSAO = 10;     // perguntas por ronda

  var NIVEIS = {
    1: { nome: "Fundamentos", cor: "#4e8f6a", corTxt: "#1e5c3f", corBg: "rgba(78,143,106,.14)",
         desc: "Identificação do trabalho, siglas e ideias-âncora.",
         selo: "Aquecimento" },
    2: { nome: "Aprofundamento", cor: "#2f7fa0", corTxt: "#1b5570", corBg: "rgba(47,127,160,.13)",
         desc: "Estrutura do SNE, comparação das leis e actores.",
         selo: "Consolidação" },
    3: { nome: "Precisão", cor: "#b8862a", corTxt: "#6f5007", corBg: "rgba(184,134,42,.15)",
         desc: "Números, quadros, instrumentos e pormenores do desenho.",
         selo: "Rigor" },
    4: { nome: "Análise", cor: "#a8612c", corTxt: "#6f3c12", corBg: "rgba(168,97,44,.14)",
         desc: "Articulação teoria-prática, citações e coerência metodológica.",
         selo: "Interpretação" },
    5: { nome: "Banca", cor: "#8e3b4d", corTxt: "#66222f", corBg: "rgba(142,59,77,.13)",
         desc: "Objectões do júri e respostas abertas de defesa.",
         selo: "Defesa" }
  };

  var LS = {
    stats: "quizdefesa.stats.v1",
    decks: "quizdefesa.decks.v1",
    erros: "quizdefesa.erros.v1",
    preferencias: "quizdefesa.prefs.v1"
  };

  /* ------------------------- Utilidades ------------------------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function lerLS(k, fb) {
    try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch (e) { return fb; }
  }
  function gravarLS(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* modo privado */ }
  }

  /* ------------------------- Banco ------------------------- */
  function bancoBruto(nivel) {
    var a = (window.DADOS && window.DADOS[nivel]) ? window.DADOS[nivel].slice() : [];
    var b = (window.BANCO_GERADO && window.BANCO_GERADO[nivel]) ? window.BANCO_GERADO[nivel].slice() : [];
    return a.concat(b).map(function (q) {
      // a lista onde a pergunta vive define o seu nível
      if (q.nivel !== nivel) {
        var copia = {};
        for (var k in q) if (Object.prototype.hasOwnProperty.call(q, k)) copia[k] = q[k];
        copia.nivel = nivel;
        return copia;
      }
      return q;
    });
  }

  function bancoCompleto() {
    var out = [];
    for (var n = 1; n <= 5; n++) out = out.concat(bancoBruto(n));
    return out;
  }

  function indexar() {
    var idx = {};
    bancoCompleto().forEach(function (q) { idx[q.id] = q; });
    return idx;
  }

  /* Normaliza uma pergunta para a sessão: opções baralhadas e resposta registada. */
  function preparar(q) {
    var c = {
      id: q.id, tipo: q.tipo || "mc", tema: q.tema || "", nivel: q.nivel || 1,
      pergunta: q.pergunta, detalhe: q.detalhe || "", fonte: q.fonte || "",
      resposta: q.resposta || "", opcoes: null, correta: null
    };
    if (c.tipo === "mc") {
      var ops = (q.opcoes || []).slice();
      c.correta = ops[0];
      c.opcoes = shuffle(ops);
    }
    return c;
  }

  /* Gera a fila de uma sessão, respeitando a rotação guardada. */
  function construirFila(nivel, quantidade) {
    var bruto = bancoBruto(nivel);
    var porId = {};
    bruto.forEach(function (q) { porId[q.id] = q; });
    var todos = bruto.map(function (q) { return q.id; });

    var decks = lerLS(LS.decks, {});
    var restantes = (decks[nivel] || []).filter(function (id) { return porId[id]; });

    var fila = [];
    var usados = [];

    while (fila.length < quantidade) {
      if (!restantes.length) {
        // recomeça a rotação, evitando repetir imediatamente os últimos usados
        var recentes = (decks["ultimo_" + nivel] || []).slice(-4);
        restantes = shuffle(todos.filter(function (id) { return recentes.indexOf(id) < 0; }));
        if (!restantes.length) restantes = shuffle(todos.slice());
      }
      var id = restantes.shift();
      if (usados.indexOf(id) >= 0) continue;
      usados.push(id);
      fila.push(preparar(porId[id]));
    }

    decks[nivel] = restantes;
    decks["ultimo_" + nivel] = usados;
    gravarLS(LS.decks, decks);
    return fila;
  }

  /* Modo defesa: mistura níveis, com peso crescente nos níveis altos. */
  function construirFilaDefesa(quantidade) {
    var pesos = { 1: 1, 2: 2, 3: 3, 4: 3, 5: 4 };
    var saco = [];
    for (var n = 1; n <= 5; n++) for (var i = 0; i < pesos[n]; i++) saco.push(n);
    var fila = [], vistos = {};
    var guardar = 0;
    while (fila.length < quantidade && guardar < 200) {
      guardar++;
      var nivel = saco[Math.floor(Math.random() * saco.length)];
      var bruto = bancoBruto(nivel);
      if (!bruto.length) continue;
      var q = bruto[Math.floor(Math.random() * bruto.length)];
      if (vistos[q.id]) continue;
      vistos[q.id] = 1;
      fila.push(preparar(q));
    }
    return fila;
  }

  /* ------------------------- Estado ------------------------- */
  var S = {
    ecra: "inicio",
    sessao: 0,
    modo: "nivel",
    nivel: 1,
    fila: [],
    indice: 0,
    respostas: [],
    fase: "pergunta",       // pergunta | revelado | pausa
    restante: SEG_PERGUNTA * 1000,
    t0: 0,
    raf: null,
    timeoutRevelar: null,
    ultimaFase: "pergunta",
    som: true,
    responder: null
  };

  /* ------------------------- Som ------------------------- */
  var audioCtx = null;
  function beep(freq, dur, vol, tipo) {
    if (!S.som) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === "suspended") audioCtx.resume();
      var o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.type = tipo || "sine";
      o.frequency.value = freq;
      g.gain.value = vol == null ? 0.05 : vol;
      o.connect(g); g.connect(audioCtx.destination);
      var t = audioCtx.currentTime;
      g.gain.setValueAtTime(g.gain.value, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.start(t); o.stop(t + dur);
    } catch (e) { /* sem áudio */ }
  }
  function somCerto() { beep(660, 0.12, 0.06); setTimeout(function () { beep(880, 0.18, 0.05); }, 110); }
  function somErrado() { beep(200, 0.22, 0.055, "triangle"); }
  function somTempo() { beep(150, 0.3, 0.05, "sawtooth"); }
  function somTick() { beep(520, 0.04, 0.02, "square"); }

  /* ------------------------- Preferências ------------------------- */
  (function carregarPrefs() {
    var p = lerLS(LS.preferencias, {});
    S.som = p.som !== false;
  })();

  function guardarSom() {
    gravarLS(LS.preferencias, { som: S.som });
    var b = $("#btnSom");
    if (b) {
      b.setAttribute("aria-pressed", String(S.som));
      $("#iconeSom").textContent = S.som ? "🔊" : "🔇";
    }
  }

  /* ------------------------- Estatísticas ------------------------- */
  function statsVazias() {
    var s = {};
    for (var n = 1; n <= 5; n++) s[n] = { vistas: 0, certas: 0, erradas: 0, rondas: 0, melhor: 0 };
    s.defesa = { vistas: 0, certas: 0, erradas: 0, rondas: 0, melhor: 0 };
    return s;
  }
  function lerStats() {
    var s = lerLS(LS.stats, null);
    if (!s) return statsVazias();
    for (var n = 1; n <= 5; n++) if (!s[n]) s[n] = { vistas: 0, certas: 0, erradas: 0, rondas: 0, melhor: 0 };
    if (!s.defesa) s.defesa = { vistas: 0, certas: 0, erradas: 0, rondas: 0, melhor: 0 };
    return s;
  }
  function gravarStats(s) { gravarLS(LS.stats, s); }

  function registarErro(q) {
    var erros = lerLS(LS.erros, []);
    erros = erros.filter(function (e) { return e.id !== q.id; });
    erros.unshift({
      id: q.id, nivel: q.nivel, tema: q.tema, pergunta: q.pergunta,
      resposta: q.tipo === "mc" ? q.correta : q.resposta,
      detalhe: q.detalhe, fonte: q.fonte
    });
    gravarLS(LS.erros, erros.slice(0, 60));
  }

  /* ------------------------- Toast ------------------------- */
  var toastTimer = null;
  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("visivel");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("visivel"); }, 2400);
  }

  /* ============================================================
     ECRÃ: INÍCIO
     ============================================================ */
  function renderInicio() {
    S.ecra = "inicio";
    pararTudo();
    var stats = lerStats();
    var totalBanco = bancoCompleto().length;

    var niveisCards = "";
    for (var n = 1; n <= 5; n++) {
      var cfg = NIVEIS[n];
      var st = stats[n];
      var total = bancoBruto(n).length;
      var pct = st.melhor || 0;
      niveisCards +=
        '<button class="nivel-card" data-nivel="' + n + '" style="--cor-nivel:' + cfg.cor +
        ';--cor-nivel-txt:' + cfg.corTxt + ';--cor-nivel-bg:' + cfg.corBg + '">' +
          '<div class="nivel-topo">' +
            '<span class="nivel-selo">' + esc(cfg.selo) + '</span>' +
            '<span class="nivel-num">' + n + '</span>' +
          '</div>' +
          '<h3>' + esc(cfg.nome) + '</h3>' +
          '<p>' + esc(cfg.desc) + '</p>' +
          '<div class="nivel-rodape">' +
            '<span>' + total + ' perguntas</span>' +
            '<span class="mini-barra"><i style="width:' + pct + '%"></i></span>' +
            '<b>' + (st.rondas ? pct + "%" : "novo") + '</b>' +
          '</div>' +
        '</button>';
    }

    $("#vista").innerHTML =
      '<section class="hero">' +
        '<div class="hero-texto papel">' +
          '<span class="eyebrow">Preparação para a defesa</span>' +
          '<h1>Domine cada recanto do seu <em>projecto de pesquisa</em>.</h1>' +
          '<p class="hero-sub">Perguntas que um júri pode fazer — todas respondidas pelo próprio trabalho. ' +
            'Dez segundos para responder, cinco para fixar. Sem repetições, sem ordem de capítulos.</p>' +
          '<div class="hero-meta">' +
            '<span><b>5</b> níveis de dificuldade</span>' +
            '<span><b>10 s</b> por pergunta</span>' +
            '<span><b>5 s</b> de resposta</span>' +
            '<span><b>' + totalBanco + '</b> perguntas no banco</span>' +
          '</div>' +
        '</div>' +
        '<aside class="hero-painel">' +
          '<h2>O trabalho em números</h2>' +
          '<p>Projecto de pesquisa · UP-Maputo · 2026</p>' +
          '<div class="painel-linha"><span>Lei em estudo</span><b>18/2018</b></div>' +
          '<div class="painel-linha"><span>Escolas (EBC)</span><b>4</b></div>' +
          '<div class="painel-linha"><span>Participantes</span><b>52</b></div>' +
          '<div class="painel-linha"><span>Orçamento</span><b>120.750 MZN</b></div>' +
          '<div class="painel-linha"><span>Contextos de Ball</span><b>3 + 2</b></div>' +
          '<p class="painel-nota">«A política não é apenas recebida e aplicada; ela é interpretada e traduzida.» — Bowe, Ball &amp; Gold, 1992, p. 22</p>' +
        '</aside>' +
      '</section>' +

      '<div class="seccao-titulo">' +
        '<h2>Escolha o nível</h2>' +
        '<p>Rondas de ' + POR_SESSAO + ' perguntas · o banco roda e não se repete</p>' +
      '</div>' +
      '<div class="niveis">' + niveisCards + '</div>' +

      '<div class="accoes-inicio">' +
        '<button class="btn btn-primario" data-nav="defesa">Simular a banca</button>' +
        '<button class="btn btn-fantasma" data-nav="revisao">Consultar o banco</button>' +
        '<button class="btn btn-fantasma" data-nav="progresso">Ver progresso</button>' +
      '</div>';

    $$(".nivel-card").forEach(function (b) {
      b.addEventListener("click", function () {
        S.modo = "nivel";
        S.nivel = parseInt(b.getAttribute("data-nivel"), 10);
        iniciarSessao();
      });
    });
  }

  /* ============================================================
     SESSÃO DE JOGO
     ============================================================ */
  function iniciarSessao(filaPronta) {
    S.sessao++;
    S.fila = filaPronta || (S.modo === "defesa"
      ? construirFilaDefesa(POR_SESSAO)
      : construirFila(S.nivel, POR_SESSAO));
    S.indice = 0;
    S.respostas = [];
    renderJogo();
  }

  function renderJogo() {
    S.ecra = "jogo";
    var q = S.fila[S.indice];
    if (!q) { renderResultado(); return; }

    var cfg = NIVEIS[q.nivel] || NIVEIS[1];
    var pct = Math.round((S.indice / S.fila.length) * 100);

    $("#vista").innerHTML =
      '<div class="jogo-topo">' +
        '<div class="migalhas">' +
          '<span class="nivel-chip">Nível ' + q.nivel + ' · ' + esc(cfg.nome) + '</span>' +
          '<b id="posPergunta">Pergunta ' + (S.indice + 1) + ' de ' + S.fila.length + '</b>' +
          '<span class="tag tema">' + esc(q.tema || "Geral") + '</span>' +
          (q.tipo === "aberta" ? '<span class="tag aberta">Resposta aberta</span>' : '') +
          '<button class="tag" id="btnAberta" title="Responder em voz alta">🎙 Responder' +
            (IS_TOUCH ? "" : " (Enter)") + '</button>' +
        '</div>' +
        '<div class="medidor">' +
          '<span class="barra"><i style="width:' + pct + '%"></i></span>' +
          '<b>' + S.respostas.filter(function (r) { return r.correta; }).length + '</b> acertos' +
        '</div>' +
      '</div>' +
      '<div class="palco"><div class="cartao-pergunta" id="cartao">' +
        '<div class="pergunta-cabeca">' +
          '<div class="timer" id="timer" role="timer" aria-label="Tempo restante">' +
            '<svg viewBox="0 0 74 74" width="74" height="74">' +
              '<circle class="trilho" cx="37" cy="37" r="32" fill="none" stroke-width="5"></circle>' +
              '<circle class="arco" id="arco" cx="37" cy="37" r="32" fill="none" stroke-width="5" ' +
                'stroke-dasharray="201.06" stroke-dashoffset="0"></circle>' +
            '</svg>' +
            '<span class="timer-num" id="timerNum">' + SEG_PERGUNTA + '</span>' +
          '</div>' +
          '<div class="pergunta-info">' +
            '<div class="pergunta-tags">' +
              '<span class="tag">' + (q.tipo === "aberta" ? "Responda em voz alta" : "Escolha uma opção") + '</span>' +
              '<span class="tag fonte">' + esc(q.fonte) + '</span>' +
            '</div>' +
            '<p class="pergunta-texto" id="textoPergunta">' + esc(q.pergunta) + '</p>' +
          '</div>' +
        '</div>' +
        '<div id="zonaResposta"></div>' +
      '</div></div>' +
      '<div class="jogo-accoes">' +
        '<span class="dica-tecla">' +
          (q.tipo === "mc" ? '<kbd>1</kbd>–<kbd>4</kbd> responder · ' : '') +
          '<kbd>P</kbd> pausar · <kbd>Esc</kbd> sair' +
        '</span>' +
        '<button class="btn btn-fantasma btn-pequeno" id="btnTerminar">Terminar ronda</button>' +
      '</div>';

    var ba = $("#btnAberta");
    if (ba) ba.addEventListener("click", function () { responderAberta(); });

    var bt = $("#btnTerminar");
    if (bt) bt.addEventListener("click", terminarRonda);

    desenharResposta(q);
    arrancarTempo();
  }

  function desenharResposta(q) {
    var zona = $("#zonaResposta");
    zona.innerHTML = "";

    if (q.tipo === "mc") {
      var ul = el("ul", "opcoes");
      ul.setAttribute("role", "list");
      q.opcoes.forEach(function (op, i) {
        var li = el("li");
        var b = el("button", "opcao");
        b.type = "button";
        b.setAttribute("data-opcao", op);
        b.innerHTML = '<span class="opcao-letra">' + "ABCD"[i] + '</span>' +
                      '<span class="opcao-texto">' + esc(op) + '</span>';
        b.addEventListener("click", function () { responderMC(op); });
        li.appendChild(b);
        ul.appendChild(li);
      });
      zona.appendChild(ul);
    } else {
      var caixa = el("div", "aberta-caixa");
      caixa.innerHTML =
        '<p>O júri fez a pergunta. Responda em voz alta e, no fim, compare com a resposta-modelo.</p>' +
        '<textarea id="notas" placeholder="Notas rápidas (opcional)…" aria-label="Notas da sua resposta"></textarea>' +
        '<div class="aberta-accoes">' +
          '<button class="btn btn-verde" id="btnRevelar">Revelar resposta</button>' +
          '<small>ou aguarde o fim do tempo</small>' +
        '</div>';
      zona.appendChild(caixa);
      $("#btnRevelar").addEventListener("click", function () { responderAberta(); });
    }
  }

  /* ------------------------- Temporizador ------------------------- */
  function arrancarTempo() {
    S.fase = "pergunta";
    S.restante = SEG_PERGUNTA * 1000;
    S.t0 = performance.now();
    S.ultimoSegundo = SEG_PERGUNTA;
    cancelAnimationFrame(S.raf);
    loop();
  }

  function loop() {
    if (S.fase !== "pergunta") return;
    var decorrido = performance.now() - S.t0;
    var restante = Math.max(0, SEG_PERGUNTA * 1000 - decorrido);
    S.restante = restante;

    var frac = restante / (SEG_PERGUNTA * 1000);
    var arco = $("#arco");
    if (arco) arco.setAttribute("stroke-dashoffset", String(201.06 * (1 - frac)));

    var seg = Math.ceil(restante / 1000);
    var num = $("#timerNum");
    if (num && num.textContent !== String(seg)) {
      num.textContent = seg;
      if (seg <= 3 && seg > 0) somTick();
    }
    var t = $("#timer");
    if (t) t.classList.toggle("urgente", restante <= 3000);

    if (restante <= 0) { tempoEsgotado(); return; }
    S.raf = requestAnimationFrame(loop);
  }

  function pararRelogio() {
    cancelAnimationFrame(S.raf);
    S.raf = null;
  }

  /* ------------------------- Responder ------------------------- */
  function responderMC(op) {
    if (S.fase !== "pergunta") return;
    var q = S.fila[S.indice];
    var certa = op === q.correta;
    pararRelogio();
    marcarOpcoes(op);
    revelar(q, certa ? "certa" : "errada");
  }

  function marcarOpcoes(escolhida) {
    var q = S.fila[S.indice];
    $$(".opcao").forEach(function (b) {
      var op = b.getAttribute("data-opcao");
      b.disabled = true;
      if (op === q.correta) {
        b.classList.add("certa");
        b.insertAdjacentHTML("beforeend", '<span class="opcao-marca" aria-hidden="true">✓</span>');
      } else if (op === escolhida) {
        b.classList.add("errada");
        b.insertAdjacentHTML("beforeend", '<span class="opcao-marca" aria-hidden="true">✕</span>');
      } else {
        b.classList.add("apagada");
      }
    });
  }

  function responderAberta(auto) {
    if (S.fase !== "pergunta") return;
    pararRelogio();
    var q = S.fila[S.indice];
    revelar(q, auto ? "tempo" : "aberta");
  }

  function tempoEsgotado() {
    if (S.fase !== "pergunta") return;
    pararRelogio();
    somTempo();
    var q = S.fila[S.indice];
    if (q.tipo === "mc") {
      $$(".opcao").forEach(function (b) {
        b.disabled = true;
        if (b.getAttribute("data-opcao") === q.correta) {
          b.classList.add("certa");
          b.insertAdjacentHTML("beforeend", '<span class="opcao-marca" aria-hidden="true">✓</span>');
        } else {
          b.classList.add("apagada");
        }
      });
    }
    revelar(q, "tempo");
  }

  /* ------------------------- Revelação (5 s) ------------------------- */
  function revelar(q, resultado) {
    S.fase = "revelado";
    var certa = resultado === "certa";
    S.respostas.push({ id: q.id, nivel: q.nivel, correta: certa, tempo: resultado === "tempo", tipo: q.tipo });

    var st = lerStats();
    var chave = S.modo === "defesa" ? "defesa" : q.nivel;
    st[chave].vistas++;
    if (certa) st[chave].certas++; else st[chave].erradas++;
    gravarStats(st);
    if (!certa && q.tipo === "mc") registarErro(q);

    if (certa) somCerto();
    else if (resultado !== "tempo") somErrado();

    var respostaTxt = q.tipo === "mc" ? q.correta : q.resposta;
    var titulo = certa ? "Resposta certa" : (resultado === "tempo" ? "Tempo esgotado" : "Resposta incorrecta");
    var classes = "revelacao" + (certa ? "" : (resultado === "tempo" ? " tempo" : " errou"));

    var extra = "";
    if (q.tipo === "aberta") {
      extra = '<div class="aberta-accoes" style="margin-top:14px">' +
        '<button class="btn btn-verde btn-pequeno" data-autoav="1">Acertei</button>' +
        '<button class="btn btn-claro btn-pequeno" data-autoav="0">Não acertei</button>' +
      '</div>';
    }

    var html =
      '<div class="' + classes + '" id="revelacao">' +
        '<div class="rev-cabeca">' +
          '<span>' + titulo + '</span>' +
          '<span class="rev-tempo">a seguir em <b id="revSeg">' + SEG_REVELAR + '</b> s</span>' +
        '</div>' +
        '<div class="rev-corpo">' +
          '<p class="rev-resposta">' + esc(respostaTxt) + '</p>' +
          (q.detalhe ? '<p class="rev-detalhe">' + esc(q.detalhe) + '</p>' : '') +
          '<p class="rev-fonte"><b>Fonte:</b> ' + esc(q.fonte) + '</p>' +
          extra +
        '</div>' +
        '<div class="rev-barra"><i></i></div>' +
      '</div>';

    var zona = $("#zonaResposta");
    zona.insertAdjacentHTML("beforeend", html);

    var rev = $("#revelacao");
    if (rev.scrollIntoView) rev.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // auto-avaliação da pergunta aberta
    $$("[data-autoav]", rev).forEach(function (b) {
      b.addEventListener("click", function () {
        autoAvaliada = true;
        var acertou = b.getAttribute("data-autoav") === "1";
        if (acertou) {
          // corrige as estatísticas registadas como erradas
          var s2 = lerStats();
          var k = S.modo === "defesa" ? "defesa" : q.nivel;
          s2[k].erradas = Math.max(0, s2[k].erradas - 1);
          s2[k].certas++;
          gravarStats(s2);
          var ultima = S.respostas[S.respostas.length - 1];
          if (ultima && ultima.id === q.id) ultima.correta = true;
        }
        avancar();
      });
    });

    // contagem decrescente de 5 s
    var inicio = performance.now();
    var autoAvaliada = false;
    (function conta() {
      if (S.fase !== "revelado") return;
      var falta = SEG_REVELAR * 1000 - (performance.now() - inicio);
      var seg = $("#revSeg");
      if (seg) seg.textContent = String(Math.max(0, Math.ceil(falta / 1000)));
      if (falta <= 0) {
        // nas perguntas abertas o avanço aguarda a auto-avaliação
        if (q.tipo === "aberta" && !autoAvaliada) {
          if (seg) { seg.textContent = "—"; seg.parentNode.innerHTML = "avalie para continuar"; }
          return;
        }
        avancar();
        return;
      }
      S.raf = requestAnimationFrame(conta);
    })();
  }

  function avancar() {
    if (S.ecra !== "jogo") return;
    pararRelogio();
    var cartao = $("#cartao");
    S.indice++;
    var tok = S.sessao;
    if (S.indice >= S.fila.length) {
      if (cartao) cartao.classList.add("sair");
      setTimeout(function () {
        if (S.ecra === "jogo" && S.sessao === tok) renderResultado();
      }, 180);
      return;
    }
    if (cartao) cartao.classList.add("sair");
    var token = S.sessao;
    setTimeout(function () {
      if (S.ecra === "jogo" && S.sessao === token) renderJogo();
    }, 170);
  }

  /* ============================================================
     ECRÃ: RESULTADO
     ============================================================ */
  function renderResultado() {
    S.ecra = "resultado";
    pararTudo();

    var total = S.respostas.length || 1;
    var certas = S.respostas.filter(function (r) { return r.correta; }).length;
    var pct = Math.round((certas / total) * 100);
    var chave = S.modo === "defesa" ? "defesa" : S.nivel;

    var st = lerStats();
    st[chave].rondas++;
    st[chave].melhor = Math.max(st[chave].melhor || 0, pct);
    gravarStats(st);

    var nivelTxt = S.modo === "defesa" ? "Simulação de banca" : "Nível " + S.nivel + " · " + NIVEIS[S.nivel].nome;
    var veredicto, conselho;
    if (pct >= 90) { veredicto = "Pronto para a banca."; conselho = "Domínio sólido. Mantenha o ritmo e treine a oralidade das respostas abertas."; }
    else if (pct >= 70) { veredicto = "Boa preparação."; conselho = "Sólido, mas ainda há arestas. Repita as perguntas erradas na revisão."; }
    else if (pct >= 50) { veredicto = "A caminho."; conselho = "Volte aos capítulos das perguntas falhadas antes de subir de nível."; }
    else { veredicto = "Ainda em aquecimento."; conselho = "Comece pelos Fundamentos e suba progressivamente; a banca não perdoa lacunas de base."; }

    var erros = S.respostas.filter(function (r) { return !r.correta; });
    var idx = indexar();
    var listaErros = erros.map(function (r) {
      var q = idx[r.id];
      if (!q) return "";
      var resp = q.tipo === "mc" ? preparar(q).correta : q.resposta;
      return '<div class="erro-item">' +
        '<p class="erro-p">' + esc(q.pergunta) + '</p>' +
        '<p class="erro-r"><b>Resposta:</b> ' + esc(resp) + '</p>' +
        (q.detalhe ? '<p class="erro-d">' + esc(q.detalhe) + '</p>' : '') +
        '<p class="erro-f">' + esc(q.fonte) + '</p>' +
      '</div>';
    }).join("");

    var circ = 2 * Math.PI * 56;
    $("#vista").innerHTML =
      '<div class="papel resultado-topo">' +
        '<div class="anel-resultado">' +
          '<svg viewBox="0 0 132 132" width="132" height="132">' +
            '<circle class="trilho" cx="66" cy="66" r="56" fill="none" stroke-width="9"></circle>' +
            '<circle class="arco" id="anelArco" cx="66" cy="66" r="56" fill="none" stroke-width="9" ' +
              'stroke-dasharray="' + circ.toFixed(1) + '" stroke-dashoffset="' + circ.toFixed(1) + '"></circle>' +
          '</svg>' +
          '<span class="pct">' + pct + '%<small>' + certas + "/" + total + '</small></span>' +
        '</div>' +
        '<div class="resultado-texto">' +
          '<span class="eyebrow">' + esc(nivelTxt) + '</span>' +
          '<h2>' + esc(veredicto) + '</h2>' +
          '<p>' + esc(conselho) + '</p>' +
          '<p class="nota-final">Melhor resultado neste nível: ' + st[chave].melhor + '%</p>' +
        '</div>' +
      '</div>' +
      '<div class="grelha-stats">' +
        '<div class="stat"><b>' + certas + '</b><span>Certas</span></div>' +
        '<div class="stat"><b>' + (total - certas) + '</b><span>Erradas</span></div>' +
        '<div class="stat"><b>' + st[chave].vistas + '</b><span>Já treinadas</span></div>' +
        '<div class="stat"><b>' + st[chave].rondas + '</b><span>Rondas</span></div>' +
      '</div>' +
      (erros.length ? '<div class="papel" style="padding:24px 26px;margin-top:20px">' +
        '<div class="revisao-erros" style="margin:0"><h3>Para rever antes da próxima ronda</h3>' + listaErros + '</div></div>' : '') +
      '<div class="accoes-inicio">' +
        '<button class="btn btn-primario" id="btnRepetir">Nova ronda' + (S.modo === "defesa" ? " de banca" : " no nível " + S.nivel) + '</button>' +
        '<button class="btn btn-fantasma" data-nav="inicio">Escolher outro nível</button>' +
        (erros.length ? '<button class="btn btn-fantasma" data-nav="revisao">Rever erros</button>' : '') +
      '</div>';

    setTimeout(function () {
      var a = $("#anelArco");
      if (a) a.setAttribute("stroke-dashoffset", String(circ * (1 - pct / 100)));
    }, 80);

    $("#btnRepetir").addEventListener("click", function () { iniciarSessao(); });
  }

  /* ============================================================
     ECRÃ: PROGRESSO
     ============================================================ */
  function renderProgresso() {
    S.ecra = "progresso";
    pararTudo();
    var st = lerStats();
    var total = bancoCompleto().length;

    var linhas = "";
    for (var n = 1; n <= 5; n++) {
      var cfg = NIVEIS[n], s = st[n];
      var pct = s.melhor || 0;
      linhas +=
        '<div class="linha-nivel" style="--cor-nivel:' + cfg.cor + ';--cor-nivel-txt:' + cfg.corTxt +
          ';--cor-nivel-bg:' + cfg.corBg + '">' +
          '<div class="ln-num">' + n + '</div>' +
          '<div class="ln-info">' +
            '<strong>' + esc(cfg.nome) + '</strong>' +
            '<span>' + s.vistas + ' perguntas treinadas · ' + s.certas + ' certas · ' + s.erradas + ' erradas</span>' +
            '<div class="ln-barra"><i style="width:' + pct + '%"></i></div>' +
          '</div>' +
          '<div class="ln-val"><b>' + pct + '%</b><br>melhor</div>' +
        '</div>';
    }

    var d = st.defesa;
    var dPct = d.melhor || 0;
    linhas +=
      '<div class="linha-nivel" style="--cor-nivel:#6b5b95;--cor-nivel-txt:#3f3460;--cor-nivel-bg:rgba(107,91,149,.14)">' +
        '<div class="ln-num">★</div>' +
        '<div class="ln-info">' +
          '<strong>Simulação de banca</strong>' +
          '<span>' + d.vistas + ' perguntas · ' + d.certas + ' certas · ' + d.erradas + ' erradas</span>' +
          '<div class="ln-barra"><i style="width:' + dPct + '%"></i></div>' +
        '</div>' +
        '<div class="ln-val"><b>' + dPct + '%</b><br>melhor</div>' +
      '</div>';

    var erros = lerLS(LS.erros, []);

    $("#vista").innerHTML =
      '<div class="papel painel-progresso">' +
        '<h2>O seu progresso</h2>' +
        '<p>' + total + ' perguntas disponíveis no banco · ' +
          Object.keys(st).reduce(function (a, k) { return a + (st[k].vistas || 0); }, 0) +
          ' respostas registadas nesta máquina</p>' +
        linhas +
        '<div class="accoes-progresso">' +
          '<button class="btn btn-primario" data-nav="inicio">Voltar aos níveis</button>' +
          '<button class="btn btn-fantasma" id="btnExportar">Exportar progresso</button>' +
          '<button class="btn btn-fantasma" id="btnLimpar">Apagar dados</button>' +
        '</div>' +
        (erros.length ? '<p style="margin-top:18px;font-size:.85rem;color:var(--texto-suave)">' +
          'Tem ' + erros.length + ' pergunta(s) marcada(s) para revisão. ' +
          '<button class="chip" data-nav="revisao" style="margin-left:6px">Abrir revisão</button></p>' : '') +
      '</div>';

    $("#btnExportar").addEventListener("click", function () {
      var dados = { stats: lerStats(), erros: lerLS(LS.erros, []), exportado: new Date().toISOString() };
      var blob = new Blob([JSON.stringify(dados, null, 2)], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "progresso-quiz-defesa.json";
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
      toast("Progresso exportado.");
    });

    $("#btnLimpar").addEventListener("click", function () {
      if (!confirm("Apagar todo o progresso e histórico de erros deste navegador?")) return;
      localStorage.removeItem(LS.stats);
      localStorage.removeItem(LS.erros);
      localStorage.removeItem(LS.decks);
      toast("Dados apagados.");
      renderProgresso();
    });
  }

  /* ============================================================
     ECRÃ: REVISÃO
     ============================================================ */
  var filtroRevisao = "todos";

  function renderRevisao() {
    S.ecra = "revisao";
    pararTudo();

    var todas = bancoCompleto();
    var filtro = filtroRevisao;
    var lista = todas.filter(function (q) {
      if (filtro === "todos") return true;
      if (filtro === "erros") {
        var erros = lerLS(LS.erros, []);
        return erros.some(function (e) { return e.id === q.id; });
      }
      if (filtro === "abertas") return q.tipo === "aberta";
      return String(q.nivel) === filtro;
    });

    var chips =
      '<button class="chip' + (filtro === "todos" ? " activo" : "") + '" data-filtro="todos">Todas (' + todas.length + ')</button>' +
      '<button class="chip' + (filtro === "erros" ? " activo" : "") + '" data-filtro="erros">Os meus erros</button>' +
      '<button class="chip' + (filtro === "abertas" ? " activo" : "") + '" data-filtro="abertas">Respostas abertas</button>';
    for (var n = 1; n <= 5; n++) {
      chips += '<button class="chip' + (filtro === String(n) ? " activo" : "") + '" data-filtro="' + n + '">Nível ' + n + '</button>';
    }

    var cartoes = lista.map(function (q) {
      var resp = q.tipo === "mc" ? preparar(q).correta : q.resposta;
      return '<details class="rev-card">' +
        '<summary>' +
          '<span class="rc-num">N' + q.nivel + '</span>' +
          '<span class="rc-p">' + esc(q.pergunta) + '</span>' +
          '<span class="rc-tag">' + esc(q.tema) + '</span>' +
        '</summary>' +
        '<div class="rc-corpo">' +
          '<p class="rc-r">' + esc(resp) + '</p>' +
          (q.detalhe ? '<p class="rc-d">' + esc(q.detalhe) + '</p>' : '') +
          '<p class="rc-f">Fonte: ' + esc(q.fonte) + '</p>' +
        '</div>' +
      '</details>';
    }).join("");

    $("#vista").innerHTML =
      '<div class="papel revisao-cabeca">' +
        '<h2>Todo o banco de perguntas</h2>' +
        '<p>Consulte livremente, sem cronómetro. Cada resposta indica o capítulo e a página de onde foi retirada, ' +
          'para poder conferir no trabalho antes da defesa.</p>' +
        '<div class="filtros">' + chips + '</div>' +
      '</div>' +
      '<div class="revisao-lista">' + (cartoes || '<div class="papel" style="padding:22px">Sem perguntas neste filtro.</div>') + '</div>';

    $$(".chip[data-filtro]").forEach(function (c) {
      c.addEventListener("click", function () {
        filtroRevisao = c.getAttribute("data-filtro");
        renderRevisao();
      });
    });
  }

  /* ============================================================
     ECRÃ: MODO DEFESA
     ============================================================ */
  function renderDefesa() {
    S.ecra = "defesa";
    pararTudo();

    $("#vista").innerHTML =
      '<div class="papel defesa-intro">' +
        '<span class="eyebrow">Simulação</span>' +
        '<h2>Dez perguntas. Um júri. Sem rede.</h2>' +
        '<p>As perguntas deste modo são sorteadas de todos os níveis, com maior peso nos níveis 3, 4 e 5 — ' +
          'exactamente onde a banca costuma apertar: números do trabalho, coerência metodológica e réplicas a objecções. ' +
          'Inclui respostas abertas, que deve dizer em voz alta antes de revelar a resposta-modelo.</p>' +
        '<div class="defesa-regras">' +
          '<div><b>10</b><span>perguntas por simulação</span></div>' +
          '<div><b>10 s</b><span>para cada resposta</span></div>' +
          '<div><b>5 s</b><span>de resposta-modelo</span></div>' +
          '<div><b>0</b><span>repetições na mesma ronda</span></div>' +
        '</div>' +
        '<div class="banca-lista">' +
          '<span class="tag tema">Metodologia</span>' +
          '<span class="tag tema">Ciclo de Políticas</span>' +
          '<span class="tag tema">Lei n.º 18/2018</span>' +
          '<span class="tag tema">Dados empíricos</span>' +
          '<span class="tag tema">Ética</span>' +
          '<span class="tag tema">Objectivos</span>' +
          '<span class="tag tema">Orçamento e cronograma</span>' +
        '</div>' +
        '<button class="btn btn-primario btn-largo" id="btnComecarDefesa">Começar a simulação</button>' +
      '</div>';

    $("#btnComecarDefesa").addEventListener("click", function () {
      S.modo = "defesa";
      iniciarSessao(construirFilaDefesa(POR_SESSAO));
    });
  }

  /* ============================================================
     NAVEGAÇÃO
     ============================================================ */
  function irPara(destino) {
    pararTudo();
    if (destino === "inicio") renderInicio();
    else if (destino === "defesa") renderDefesa();
    else if (destino === "revisao") renderRevisao();
    else if (destino === "progresso") renderProgresso();
    actualizarNav(destino);
  }

  function actualizarNav(destino) {
    $$("[data-nav]").forEach(function (b) {
      if (b.classList.contains("btn")) {
        b.classList.toggle("activo", b.getAttribute("data-nav") === destino);
      }
    });
  }

  function terminarRonda() {
    pararTudo();
    if (!S.respostas.length) { irPara("inicio"); return; }
    renderResultado();
  }

  function pararTudo() {
    pararRelogio();
    clearTimeout(S.timeoutRevelar);
    if (S.fase === "pausa") S.fase = "pergunta";
    var veu = $("#veuPausa");
    if (veu) veu.remove();
  }

  /* ------------------------- Pausa ------------------------- */
  function alternarPausa() {
    if (S.ecra !== "jogo") return;
    if (S.fase === "pausa") {
      // retomar
      S.fase = S.ultimaFase;
      document.body.classList.remove("pausado");
      var ov = $("#veuPausa");
      if (ov) ov.remove();
      if (S.fase === "pergunta") {
        S.t0 = performance.now() - (SEG_PERGUNTA * 1000 - S.restante);
        loop();
      }
    } else if (S.fase === "pergunta") {
      S.ultimaFase = S.fase;
      pararRelogio();
      S.fase = "pausa";
      var veu = el("div", "veu-pausa");
      veu.id = "veuPausa";
      veu.innerHTML = '<div class="veu-caixa"><h3>Pausa</h3><p>O cronómetro está parado.</p>' +
        '<button class="btn btn-primario" id="btnRetomar">Retomar</button></div>';
      document.body.appendChild(veu);
      $("#btnRetomar").addEventListener("click", alternarPausa);
    }
  }

  /* ============================================================
     EVENTOS GLOBAIS
     ============================================================ */
  document.addEventListener("click", function (e) {
    var nav = e.target.closest && e.target.closest("[data-nav]");
    if (nav) {
      e.preventDefault();
      irPara(nav.getAttribute("data-nav"));
    }
  });

  $("#irInicio").addEventListener("click", function () { irPara("inicio"); });

  $("#btnSom").addEventListener("click", function () {
    S.som = !S.som;
    guardarSom();
    toast(S.som ? "Som ligado" : "Som desligado");
  });

  // ajuda
  var ajuda = $("#dialogoAjuda");
  if (ajuda && ajuda.showModal) {
    document.addEventListener("keydown", function (e) {
      if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        e.preventDefault();
        if (!ajuda.open) ajuda.showModal();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    var emCampo = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);

    if (e.key === "Escape") {
      if (S.fase === "pausa") { alternarPausa(); return; }
      if (!$("#dialogoAjuda").open && S.ecra === "jogo") { terminarRonda(); return; }
    }
    if (emCampo) return;

    if (e.key === "p" || e.key === "P") { alternarPausa(); return; }

    if (S.ecra !== "jogo") return;
    var q = S.fila[S.indice];
    if (!q) return;

    if (S.fase === "pergunta" && q.tipo === "mc" && /^[1-4]$/.test(e.key)) {
      var i = parseInt(e.key, 10) - 1;
      if (q.opcoes[i]) { e.preventDefault(); responderMC(q.opcoes[i]); }
    }
    if (S.fase === "pergunta" && q.tipo === "aberta" && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      responderAberta();
    }
    if (S.fase === "revelado" && (e.key === "ArrowRight" || e.key === "Enter")) {
      e.preventDefault();
      avancar();
    }
  });

  // pausa automática ao mudar de separador
  document.addEventListener("visibilitychange", function () {
    if (document.hidden && S.ecra === "jogo" && S.fase === "pergunta") alternarPausa();
  });

  /* ------------------------- Arranque ------------------------- */
  guardarSom();
  renderInicio();

  // atalho discreto: ? abre a ajuda
  var dica = document.createElement("button");
  dica.className = "botao-ajuda";
  dica.type = "button";
  dica.setAttribute("aria-label", "Como funciona");
  dica.textContent = "?";
  dica.addEventListener("click", function () {
    if (ajuda && ajuda.showModal) ajuda.showModal();
  });
  document.body.appendChild(dica);
})();
