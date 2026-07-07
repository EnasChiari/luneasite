   /* ══════════════════════════════════════
       PAGINAÇÃO — exibe N cards por página
    ══════════════════════════════════════ */
    const POR_PAGINA = 12;
    let pagAtual = 1;
    
    function getProdutosVisiveis() {
      return [...document.querySelectorAll('#produtos-grid .produto-card')]
        .filter(c => c.style.display !== 'none');
    }
    
    function renderizarPagina(pag) {
      pagAtual = pag;
      const todos = getProdutosVisiveis();
      const total = todos.length;
      const totalPags = Math.max(1, Math.ceil(total / POR_PAGINA));
      pagAtual = Math.min(pagAtual, totalPags);
    
      const inicio = (pagAtual - 1) * POR_PAGINA;
      const fim = inicio + POR_PAGINA;
    
      todos.forEach((card, i) => {
        card.style.display = (i >= inicio && i < fim) ? '' : 'none';
      });
    
      const contador = document.querySelector('.produtos-count');
      if (contador) {
        const exibindo = Math.min(POR_PAGINA, total - inicio);
        contador.innerHTML = total > 0
          ? `Mostrando <strong>${exibindo} de ${total} produto${total === 1 ? '' : 's'}</strong>`
          : 'Nenhum produto encontrado';
      }
    
      renderizarBotoesPaginacao(pagAtual, totalPags);
      document.querySelector('.produtos-area')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    function renderizarBotoesPaginacao(atual, total) {
      const container = document.querySelector('.paginacao');
      if (!container) return;
      container.style.display = total <= 1 ? 'none' : 'flex';
    
      container.innerHTML = `
        <button class="pag-btn arrow" id="pag-prev">‹</button>
        ${gerarNumerosPaginacao(atual, total)}
        <button class="pag-btn arrow" id="pag-next">›</button>
      `;
    
      container.querySelectorAll('.pag-btn[data-pag]').forEach(btn => {
        btn.addEventListener('click', () => renderizarPagina(parseInt(btn.dataset.pag)));
      });
      document.getElementById('pag-prev').addEventListener('click', () => {
        if (pagAtual > 1) renderizarPagina(pagAtual - 1);
      });
      document.getElementById('pag-next').addEventListener('click', () => {
        if (pagAtual < total) renderizarPagina(pagAtual + 1);
      });
    }
    
    function gerarNumerosPaginacao(atual, total) {
      const btns = [];
      const classe = n =>
        `<button class="pag-btn${n === atual ? ' ativo' : ''}" data-pag="${n}">${n}</button>`;
      const ellipsis = `<button class="pag-btn ellipsis" disabled>...</button>`;
    
      if (total <= 7) {
        for (let i = 1; i <= total; i++) btns.push(classe(i));
      } else {
        btns.push(classe(1));
        if (atual > 3) btns.push(ellipsis);
        for (let i = Math.max(2, atual - 1); i <= Math.min(total - 1, atual + 1); i++) {
          btns.push(classe(i));
        }
        if (atual < total - 2) btns.push(ellipsis);
        btns.push(classe(total));
      }
      return btns.join('');
    }
    
    function resetarPaginacao() {
      renderizarPagina(1);
    }
    

/* ══════════════════════════════════════
       FILTRO DE ESTILO (banner + clique novamente desmarca)
    ══════════════════════════════════════ */
    document.querySelectorAll('.filtro-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const jaAtivo = btn.classList.contains('ativo');
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));

        if (jaAtivo) {
          // desmarcar: esconde o banner de estilo
          document.querySelector('.estilo-banner').style.display = 'none';
          document.getElementById('breadcrumb-atual').textContent = 'Catálogo de Produtos';
        } else {
          btn.classList.add('ativo');
          document.querySelector('.estilo-banner').style.display = '';
          const img  = document.getElementById('banner-img');
          const nome = document.getElementById('banner-nome');
          const desc = document.getElementById('banner-desc');
          if (img)  img.src = btn.dataset.banner || '';
          if (nome) nome.textContent = btn.dataset.nome || '';
          if (desc) desc.innerHTML = btn.dataset.desc || '';
          document.getElementById('breadcrumb-atual').textContent = btn.dataset.nome || 'Catálogo';
        }
        aplicarFiltros();
      });
    });

    document.getElementById('filtros-arrow-btn')?.addEventListener('click', () => {
      document.getElementById('filtros-scroll').scrollBy({ left: 200, behavior: 'smooth' });
    });

    /* ══════════════════════════════════════
       CHECKBOXES: lógica "Todos" mutuamente exclusiva
    ══════════════════════════════════════ */
    function initCheckGroup(groupId) {
      const grupo = document.getElementById(groupId);
      if (!grupo) return;
      const todos  = grupo.querySelector('input[value="todos"]');
      const outros = [...grupo.querySelectorAll('input:not([value="todos"])')];

      todos?.addEventListener('change', () => {
        if (todos.checked) outros.forEach(i => i.checked = false);
        aplicarFiltros();
      });

      outros.forEach(input => {
        input.addEventListener('change', () => {
          if (input.checked && todos) todos.checked = false;
          // se nenhum outro estiver marcado, volta pro "Todos"
          if (todos && !outros.some(i => i.checked)) todos.checked = true;
          aplicarFiltros();
        });
      });
    }
    initCheckGroup('grupo-categoria');

    /* ══════════════════════════════════════
       TIPO DE PEÇA E TAMANHO — mudam conforme a categoria
    ══════════════════════════════════════ */

    // Opções de "Tipo de Peça" para cada categoria
    const TIPOS_POR_CATEGORIA = {
      todos: [
        { value: 'camisetas',   label: 'Camisetas' },
        { value: 'moletons',    label: 'Moletons' },
        { value: 'saias',       label: 'Saias' },
        { value: 'calcas',      label: 'Calças' },
        { value: 'vestidos',    label: 'Vestidos' },
        { value: 'jaquetas',    label: 'Jaquetas' },
        { value: 'top-cropped', label: 'Top / Cropped' },
        { value: 'colares',     label: 'Colares' },
        { value: 'pulseiras',   label: 'Pulseiras' },
        { value: 'brincos',     label: 'Brincos' },
        { value: 'tenis',       label: 'Tênis' },
        { value: 'botas',       label: 'Botas' },
        { value: 'bolsas',      label: 'Bolsas' },
      ],
      roupas: [
        { value: 'camisetas',   label: 'Camisetas' },
        { value: 'moletons',    label: 'Moletons' },
        { value: 'saias',       label: 'Saias' },
        { value: 'calcas',      label: 'Calças' },
        { value: 'vestidos',    label: 'Vestidos' },
        { value: 'jaquetas',    label: 'Jaquetas' },
        { value: 'top-cropped', label: 'Top / Cropped' },
        { value: 'espartilho', label: 'Espartilho/Corset & Corselet' },        
      ],
      acessorios: [
        { value: 'colares',   label: 'Colares' },
        { value: 'pulseiras', label: 'Pulseiras' },
        { value: 'brincos',   label: 'Brincos' },
        { value: 'chapeus',   label: 'Chapéus & Bonés' },
        { value: 'cintos',    label: 'Cintos' },
        { value: 'oculos',    label: 'Óculos' },
      ],
      calcados: [
        { value: 'tenis',      label: 'Tênis' },
        { value: 'botas',      label: 'Botas' },
        { value: 'plataforma', label: 'Plataforma' },
        { value: 'sandalia',   label: 'Sandálias' },
      ],
      bolsas: [
        { value: 'baguete',  label: 'Baguete' },
        { value: 'mochila',  label: 'Mochila' },
        { value: 'tiracolo', label: 'Tiracolo' },
      ],
    };

    // Opções de "Tamanho" para cada categoria
    const TAMANHOS_POR_CATEGORIA = {
      todos:      ['PP', 'P', 'M', 'G', 'GG'],
      roupas:     ['PP', 'P', 'M', 'G', 'GG'],
      acessorios: ['Único', 'P', 'M', 'G',],
      calcados:   ['34', '35', '36', '37', '38', '39', '40'],
      bolsas:     ['Único'],
    };

    const grupoTipoEl     = document.getElementById('grupo-tipo');
    const grupoTamanhoEl  = document.getElementById('grupo-tamanho');

    function renderizarTipos(categoria) {
      const lista = TIPOS_POR_CATEGORIA[categoria] || TIPOS_POR_CATEGORIA.todos;

      // mantém o checkbox "Todos" e remove o resto
      grupoTipoEl.querySelectorAll('.check-item:not(:first-child)').forEach(el => el.remove());

      lista.forEach(opt => {
        const label = document.createElement('label');
        label.className = 'check-item';
        label.innerHTML = `<input type="checkbox" value="${opt.value}" /> <span>${opt.label}</span>`;
        grupoTipoEl.appendChild(label);
      });

      // reseta para "Todos" marcado
      grupoTipoEl.querySelector('input[value="todos"]').checked = true;

      // reanexa os eventos nos novos checkboxes
      initCheckGroup('grupo-tipo');
    }

    function renderizarTamanhos(categoria) {
      const lista = TAMANHOS_POR_CATEGORIA[categoria] || TAMANHOS_POR_CATEGORIA.todos;

      grupoTamanhoEl.innerHTML = '';
      lista.forEach(tam => {
        const btn = document.createElement('button');
        btn.className = 'tam-btn';
        btn.dataset.tam = tam;
        btn.textContent = tam;
        btn.addEventListener('click', () => {
          btn.classList.toggle('ativo');
          aplicarFiltros();
        });
        grupoTamanhoEl.appendChild(btn);
      });
    }

    function categoriaSelecionadaAtual() {
      const marcadas = [...document.querySelectorAll('#grupo-categoria input:checked')]
        .map(i => i.value)
        .filter(v => v !== 'todos');
      // se só uma categoria específica estiver marcada, usa ela; senão "todos"
      return marcadas.length === 1 ? marcadas[0] : 'todos';
    }

    function atualizarTipoETamanho() {
      const categoria = categoriaSelecionadaAtual();
      renderizarTipos(categoria);
      renderizarTamanhos(categoria);
      aplicarFiltros();
    }

    // inicializa com "todos" (todas as opções)
    renderizarTipos('todos');
    renderizarTamanhos('todos');

    // sempre que a categoria mudar, atualiza tipo e tamanho
    document.querySelectorAll('#grupo-categoria input').forEach(input => {
      input.addEventListener('change', atualizarTipoETamanho);
    });

    /* ══════════════════════════════════════
       CORES (multi-seleção)
    ══════════════════════════════════════ */
    document.querySelectorAll('.cor-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('ativo');
        aplicarFiltros();
      });
    });

    /* ══════════════════════════════════════
       FAIXA DE PREÇO (atualiza ao vivo)
    ══════════════════════════════════════ */
    const rangeInput = document.getElementById('preco-range');
    const rangeLabel = document.getElementById('preco-max-label');

    function atualizarRangeVisual() {
      const v = rangeInput.value;
      rangeLabel.textContent = v >= 500 ? 'R$500+' : `R$${v}`;
      const pct = (v / 500) * 100;
      rangeInput.style.background =
        `linear-gradient(to right, var(--pink) 0%, var(--pink) ${pct}%, rgba(155,109,197,.3) ${pct}%)`;
    }
    rangeInput?.addEventListener('input', () => {
      atualizarRangeVisual();
      aplicarFiltros();
    });
    if (rangeInput) atualizarRangeVisual();

    /* ══════════════════════════════════════
       COLAPSAR / EXPANDIR GRUPOS DE FILTRO
    ══════════════════════════════════════ */
    document.querySelectorAll('.filtro-grupo-titulo').forEach(titulo => {
      titulo.addEventListener('click', () => {
        const grupo = titulo.dataset.grupo;
        const conteudo = document.getElementById('grupo-' + grupo) || titulo.nextElementSibling;
        if (!conteudo) return;
        const fechado = conteudo.style.display === 'none';
        conteudo.style.display = fechado ? '' : 'none';
        const arrow = titulo.querySelector('.arrow');
        if (arrow) {
          arrow.textContent = fechado ? '˄' : '˅';
          arrow.classList.toggle('open', fechado);
        }
      });
    });

    /* ══════════════════════════════════════
       MAPA DE CORES → grupos de cor dos produtos
       (associe cada hex usado nos cor-dot a um grupo de cor)
    ══════════════════════════════════════ */
    const MAPA_CORES = {
      rosa:     ['#e066a0', '#c0392b', '#e8c4d4'],
      roxo:     ['#9b6dc5', '#4a3060', '#c9aee8'],
      preto:    ['#1a1a1a', '#1a1a2e'],
      branco:   ['#f0e6ff'],
      cinza:    ['#6b6b7a'],
      vermelho: ['#c0392b', '#8b1a1a'],
    };

    function corDoCardCorresponde(card, coresSel) {
      if (!coresSel.length) return true;
      const dots = [...card.querySelectorAll('.cor-dot')]
        .map(d => (d.style.background || '').toLowerCase());
      return coresSel.some(corNome => {
        const hexs = MAPA_CORES[corNome] || [];
        return hexs.some(hex => dots.includes(hex.toLowerCase()));
      });
    }

    /* ══════════════════════════════════════
       APLICAR TODOS OS FILTROS
    ══════════════════════════════════════ */
    function aplicarFiltros() {
      const estiloAtivo   = document.querySelector('.filtro-btn.ativo')?.dataset.estilo;
      const categoriasSel = [...document.querySelectorAll('#grupo-categoria input:checked')].map(i => i.value);
      const tiposSel      = [...document.querySelectorAll('#grupo-tipo input:checked')].map(i => i.value);
      const tamanhosSel   = [...document.querySelectorAll('.tam-btn.ativo')].map(b => b.dataset.tam);
      const coresSel      = [...document.querySelectorAll('.cor-btn.ativo')].map(b => b.dataset.cor);
      const precoMax      = parseFloat(rangeInput?.value || 500);

      let visiveis = 0;

      document.querySelectorAll('.produto-card').forEach(card => {
        let ok = true;

        if (estiloAtivo && card.dataset.estilo !== estiloAtivo) ok = false;

        if (!categoriasSel.includes('todos') && categoriasSel.length &&
            !categoriasSel.includes(card.dataset.categoria)) ok = false;

        if (!tiposSel.includes('todos') && tiposSel.length &&
            !tiposSel.includes(card.dataset.tipo)) ok = false;

        if (tamanhosSel.length) {
          const cardTams = (card.dataset.tamanho || '').split(' ');
          if (!tamanhosSel.some(t => cardTams.includes(t))) ok = false;
        }

        if (!corDoCardCorresponde(card, coresSel)) ok = false;

        const preco = parseFloat(card.dataset.preco || 0);
        if (precoMax < 500 && preco > precoMax) ok = false;

        card.style.display = ok ? '' : 'none';
        if (ok) visiveis++;
      });

      // atualiza contador
      const contador = document.querySelector('.produtos-count');
      if (contador) {
        contador.innerHTML = visiveis > 0
          ? `Mostrando <strong>${visiveis} produto${visiveis === 1 ? '' : 's'}</strong>`
          : `Nenhum produto encontrado`;
      }

      // mensagem de "nada encontrado"
      let msgVazia = document.getElementById('msg-vazia');
      if (visiveis === 0) {
        if (!msgVazia) {
          msgVazia = document.createElement('div');
          msgVazia.id = 'msg-vazia';
          msgVazia.style.cssText =
            'grid-column:1/-1;text-align:center;padding:60px 20px;color:#c9aee8;font-size:13px;';
          msgVazia.innerHTML =
            'Nenhum produto encontrado com esses filtros.<br>Tente ajustar ou limpar os filtros.';
          document.getElementById('produtos-grid').appendChild(msgVazia);
        }
      } else {
        msgVazia?.remove();
      }
    }

    /* ══════════════════════════════════════
       BOTÃO FILTRAR / LIMPAR
    ══════════════════════════════════════ */
    document.getElementById('btn-filtrar')?.addEventListener('click', aplicarFiltros);

    document.getElementById('limpar-filtros')?.addEventListener('click', () => {
      // checkboxes voltam pro "Todos"
      document.querySelectorAll('#grupo-categoria input').forEach(i => {
        i.checked = i.value === 'todos';
      });
      // recria tipo e tamanho para a categoria "todos"
      atualizarTipoETamanho();
      // cores desmarcadas
      document.querySelectorAll('.cor-btn').forEach(b => b.classList.remove('ativo'));
      // estilo desmarcado + banner escondido
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
      document.querySelector('.estilo-banner').style.display = 'none';
      document.getElementById('breadcrumb-atual').textContent = 'Catálogo de Produtos';
      // preço no máximo
      if (rangeInput) { rangeInput.value = 500; atualizarRangeVisual(); }
      aplicarFiltros();
    });

   
    /* ══════════════════════════════════════
       ORDENAÇÃO
    ══════════════════════════════════════ */
    document.getElementById('ordenar-select')?.addEventListener('change', e => {
      const tipo = e.target.value;
      const grid = document.getElementById('produtos-grid');
      const cards = [...grid.querySelectorAll('.produto-card')];

      cards.sort((a, b) => {
        const precoA = parseFloat(a.dataset.preco || 0);
        const precoB = parseFloat(b.dataset.preco || 0);
        if (tipo === 'menor-preco') return precoA - precoB;
        if (tipo === 'maior-preco') return precoB - precoA;
        if (tipo === 'novidades')   return (b.querySelector('.tag-new') ? 1 : 0) - (a.querySelector('.tag-new') ? 1 : 0);
        return 0; // populares / desconto: mantém ordem original
      });

      cards.forEach(card => grid.appendChild(card));
      resetarPaginacao();
    });

    /* ══════════════════════════════════════
       FAVORITO ♡
    ══════════════════════════════════════ */
    document.querySelectorAll('.btn-fav').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const on = btn.dataset.fav === '1';
        btn.dataset.fav = on ? '0' : '1';
        btn.textContent = on ? '♡' : '♥';
        btn.style.color = on ? '' : 'var(--pink)';
      });
    });

    /* ══════════════════════════════════════
       CARD → PÁGINA DO PRODUTO
    ══════════════════════════════════════ */
    document.querySelectorAll('.produto-card').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', e => {
        if (e.target.closest('.btn-fav')) return;
        window.location.href = `produto.html?id=${card.dataset.id}`;
      });
    });

    /* ══════════════════════════════════════
       LÊ PARÂMETROS DA URL AO CARREGAR
       (ex: produtos.html?categoria=roupas ou ?estilo=y2k ou ?busca=saia)
    ══════════════════════════════════════ */
    window.addEventListener('DOMContentLoaded', () => {
      const params = new URLSearchParams(window.location.search);

      const estiloURL = params.get('estilo');
      if (estiloURL) {
        document.querySelector(`.filtro-btn[data-estilo="${estiloURL}"]`)?.click();
      } else {
        document.querySelector('.estilo-banner').style.display = 'none';
      }

      const categoriaURL = params.get('categoria');
      if (categoriaURL) {
        const checkbox = document.querySelector(`#grupo-categoria input[value="${categoriaURL}"]`);
        if (checkbox) {
          checkbox.checked = true;
          document.querySelector('#grupo-categoria input[value="todos"]').checked = false;
          atualizarTipoETamanho();
        }
      }

      const buscaURL = params.get('busca');
      if (buscaURL) {
        document.querySelectorAll('.produto-card').forEach(card => {
          const nome = card.querySelector('.produto-nome')?.textContent.toLowerCase() || '';
          if (!nome.includes(buscaURL.toLowerCase())) card.style.display = 'none';
        });
      }

      aplicarFiltros();
      if (!estiloURL && !categoriaURL && !buscaURL) resetarPaginacao();
    });
