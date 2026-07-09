const R = {
  novidades:  'novidades.html',
  roupas:     'produtos.html?categoria=roupas',
  acessorios: 'produtos.html?categoria=acessorios',
  calcados:   'produtos.html?categoria=calcados',
  colecoes:   'colecoes.html',
  outlet:     'produtos.html?categoria=outlet',
  estilos:    'estilos.html',
  carrinho:   'carrinho.html',
  login:      'login.html',
  parceria:   'parceria.html',
  cadastro:   'cadastro.html',
  produto:    'produto.html',
  produtopag: 'produtopag.html',
  busca:      'produtos.html',
};

const ir = rota => window.location.href = rota;

/* ─── NAV LINKS ─── */
function initNav() {
  const map = {
    'novidades':  R.novidades,
    'roupas':     R.roupas,
    'acessórios': R.acessorios,
    'calçados':   R.calcados,
    'coleções':   R.colecoes,
    'outlet':     R.outlet,
  };
  document.querySelectorAll('nav a').forEach(a => {
    const t = a.textContent.trim().toLowerCase();
    if (map[t]) a.href = map[t];
  });
}

/* ─── BUSCA (lupa) ─── */
function initBusca() {
  const btn = document.querySelector('[aria-label="Buscar"]');
  if (!btn) return;

  document.head.insertAdjacentHTML('beforeend', `<style>
    #busca-overlay{position:fixed;inset:0;background:rgba(15,5,30,.85);z-index:9999;
      display:flex;align-items:flex-start;justify-content:center;padding-top:110px;
      backdrop-filter:blur(5px);animation:bFade .15s ease}
    #busca-box{background:#1e0f38;border:1.5px solid rgba(155,109,197,.45);
      border-radius:12px;padding:22px 24px;width:100%;max-width:540px;
      display:flex;align-items:center;gap:10px}
    #busca-input{flex:1;background:transparent;border:none;outline:none;
      font-family:inherit;font-size:16px;color:#f0e6ff}
    #busca-input::placeholder{color:rgba(201,174,232,.4)}
    #busca-btn{background:#e066a0;color:#fff;border:none;border-radius:4px;
      padding:9px 18px;font-family:inherit;font-size:11px;font-weight:700;
      letter-spacing:.1em;cursor:pointer}
    #busca-btn:hover{background:#d4568e}
    #busca-close{background:transparent;border:none;color:#9b6dc5;
      font-size:20px;cursor:pointer;line-height:1}
    @keyframes bFade{from{opacity:0}to{opacity:1}}
  </style>`);

  btn.addEventListener('click', () => {
    const o = document.createElement('div');
    o.id = 'busca-overlay';
    o.innerHTML = `
      <div id="busca-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="#9b6dc5" stroke-width="2" stroke-linecap="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input id="busca-input" placeholder="Buscar produtos..." autocomplete="off"/>
        <button id="busca-btn">PESQUISAR</button>
        <button id="busca-close">✕</button>
      </div>`;
    document.body.appendChild(o);
    document.getElementById('busca-input').focus();

    const buscar = () => {
      const v = document.getElementById('busca-input').value.trim();
      if (v) ir(`${R.busca}?busca=${encodeURIComponent(v)}`);
    };

    document.getElementById('busca-btn').onclick   = buscar;
    document.getElementById('busca-close').onclick = () => o.remove();
    o.addEventListener('click', e => { if (e.target === o) o.remove(); });
    o.addEventListener('keydown', e => {
      if (e.key === 'Enter') buscar();
      if (e.key === 'Escape') o.remove();
    });
  });
}

/* ─── LOGIN (pessoa) ─── */
function initLogin() {
  const btn = document.querySelector('[aria-label="Minha conta"]');
  if (btn) btn.addEventListener('click', () => ir(R.login));
}

/* ─── CARRINHO (sacola) ─── */
function initCarrinho() {
  const btn = document.querySelector('[aria-label="Carrinho"]');
  if (btn) btn.addEventListener('click', () => ir(R.carrinho));
}

/* ─── HERO: 3 botões ─── */
function initHero() {
  document.querySelectorAll('.btn-primary,.btn-secondary,.btn-outline').forEach(btn => {
    const t = btn.textContent.trim().toUpperCase();
    if (t.includes('EXPLORAR') || t.includes('COLEÇÃO'))  btn.onclick = () => ir(R.colecoes);
    if (t.includes('NOVIDADES'))                           btn.onclick = () => ir(R.novidades);
    if (t.includes('MONTE SEU ESTILO'))                    btn.onclick = () => ir(R.estilos);
  });
}

/* ─── CARDS DE ESTILO ─── */
function initEstilos() {
  const map = {
    'y2k':'y2k','grunge':'grunge','scene':'scene','goth':'goth',
    'gyaru':'gyaru','lolita':'lolita','hippie':'hippie',
  };
  document.querySelectorAll('.estilo-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.onclick = () => {
      const nome = card.querySelector('.estilo-nome')
        ?.textContent.trim().toLowerCase().replace(/\n/g,' ');
      ir(`${R.busca}?estilo=${encodeURIComponent(map[nome] || nome)}`);
    };
  });

  document.querySelectorAll('.btn-ver-todos').forEach(btn => {
    if (btn.textContent.includes('ESTILO')) btn.onclick = () => ir(R.estilos);
  });
}

/* ─── CARDS DE PRODUTO ─── */
function initProdutos() {
  document.querySelectorAll('.produto-card').forEach((card, i) => {
    card.style.cursor = 'pointer';
    card.onclick = e => {
      if (e.target.closest('.btn-fav')) return;
      ir(`${R.produtopag}?id=${card.dataset.id || i + 1}`);
    };
  });

  document.querySelectorAll('.btn-fav').forEach(btn => {
    btn.onclick = e => {
      e.stopPropagation();
      const on = btn.dataset.fav === '1';
      btn.dataset.fav    = on ? '0' : '1';
      btn.textContent    = on ? '♡' : '♥';
      btn.style.color    = on ? ''  : '#e066a0';
    };
  });

  // "Ver todos" da seção mais desejados
  document.querySelectorAll('.btn-ver-todos').forEach(btn => {
    if (!btn.textContent.includes('ESTILO'))
      btn.onclick = () => ir(R.busca);
  });
}

/* ─── COMUNIDADE: faça parte ─── */
function initComunidade() {
  document.querySelectorAll('.btn-faca-parte').forEach(btn => {
    btn.onclick = () => ir(R.parceria);
  });
}

/* ─── DOTS DE NAVEGAÇÃO (fotos comunidade) ─── */
function initDots() {
  const dots  = document.querySelectorAll('.comunidade-dots .dot');
  const fotos = document.querySelectorAll('.comunidade-fotos .foto-card');
  if (!dots.length || !fotos.length) return;

  dots.forEach((dot, i) => {
    dot.onclick = () => {
      dots.forEach(d  => d.classList.remove('active'));
      dot.classList.add('active');
      // scroll suave até o card correspondente (se houver)
      fotos[i]?.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
    };
  });
}

/* ─── NEWSLETTER: seta → cadastro com e-mail ─── */
function initNewsletter() {
  const btn   = document.querySelector('.newsletter-form button');
  const input = document.querySelector('.newsletter-form input');
  if (!btn || !input) return;

  const enviar = () => {
    const email = input.value.trim();
    if (!email) { input.focus(); return; }
    ir(`${R.cadastro}?email=${encodeURIComponent(email)}`);
  };

  btn.onclick = enviar;
  input.addEventListener('keydown', e => { if (e.key === 'Enter') enviar(); });
}

/* ─── FOOTER: links ─── */
function initFooterLinks() {
  const map = {
    'novidades':              R.novidades,
    'roupas':                 R.roupas,
    'acessórios':             R.acessorios,
    'calçados':               R.calcados,
    'coleções':               R.colecoes,
    'outlet':                 R.outlet,
    'trocas e devoluções':    'trocas.html',
    'rastreamento':           'rastreamento.html',
    'formas de pagamento':    'pagamento.html',
    'política de privacidade':'privacidade.html',
    'termos de uso':          'termos.html',
    'nossa história':         'quemsomos.html',
    'guias de estilo':        R.estilos,
    'blog lunéa':             'blog.html',
    'trabalhe conosco':       'trabalhe.html',
    'contato':                'contato.html',
    'central de ajuda':       'ajuda.html',
  };
  document.querySelectorAll('footer a').forEach(a => {
    const t = a.textContent.trim().toLowerCase();
    if (map[t]) a.href = map[t];
  });
}

/* ─── CADASTRO: preenche e-mail vindo da URL ─── */
function initCadastroEmail() {
  const email = new URLSearchParams(window.location.search).get('email');
  if (!email) return;
  const input = document.querySelector('input[type="email"],input[name="email"],#email');
  if (input) { input.value = decodeURIComponent(email); input.focus(); }
}

/* ─── PRODUTOS: aplica filtros da URL ─── */
function initFiltros() {
  const p         = new URLSearchParams(window.location.search);
  const categoria = p.get('categoria');
  const estilo    = p.get('estilo');
  const busca     = p.get('busca');

  window.LUNEA_FILTROS = { categoria, estilo, busca };

  document.querySelectorAll('[data-filtro]').forEach(btn =>
    btn.classList.toggle('ativo', btn.dataset.filtro === categoria)
  );

  document.querySelectorAll('.produto-card').forEach(card => {
    let ok = true;
    if (categoria && card.dataset.categoria !== categoria) ok = false;
    if (estilo    && card.dataset.estilo    !== estilo)    ok = false;
    if (busca) {
      const nome = card.querySelector('.produto-nome')?.textContent.toLowerCase() || '';
      if (!nome.includes(busca.toLowerCase())) ok = false;
    }
    card.style.display = ok ? '' : 'none';
  });
}

/* ═══════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initBusca();
  initLogin();
  initCarrinho();
  initHero();
  initEstilos();
  initProdutos();
  initComunidade();
  initDots();
  initNewsletter();
  initFooterLinks();
  if (location.pathname.includes('cadastro')) initCadastroEmail();
  if (location.pathname.includes('produtos'))  initFiltros();
});
