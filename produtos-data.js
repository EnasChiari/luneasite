/* ═══════════════════════════════════════════════
   LUNÉA — BASE DE DADOS DOS PRODUTOS
   Edite apenas este arquivo para gerenciar produtos.
   A página produto.html lê daqui automaticamente.
   ═══════════════════════════════════════════════ */

const PRODUTOS = [
  {
    id: 1,
    nome: "Baby Tee Butterfly",
    estilo: "Y2K",
    categoria: "roupas",
    tipo: "camisetas",
    preco: 89.90,
    precoOriginal: 119.90,  
    desconto: 25,            
    parcelas: 3,
    precoParcela: 29.97,
    avaliacao: 4.5,
    totalAvaliacoes: 128,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto",  hex: "#1a1a1a" },
      { nome: "Branco", hex: "#f0e6ff" },
      { nome: "Rosa",   hex: "#e066a0" },
    ],
    imagens: [
      "Baby Tee Butterfly.jpg",  
      "SUA_IMAGEM_P1_FOTO2.jpg",
      "SUA_IMAGEM_P1_FOTO3.jpg",
      "SUA_IMAGEM_P1_FOTO4.jpg",
    ],
    descricao: "A Baby Tee Butterfly é perfeita para criar looks icônicos Y2K com atitude e estilo. Confeccionada em algodão premium, conta com estampa exclusiva de borboleta em rosa metálico e caimento ajustado ao corpo.",
    detalhes: "Composição: 100% algodão. Modelagem slim fit. Estampa em serigrafia.",
    diferenciais: ["Algodão Premium","Estampa Exclusiva","Tecido Respirável","Não Desbota"],
    combineComIds: [2, 6, 5, 4],  
  },
  {
    id: 2,
    nome: "Saia Xadrez Chains",
    estilo: "Grunge",
    categoria: "roupas",
    tipo: "saias",
    preco: 119.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 4,
    precoParcela: 29.97,
    avaliacao: 4.0,
    totalAvaliacoes: 85,
    emEstoque: true,
    tamanhos: ["PP","P","M","G"],
    cores: [
      { nome: "Vermelho", hex: "#8b1a1a" },
      { nome: "Preto",    hex: "#1a1a1a" },
    ],
    imagens: [
      "Saia Xadrez Chains.webp",
      "SUA_IMAGEM_P2_FOTO2.jpg",
    ],
    descricao: "Saia xadrez com correntes metálicas, perfeita para o estilo Grunge. Cintura alta com zíper lateral e acabamento premium.",
    detalhes: "Composição: 95% poliéster, 5% elastano. Fecho: zíper lateral.",
    diferenciais: ["Correntes Metálicas","Cintura Alta","Tecido Premium"],
    combineComIds: [1, 6, 11, 4],
  },
  {
    id: 3,
    nome: "Moletom Oversized Moon",
    estilo: "Emo",
    categoria: "roupas",
    tipo: "moletons",
    preco: 159.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 5,
    precoParcela: 31.98,
    avaliacao: 5.0,
    totalAvaliacoes: 210,
    emEstoque: true,
    tamanhos: ["P","M","G","GG"],
    cores: [
      { nome: "Preto",  hex: "#1a1a1a" },
      { nome: "Roxo",   hex: "#4a3060" },
      { nome: "Lilás",  hex: "#c9aee8" },
    ],
    imagens: [
      "Moletom Oversized Moon.webp",
      "SUA_IMAGEM_P3_FOTO2.jpg",
    ],
    descricao: "Moletom oversized com estampa de lua e símbolos místicos. Tecido felpudo interno para máximo conforto.",
    detalhes: "Composição: 80% algodão, 20% poliéster. Modelagem oversized.",
    diferenciais: ["Tecido Felpudo","Oversized","Estampa Exclusiva"],
    combineComIds: [6, 2, 4, 5],
  },
  {
    id: 4,
    nome: "Colar Cadeado Heart",
    estilo: "Emo",
    categoria: "acessorios",
    tipo: "colares",
    preco: 49.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 24.95,
    avaliacao: 4.5,
    totalAvaliacoes: 340,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Prata", hex: "#9b9b9b" },
      { nome: "Preto", hex: "#1a1a1a" },
    ],
    imagens: [
      "Colar Cadeado Heart.jpg",
      "SUA_IMAGEM_P4_FOTO2.jpg",
    ],
    descricao: "Colar cadeado em formato de coração, banhado a prata. Perfeito para layering com outros colares.",
    detalhes: "Material: liga de zinco banhada a prata. Comprimento: 45cm + extensor de 5cm.",
    diferenciais: ["Banhado a Prata","Anti-alérgico","Ajustável"],
    combineComIds: [1, 2, 14, 11],
  },
  {
    id: 5,
    nome: "Bolsa Baguete Y2K",
    estilo: "Y2K",
    categoria: "bolsas",
    tipo: "bolsas",
    preco: 109.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 4,
    precoParcela: 27.47,
    avaliacao: 4.0,
    totalAvaliacoes: 95,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Rosa Claro", hex: "#e8c4d4" },
      { nome: "Preto",      hex: "#1a1a1a" },
      { nome: "Rosa",       hex: "#e066a0" },
    ],
    imagens: [
      "Bolsa Baguete Y2K.jpg",
      "SUA_IMAGEM_P5_FOTO2.jpg",
    ],
    descricao: "Bolsa baguete Y2K com detalhes metálicos e alça de corrente. Comporta essenciais do dia a dia com muito estilo.",
    detalhes: "Material: couro PU. Dimensões: 28x12x6cm. Fecho: magnético.",
    diferenciais: ["Alça de Corrente","Fecho Magnético","Couro PU Premium"],
    combineComIds: [1, 2, 4, 6],
  },
  {
    id: 6,
    nome: "Pulseira Spikes",
    estilo: "Grunge",
    categoria: "acessorios",
    tipo: "pulseiras",
    preco: 39.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 19.95,
    avaliacao: 4.5,
    totalAvaliacoes: 178,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Preto",  hex: "#1a1a1a" },
      { nome: "Camel",  hex: "#8b7355" },
    ],
    imagens: [
      "Pulseira Spikes.jpg",
      "SUA_IMAGEM_P6_FOTO2.jpg",
    ],
    descricao: "Pulseira com spikes metálicos no estilo punk/grunge. Fechamento com botão de pressão ajustável.",
    detalhes: "Material: couro PU com spikes de metal. Largura: 3cm. Fechamento: botão de pressão.",
    diferenciais: ["Spikes Metálicos","Ajustável","Estilo Punk"],
    combineComIds: [2, 1, 4, 14],
  },
  {
    id: 10,
    nome: "Shorts Denim Mini de Cintura Super Baixa Vintage Desgastado",
    estilo: "Y2K Grunge Punk",
    categoria: "roupas",
    tipo: "saias",
    preco: 149.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 5,
    precoParcela: 29.98,
    avaliacao: 4.8,
    totalAvaliacoes: 96,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "Grunge Punk Shorts Denim Mini de Cintura Super Baixa Vintage Desgastado Y2K Decorado com Tachas, Estilo Kpop para Mulheres.jpg",
      "SUA_IMAGEM_P6_FOTO2.jpg",
      "SUA_IMAGEM_P6_FOTO3.jpg",
      "SUA_IMAGEM_P6_FOTO4.jpg",
    ],
    descricao: "Shorts jeans de cintura super baixa com acabamento desgastado e detalhes em tachas, inspirado na estética Y2K, grunge e punk para criar looks marcantes.",
    detalhes: "Composição: jeans premium. Cintura super baixa. Aplicações metálicas. Modelagem mini.",
    diferenciais: ["Jeans Premium","Detalhes em Tachas","Visual Vintage","Modelagem Y2K"],
    combineComIds: [2,7,8]
  },
  
  {
    id: 9,
    nome: "Top Cropped Bustier com Ilhós e Amarração Preta",
    estilo: "Goth Y2K Punk",
    categoria: "roupas",
    tipo: "top-cropped",
    preco: 65.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 3,
    precoParcela: 21.97,
    avaliacao: 4.7,
    totalAvaliacoes: 154,
    emEstoque: true,
    tamanhos: ["PP","P","M","G"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "Top Cropped Bustier com Ilhós e Amarração Preta Gótica Hippie Country Estilo Y2k, Moda.jpg",
      "SUA_IMAGEM_P2_FOTO2.jpg",
      "SUA_IMAGEM_P2_FOTO3.jpg",
      "SUA_IMAGEM_P2_FOTO4.jpg",
    ],
    descricao: "Top cropped bustier com ilhós metálicos e amarração frontal, perfeito para composições góticas, punk e Y2K.",
    detalhes: "Tecido encorpado. Alças reguláveis. Ilhós metálicos. Ajuste por amarração.",
    diferenciais: ["Ajuste Regulável","Ilhós Metálicos","Modelagem Justa","Estilo Alternativo"],
    combineComIds: [6,7,8]
  },
  
  {
    id: 7,
    nome: "Botas de Tornozelo de Bico Fino com Plataforma",
    estilo: "Goth Punk Y2K Grunge",
    categoria: "calcados",
    tipo: "botas",
    preco: 235.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 8,
    precoParcela: 29.49,
    avaliacao: 4.9,
    totalAvaliacoes: 82,
    emEstoque: true,
    tamanhos: ["P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "GD2XGC~F.JPG",
      "SUA_IMAGEM_P7_FOTO2.jpg",
      "SUA_IMAGEM_P7_FOTO3.jpg",
      "SUA_IMAGEM_P7_FOTO4.jpg",
    ],
    descricao: "Bota de tornozelo com plataforma robusta, fivelas decorativas e visual inspirado no rock, punk e moda Y2K.",
    detalhes: "Material sintético premium. Solado tratorado. Fechamento por zíper. Fivelas metálicas.",
    diferenciais: ["Plataforma Alta","Solado Tratorado","Fivelas Decorativas","Visual Gótico"],
    combineComIds: [2,6,8]
  },
  
  {
    id: 8,
    nome: "Óculos Oversized Fashion",
    estilo: "Y2K",
    categoria: "acessorios",
    tipo: "oculos",
    preco: 19.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 9.95,
    avaliacao: 4.6,
    totalAvaliacoes: 211,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Rosa", hex: "#e8c4d4" }
    ],
    imagens: [
      "1 Par de Óculos de Moda Femininos Oversized.jpg",
      "SUA_IMAGEM_P8_FOTO2.jpg",
      "SUA_IMAGEM_P8_FOTO3.jpg",
      "SUA_IMAGEM_P8_FOTO4.jpg",
    ],
    descricao: "Óculos oversized com design retrô inspirado na moda Y2K, ideal para completar looks fashion e alternativos.",
    detalhes: "Armação em policarbonato. Lentes escuras. Modelo unissex.",
    diferenciais: ["Leve","Design Oversized","Proteção UV","Visual Y2K"],
    combineComIds: [2,6,7]
  },
  {
    id: 11,
    nome: "Colar Gótico Y2K Coração Estrela",
    estilo: "Y2K",
    categoria: "acessorios",
    tipo: "colares",
    preco: 24.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 12.45,
    avaliacao: 4.8,
    totalAvaliacoes: 213,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Lilás", hex: "#c9aee8" }
    ],
    imagens: ["1 Peça Colar Gótico Punk Y2K Coração Metálico Estrela, Estilo Escuro Geométrico Banhado a Liga de Zinco, Joia para Mulheres1.jpg","1 Peça Colar Gótico Punk Y2K Coração Metálico Estrela, Estilo Escuro Geométrico Banhado a Liga de Zinco, Joia para Mulheres2.jpg","1 Peça Colar Gótico Punk Y2K Coração Metálico Estrela, Estilo Escuro Geométrico Banhado a Liga de Zinco, Joia para Mulheres3.jpg","1 Peça Colar Gótico Punk Y2K Coração Metálico Estrela, Estilo Escuro Geométrico Banhado a Liga de Zinco, Joia para Mulheres4.jpg"],
    descricao: "Colar com pingentes de coração e estrela inspirado na moda gótica e Y2K.",
    detalhes: "Liga metálica. Fecho regulável.",
    diferenciais: ["Corrente Regulável","Acabamento Metálico","Estilo Y2K","Leve"],
    combineComIds: [15,13,12]
  },
  
  {
    id: 12,
    nome: "Mary Jane Plataforma Punk Y2K",
    estilo: "Y2K",
    categoria: "calcados",
    tipo: "plataforma",
    preco: 139.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 5,
    precoParcela: 27.98,
    avaliacao: 4.9,
    totalAvaliacoes: 186,
    emEstoque: true,
    tamanhos: ["34","35","36","37","38","39","40"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: ["ROMWE Grunge Punk Sapatos Femininos Sexy de Sola Grossa e Salto Grosso, Moda de Primavera e Outono com Fivela Sólida1.jpg","ROMWE Grunge Punk Sapatos Femininos Sexy de Sola Grossa e Salto Grosso, Moda de Primavera e Outono com Fivela Sólida2.jpg.jpg","ROMWE Grunge Punk Sapatos Femininos Sexy de Sola Grossa e Salto Grosso, Moda de Primavera e Outono com Fivela Sólida3.jpg","ROMWE Grunge Punk Sapatos Femininos Sexy de Sola Grossa e Salto Grosso, Moda de Primavera e Outono com Fivela Sólida4.jpg"],
    descricao: "Sapato Mary Jane com plataforma robusta para compor looks Y2K e punk.",
    detalhes: "Material sintético. Solado plataforma. Fecho por fivela.",
    diferenciais: ["Plataforma Alta","Fivela Ajustável","Confortável","Visual Alternativo"],
    combineComIds: [15,13,11]
  },
  
  {
    id: 13,
    nome: "Bolsa Moto Y2K Rebites",
    estilo: "Y2K",
    categoria: "bolsas",
    tipo: "bolsas",
    preco: 99.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 4,
    precoParcela: 24.98,
    avaliacao: 4.8,
    totalAvaliacoes: 142,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: ["SUA_IMAGEM_PRODUTO_13.jpg","SUA_IMAGEM_P13_FOTO2.jpg","SUA_IMAGEM_P13_FOTO3.jpg","SUA_IMAGEM_P13_FOTO4.jpg"],
    descricao: "Bolsa estilo moto com rebites metálicos inspirada na estética Y2K.",
    detalhes: "Couro sintético. Alça de ombro. Fechamento por zíper.",
    diferenciais: ["Rebites Metálicos","Grande Capacidade","Visual Vintage","Material Resistente"],
    combineComIds: [12,15,11]
  },
  
  {
    id: 14,
    nome: "Colar Cruz em Camadas Gótico",
    estilo: "Grunge",
    categoria: "acessorios",
    tipo: "colares",
    preco: 28.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 14.45,
    avaliacao: 4.7,
    totalAvaliacoes: 165,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Lilás", hex: "#c9aee8" }
    ],
    imagens: ["SUA_IMAGEM_PRODUTO_14.jpg","SUA_IMAGEM_P14_FOTO2.jpg","SUA_IMAGEM_P14_FOTO3.jpg","SUA_IMAGEM_P14_FOTO4.jpg"],
    descricao: "Colar em camadas com cruz, perfeito para looks grunge e góticos.",
    detalhes: "Liga metálica. Correntes em camadas.",
    diferenciais: ["Camadas Duplas","Pingente Cruz","Regulável","Acabamento Premium"],
    combineComIds: [19,20,18]
  },
  
  {
    id: 15,
    nome: "Top Cropped Y2K Bolinhas P&B",
    estilo: "Y2K",
    categoria: "roupas",
    tipo: "top-cropped",
    preco: 39.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 19.95,
    avaliacao: 4.8,
    totalAvaliacoes: 274,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Branco", hex: "#f0e6ff" }
    ],
    imagens: ["SUA_IMAGEM_PRODUTO_15.jpg","SUA_IMAGEM_P15_FOTO2.jpg","SUA_IMAGEM_P15_FOTO3.jpg","SUA_IMAGEM_P15_FOTO4.jpg"],
    descricao: "Top cropped estampado de bolinhas inspirado na moda Y2K.",
    detalhes: "Tecido leve. Modelagem justa.",
    diferenciais: ["Estampa Clássica","Confortável","Leve","Fácil de Combinar"],
    combineComIds: [12,13,11]
  },
  
  {
    id: 16,
    nome: "Shorts Jeans Grunge Cruz",
    estilo: "Grunge",
    categoria: "roupas",
    tipo: "calcas",
    preco: 64.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 3,
    precoParcela: 21.63,
    avaliacao: 4.7,
    totalAvaliacoes: 148,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Azul Jeans", hex: "#3a5f8a" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: ["SUA_IMAGEM_PRODUTO_16.jpg","SUA_IMAGEM_P16_FOTO2.jpg","SUA_IMAGEM_P16_FOTO3.jpg","SUA_IMAGEM_P16_FOTO4.jpg"],
    descricao: "Shorts jeans grunge com detalhe de cruz para looks alternativos.",
    detalhes: "Jeans premium. Lavagem vintage.",
    diferenciais: ["Lavagem Vintage","Jeans Resistente","Visual Grunge","Confortável"],
    combineComIds: [18,14,19]
  },
  
  {
    id: 17,
    nome: "Boné Bordado Estrela Vintage",
    estilo: "Y2K",
    categoria: "acessorios",
    tipo: "chapeus",
    preco: 32.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 16.45,
    avaliacao: 4.6,
    totalAvaliacoes: 119,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: ["SUA_IMAGEM_PRODUTO_17.jpg","SUA_IMAGEM_P17_FOTO2.jpg","SUA_IMAGEM_P17_FOTO3.jpg","SUA_IMAGEM_P17_FOTO4.jpg"],
    descricao: "Boné vintage com bordado de estrela inspirado na moda Y2K.",
    detalhes: "Aba curva. Ajuste traseiro.",
    diferenciais: ["Bordado Premium","Ajustável","Leve","Estilo Vintage"],
    combineComIds: [16,13,15]
  },
  
  {
    id: 18,
    nome: "Cinto Punk Caveira Y2K",
    estilo: "Grunge",
    categoria: "acessorios",
    tipo: "cintos",
    preco: 29.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 14.95,
    avaliacao: 4.8,
    totalAvaliacoes: 201,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: ["SUA_IMAGEM_PRODUTO_18.jpg","SUA_IMAGEM_P18_FOTO2.jpg","SUA_IMAGEM_P18_FOTO3.jpg","SUA_IMAGEM_P18_FOTO4.jpg"],
    descricao: "Cinto em couro PU com detalhes de caveira para looks punk e grunge.",
    detalhes: "Couro PU. Fivela metálica.",
    diferenciais: ["Couro PU","Fivela Resistente","Visual Punk","Ajustável"],
    combineComIds: [16,19,14]
  },
  
  {
    id: 19,
    nome: "Calça Flare Gótica Y2K Renda",
    estilo: "Grunge",
    categoria: "roupas",
    tipo: "calcas",
    preco: 84.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 4,
    precoParcela: 21.23,
    avaliacao: 4.9,
    totalAvaliacoes: 178,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: ["SUA_IMAGEM_PRODUTO_19.jpg","SUA_IMAGEM_P19_FOTO2.jpg","SUA_IMAGEM_P19_FOTO3.jpg","SUA_IMAGEM_P19_FOTO4.jpg"],
    descricao: "Calça flare gótica com detalhes em renda inspirada na moda Y2K.",
    detalhes: "Tecido elástico. Barra flare.",
    diferenciais: ["Detalhes em Renda","Modelagem Flare","Confortável","Visual Gótico"],
    combineComIds: [14,18,12]
  },
  
  {
    id: 20,
    nome: "Calça Godê Renda Retrô Goth",
    estilo: "Emo",
    categoria: "roupas",
    tipo: "calcas",
    preco: 79.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 4,
    precoParcela: 19.98,
    avaliacao: 4.7,
    totalAvaliacoes: 134,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Roxo Escuro", hex: "#4a3060" }
    ],
    imagens: ["SUA_IMAGEM_PRODUTO_20.jpg","SUA_IMAGEM_P20_FOTO2.jpg","SUA_IMAGEM_P20_FOTO3.jpg","SUA_IMAGEM_P20_FOTO4.jpg"],
    descricao: "Calça godê retrô com renda inspirada na estética goth e emo.",
    detalhes: "Tecido confortável. Aplicações em renda.",
    diferenciais: ["Visual Retrô","Renda Premium","Modelagem Exclusiva","Confortável"],
    combineComIds: [14,18,19]
  },
  {
    id: 21,
    nome: "Camiseta Bodycon Manga Flare",
    estilo: "Y2K",
    categoria: "roupas",
    tipo: "camisetas",
    preco: 44.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 22.45,
    avaliacao: 4.8,
    totalAvaliacoes: 186,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Branco", hex: "#f0e6ff" },
      { nome: "Vermelho Escuro", hex: "#8b1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_21.jpg",
      "SUA_IMAGEM_P21_FOTO2.jpg",
      "SUA_IMAGEM_P21_FOTO3.jpg",
      "SUA_IMAGEM_P21_FOTO4.jpg"
    ],
    descricao: "Camiseta bodycon com decote V e mangas flare inspirada na estética Y2K.",
    detalhes: "Tecido com elastano. Modelagem justa. Manga flare.",
    diferenciais: ["Tecido Confortável","Modelagem Bodycon","Manga Flare","Estilo Y2K"],
    combineComIds: [28,35,13]
  },
  
  {
    id: 22,
    nome: "Vestido Lolita Babador Doce",
    estilo: "J-Fashion",
    categoria: "roupas",
    tipo: "vestidos",
    preco: 94.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 4,
    precoParcela: 23.73,
    avaliacao: 4.9,
    totalAvaliacoes: 142,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Rosa", hex: "#e8c4d4" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_22.jpg",
      "SUA_IMAGEM_P22_FOTO2.jpg",
      "SUA_IMAGEM_P22_FOTO3.jpg",
      "SUA_IMAGEM_P22_FOTO4.jpg"
    ],
    descricao: "Vestido estilo Lolita com babador e acabamento delicado.",
    detalhes: "Tecido leve. Saia rodada. Laços decorativos.",
    diferenciais: ["Estilo Lolita","Caimento Elegante","Detalhes Delicados","Confortável"],
    combineComIds: [24,38,27]
  },
  
  {
    id: 23,
    nome: "Vestido Lolita Urso Pelúcia",
    estilo: "J-Fashion",
    categoria: "roupas",
    tipo: "vestidos",
    preco: 109.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 5,
    precoParcela: 21.98,
    avaliacao: 4.9,
    totalAvaliacoes: 198,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Rosa", hex: "#e8c4d4" },
      { nome: "Branco", hex: "#f0e6ff" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_23.jpg",
      "SUA_IMAGEM_P23_FOTO2.jpg",
      "SUA_IMAGEM_P23_FOTO3.jpg",
      "SUA_IMAGEM_P23_FOTO4.jpg"
    ],
    descricao: "Vestido Lolita com estampa de urso de pelúcia inspirado na moda japonesa.",
    detalhes: "Modelagem rodada. Tecido macio. Estampa exclusiva.",
    diferenciais: ["Estampa Fofa","Tecido Macio","Visual Kawaii","Acabamento Premium"],
    combineComIds: [24,38,25]
  },
  
  {
    id: 24,
    nome: "Meias Laço Estilo Lolita",
    estilo: "J-Fashion",
    categoria: "acessorios",
    tipo: "acessorios",
    preco: 19.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 9.95,
    avaliacao: 4.8,
    totalAvaliacoes: 226,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Branco", hex: "#f0e6ff" },
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Rosa", hex: "#e8c4d4" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_24.jpg",
      "SUA_IMAGEM_P24_FOTO2.jpg",
      "SUA_IMAGEM_P24_FOTO3.jpg",
      "SUA_IMAGEM_P24_FOTO4.jpg"
    ],
    descricao: "Meias com laços decorativos perfeitas para looks Lolita e Kawaii.",
    detalhes: "Tecido elástico. Cano alto. Laços costurados.",
    diferenciais: ["Confortáveis","Laços Decorativos","Alta Elasticidade","Estilo Lolita"],
    combineComIds: [22,23,38]
  },
  
  {
    id: 25,
    nome: "Conjunto Kawaii Coelho Laço",
    estilo: "J-Fashion",
    categoria: "roupas",
    tipo: "top-cropped",
    preco: 74.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 3,
    precoParcela: 24.97,
    avaliacao: 4.8,
    totalAvaliacoes: 151,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Rosa", hex: "#e8c4d4" },
      { nome: "Branco", hex: "#f0e6ff" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_25.jpg",
      "SUA_IMAGEM_P25_FOTO2.jpg",
      "SUA_IMAGEM_P25_FOTO3.jpg",
      "SUA_IMAGEM_P25_FOTO4.jpg"
    ],
    descricao: "Conjunto 2 em 1 com estampa de coelho e laços inspirado na moda Kawaii.",
    detalhes: "Duas peças. Tecido confortável. Modelagem moderna.",
    diferenciais: ["2 em 1","Estampa Exclusiva","Visual Kawaii","Confortável"],
    combineComIds: [24,23,38]
  },
  
  {
    id: 26,
    nome: "Conjunto Goth Camisa Cruz",
    estilo: "Emo",
    categoria: "roupas",
    tipo: "top-cropped",
    preco: 84.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 4,
    precoParcela: 21.23,
    avaliacao: 4.8,
    totalAvaliacoes: 137,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_26.jpg",
      "SUA_IMAGEM_P26_FOTO2.jpg",
      "SUA_IMAGEM_P26_FOTO3.jpg",
      "SUA_IMAGEM_P26_FOTO4.jpg"
    ],
    descricao: "Conjunto goth de duas peças com detalhes de cruz e laço.",
    detalhes: "Tecido macio. Modelagem confortável. Estampa temática.",
    diferenciais: ["2 Peças","Visual Gótico","Tecido Premium","Detalhes em Cruz"],
    combineComIds: [19,20,14]
  },
  {
    id: 27,
    nome: "Blusa Lolita Babydoll Kawaii",
    estilo: "J-Fashion",
    categoria: "roupas",
    tipo: "top-cropped",
    preco: 59.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 3,
    precoParcela: 19.97,
    avaliacao: 4.8,
    totalAvaliacoes: 173,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Branco", hex: "#f0e6ff" },
      { nome: "Rosa", hex: "#e8c4d4" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_27.jpg",
      "SUA_IMAGEM_P27_FOTO2.jpg",
      "SUA_IMAGEM_P27_FOTO3.jpg",
      "SUA_IMAGEM_P27_FOTO4.jpg"
    ],
    descricao: "Blusa babydoll com mangas bufantes inspirada na moda Lolita e Kawaii.",
    detalhes: "Tecido leve. Mangas bufantes. Modelagem confortável.",
    diferenciais: ["Mangas Bufantes","Estilo Lolita","Tecido Leve","Acabamento Premium"],
    combineComIds: [22,24,38]
  },
  
  {
    id: 28,
    nome: "Jeans Flare Cintura Baixa Cruz",
    estilo: "Y2K",
    categoria: "roupas",
    tipo: "calcas",
    preco: 94.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 4,
    precoParcela: 23.73,
    avaliacao: 4.9,
    totalAvaliacoes: 214,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Azul Jeans", hex: "#3a5f8a" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_28.jpg",
      "SUA_IMAGEM_P28_FOTO2.jpg",
      "SUA_IMAGEM_P28_FOTO3.jpg",
      "SUA_IMAGEM_P28_FOTO4.jpg"
    ],
    descricao: "Calça jeans flare de cintura baixa com bordado de cruz inspirada na moda Y2K.",
    detalhes: "Jeans premium. Bordado frontal. Modelagem flare.",
    diferenciais: ["Cintura Baixa","Bordado Exclusivo","Jeans Premium","Estilo Y2K"],
    combineComIds: [21,13,12]
  },
  
  {
    id: 29,
    nome: "Shorts Denim Cintura Baixa Y2K",
    estilo: "Y2K",
    categoria: "roupas",
    tipo: "calcas",
    preco: 54.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 27.45,
    avaliacao: 4.7,
    totalAvaliacoes: 182,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Azul Jeans", hex: "#3a5f8a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_29.jpg",
      "SUA_IMAGEM_P29_FOTO2.jpg",
      "SUA_IMAGEM_P29_FOTO3.jpg",
      "SUA_IMAGEM_P29_FOTO4.jpg"
    ],
    descricao: "Shorts jeans de cintura baixa com detalhes de asas e caveira inspirado na estética Y2K.",
    detalhes: "Jeans resistente. Lavagem vintage.",
    diferenciais: ["Visual Y2K","Jeans Premium","Confortável","Lavagem Vintage"],
    combineComIds: [21,12,13]
  },
  
  {
    id: 30,
    nome: "Conjunto Moletom Veludo Strass",
    estilo: "Y2K",
    categoria: "roupas",
    tipo: "moletons",
    preco: 129.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 5,
    precoParcela: 25.98,
    avaliacao: 4.9,
    totalAvaliacoes: 158,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Roxo", hex: "#4a3060" },
      { nome: "Vermelho Escuro", hex: "#8b1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_30.jpg",
      "SUA_IMAGEM_P30_FOTO2.jpg",
      "SUA_IMAGEM_P30_FOTO3.jpg",
      "SUA_IMAGEM_P30_FOTO4.jpg"
    ],
    descricao: "Conjunto de moletom em veludo com aplicação de strass inspirado na moda Y2K.",
    detalhes: "Veludo macio. Calça flare. Jaqueta com zíper.",
    diferenciais: ["Veludo Premium","Aplicações em Strass","2 Peças","Muito Confortável"],
    combineComIds: [13,12,11]
  },
  
  {
    id: 31,
    nome: "Jeans Thorn Cross Vine Flare",
    estilo: "Grunge",
    categoria: "roupas",
    tipo: "calcas",
    preco: 89.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 4,
    precoParcela: 22.48,
    avaliacao: 4.8,
    totalAvaliacoes: 169,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Azul Jeans", hex: "#3a5f8a" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_31.jpg",
      "SUA_IMAGEM_P31_FOTO2.jpg",
      "SUA_IMAGEM_P31_FOTO3.jpg",
      "SUA_IMAGEM_P31_FOTO4.jpg"
    ],
    descricao: "Calça jeans flare com estampa Thorn Cross Vine para looks grunge.",
    detalhes: "Jeans premium. Modelagem flare. Estampa exclusiva.",
    diferenciais: ["Estampa Exclusiva","Jeans Premium","Visual Grunge","Modelagem Flare"],
    combineComIds: [32,14,18]
  },
  
  {
    id: 32,
    nome: "Camiseta Punk Coração Asa",
    estilo: "Grunge",
    categoria: "roupas",
    tipo: "camisetas",
    preco: 42.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 21.45,
    avaliacao: 4.8,
    totalAvaliacoes: 196,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Vermelho Escuro", hex: "#8b1a1a" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_32.jpg",
      "SUA_IMAGEM_P32_FOTO2.jpg",
      "SUA_IMAGEM_P32_FOTO3.jpg",
      "SUA_IMAGEM_P32_FOTO4.jpg"
    ],
    descricao: "Camiseta grunge com estampa de coração alado em vermelho escuro.",
    detalhes: "100% algodão. Estampa em serigrafia.",
    diferenciais: ["Algodão Premium","Estampa Exclusiva","Tecido Respirável","Não Desbota"],
    combineComIds: [31,18,14]
  },
  {
    id: 33,
    nome: "Jaqueta Y2K Punk Pele Strass",
    estilo: "Y2K",
    categoria: "roupas",
    tipo: "jaquetas",
    preco: 149.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 5,
    precoParcela: 29.98,
    avaliacao: 4.9,
    totalAvaliacoes: 147,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_33.jpg",
      "SUA_IMAGEM_P33_FOTO2.jpg",
      "SUA_IMAGEM_P33_FOTO3.jpg",
      "SUA_IMAGEM_P33_FOTO4.jpg"
    ],
    descricao: "Jaqueta estilo Y2K com acabamento em pele sintética e aplicações de strass.",
    detalhes: "Pele sintética premium. Fechamento por zíper. Forro interno.",
    diferenciais: ["Pele Sintética","Aplicações em Strass","Muito Quente","Visual Y2K"],
    combineComIds: [28,35,13]
  },
  
  {
    id: 34,
    nome: "Jeans Perna Larga Letras",
    estilo: "Grunge",
    categoria: "roupas",
    tipo: "calcas",
    preco: 79.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 4,
    precoParcela: 19.98,
    avaliacao: 4.8,
    totalAvaliacoes: 183,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Azul Jeans", hex: "#3a5f8a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_34.jpg",
      "SUA_IMAGEM_P34_FOTO2.jpg",
      "SUA_IMAGEM_P34_FOTO3.jpg",
      "SUA_IMAGEM_P34_FOTO4.jpg"
    ],
    descricao: "Calça jeans de perna larga com efeito desgastado e detalhes em letras.",
    detalhes: "Jeans resistente. Modelagem wide leg.",
    diferenciais: ["Wide Leg","Lavagem Vintage","Confortável","Visual Grunge"],
    combineComIds: [32,18,14]
  },
  
  {
    id: 35,
    nome: "Jeans Flare Streetwear Y2K",
    estilo: "Y2K",
    categoria: "roupas",
    tipo: "calcas",
    preco: 69.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 3,
    precoParcela: 23.30,
    avaliacao: 4.7,
    totalAvaliacoes: 164,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Azul Jeans", hex: "#3a5f8a" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_35.jpg",
      "SUA_IMAGEM_P35_FOTO2.jpg",
      "SUA_IMAGEM_P35_FOTO3.jpg",
      "SUA_IMAGEM_P35_FOTO4.jpg"
    ],
    descricao: "Calça jeans flare de cintura baixa inspirada no streetwear Y2K.",
    detalhes: "Jeans premium. Modelagem flare. Cintura baixa.",
    diferenciais: ["Cintura Baixa","Jeans Premium","Estilo Streetwear","Confortável"],
    combineComIds: [21,33,13]
  },
  
  {
    id: 36,
    nome: "Shorts Babados Kawaii Lolita",
    estilo: "J-Fashion",
    categoria: "roupas",
    tipo: "calcas",
    preco: 44.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 22.45,
    avaliacao: 4.8,
    totalAvaliacoes: 176,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Rosa", hex: "#e8c4d4" },
      { nome: "Branco", hex: "#f0e6ff" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_36.jpg",
      "SUA_IMAGEM_P36_FOTO2.jpg",
      "SUA_IMAGEM_P36_FOTO3.jpg",
      "SUA_IMAGEM_P36_FOTO4.jpg"
    ],
    descricao: "Shorts com babados inspirado na moda Lolita e Kawaii.",
    detalhes: "Tecido leve. Babados delicados. Cintura elástica.",
    diferenciais: ["Babados","Muito Confortável","Estilo Kawaii","Tecido Macio"],
    combineComIds: [27,24,38]
  },
  
  {
    id: 37,
    nome: "Vestido Gótico Lolita Corset",
    estilo: "Emo",
    categoria: "roupas",
    tipo: "vestidos",
    preco: 119.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 5,
    precoParcela: 23.98,
    avaliacao: 4.9,
    totalAvaliacoes: 138,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Roxo", hex: "#4a3060" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_37.jpg",
      "SUA_IMAGEM_P37_FOTO2.jpg",
      "SUA_IMAGEM_P37_FOTO3.jpg",
      "SUA_IMAGEM_P37_FOTO4.jpg"
    ],
    descricao: "Vestido gótico estilo Lolita com corset e design elegante.",
    detalhes: "Corset ajustável. Saia rodada. Tecido premium.",
    diferenciais: ["Corset Ajustável","Visual Gótico","Modelagem Elegante","Acabamento Premium"],
    combineComIds: [38,24,14]
  },
  
  {
    id: 38,
    nome: "Sapato Lolita Salto Laço",
    estilo: "J-Fashion",
    categoria: "calcados",
    tipo: "plataforma",
    preco: 124.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 5,
    precoParcela: 24.98,
    avaliacao: 4.9,
    totalAvaliacoes: 205,
    emEstoque: true,
    tamanhos: ["34","35","36","37","38","39","40"],
    cores: [
      { nome: "Branco", hex: "#f0e6ff" },
      { nome: "Rosa", hex: "#e8c4d4" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_38.jpg",
      "SUA_IMAGEM_P38_FOTO2.jpg",
      "SUA_IMAGEM_P38_FOTO3.jpg",
      "SUA_IMAGEM_P38_FOTO4.jpg"
    ],
    descricao: "Sapato Lolita de salto alto com laço e detalhes delicados.",
    detalhes: "Material sintético premium. Fechamento por fivela.",
    diferenciais: ["Laço Decorativo","Salto Confortável","Estilo Lolita","Acabamento Premium"],
    combineComIds: [22,23,24]
  },
  
  {
    id: 39,
    nome: "Vestido Lolita Urso Feliz Y2K",
    estilo: "J-Fashion",
    categoria: "roupas",
    tipo: "vestidos",
    preco: 89.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 4,
    precoParcela: 22.48,
    avaliacao: 4.8,
    totalAvaliacoes: 171,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Rosa", hex: "#e8c4d4" },
      { nome: "Branco", hex: "#f0e6ff" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_39.jpg",
      "SUA_IMAGEM_P39_FOTO2.jpg",
      "SUA_IMAGEM_P39_FOTO3.jpg",
      "SUA_IMAGEM_P39_FOTO4.jpg"
    ],
    descricao: "Vestido Lolita com estampa de ursinho e inspiração Y2K/Kawaii.",
    detalhes: "Tecido leve. Modelagem rodada. Estampa exclusiva.",
    diferenciais: ["Estampa Fofa","Visual Kawaii","Confortável","Acabamento Premium"],
    combineComIds: [24,38,27]
  },
  {
    id: 40,
    nome: "Vestido Jsk Coelho Morango",
    estilo: "J-Fashion",
    categoria: "roupas",
    tipo: "vestidos",
    preco: 134.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 5,
    precoParcela: 26.98,
    avaliacao: 4.9,
    totalAvaliacoes: 168,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Vermelho", hex: "#8b1a1a" },
      { nome: "Rosa", hex: "#e8c4d4" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_40.jpg",
      "SUA_IMAGEM_P40_FOTO2.jpg",
      "SUA_IMAGEM_P40_FOTO3.jpg",
      "SUA_IMAGEM_P40_FOTO4.jpg"
    ],
    descricao: "Vestido JSK Lolita com estampa de coelho e morangos, inspirado na moda japonesa.",
    detalhes: "Tecido premium. Modelagem rodada. Alças ajustáveis.",
    diferenciais: ["Estampa Exclusiva","Modelagem Lolita","Tecido Confortável","Acabamento Premium"],
    combineComIds: [24,38,39]
  },
  
  {
    id: 41,
    nome: "Camiseta Vintage Punk Y2K Roxa",
    estilo: "Y2K",
    categoria: "roupas",
    tipo: "camisetas",
    preco: 37.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 18.95,
    avaliacao: 4.7,
    totalAvaliacoes: 184,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Roxo", hex: "#4a3060" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_41.jpg",
      "SUA_IMAGEM_P41_FOTO2.jpg",
      "SUA_IMAGEM_P41_FOTO3.jpg",
      "SUA_IMAGEM_P41_FOTO4.jpg"
    ],
    descricao: "Camiseta vintage roxa inspirada na estética punk e Y2K.",
    detalhes: "100% algodão. Estampa resistente.",
    diferenciais: ["Algodão Premium","Visual Vintage","Tecido Respirável","Não Desbota"],
    combineComIds: [35,45,50]
  },
  
  {
    id: 42,
    nome: "Camiseta Grunge Goth Crop",
    estilo: "Grunge",
    categoria: "roupas",
    tipo: "top-cropped",
    preco: 34.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 17.45,
    avaliacao: 4.8,
    totalAvaliacoes: 196,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Roxo", hex: "#4a3060" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_42.jpg",
      "SUA_IMAGEM_P42_FOTO2.jpg",
      "SUA_IMAGEM_P42_FOTO3.jpg",
      "SUA_IMAGEM_P42_FOTO4.jpg"
    ],
    descricao: "Top cropped com inspiração grunge, goth e emo.",
    detalhes: "Malha macia. Modelagem cropped.",
    diferenciais: ["Visual Grunge","Modelagem Cropped","Tecido Confortável","Leve"],
    combineComIds: [31,49,45]
  },
  
  {
    id: 43,
    nome: "Moletom Punk Gótico Listrado",
    estilo: "Emo",
    categoria: "roupas",
    tipo: "moletons",
    preco: 72.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 3,
    precoParcela: 24.30,
    avaliacao: 4.8,
    totalAvaliacoes: 158,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Cinza", hex: "#6b6b7a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_43.jpg",
      "SUA_IMAGEM_P43_FOTO2.jpg",
      "SUA_IMAGEM_P43_FOTO3.jpg",
      "SUA_IMAGEM_P43_FOTO4.jpg"
    ],
    descricao: "Moletom unissex com listras inspirado na moda punk e gótica.",
    detalhes: "Moletom felpado. Capuz ajustável.",
    diferenciais: ["Muito Quente","Unissex","Tecido Macio","Visual Alternativo"],
    combineComIds: [49,45,31]
  },
  
  {
    id: 44,
    nome: "Top Y2K Suspensório Cropped",
    estilo: "Y2K",
    categoria: "roupas",
    tipo: "top-cropped",
    preco: 32.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 16.45,
    avaliacao: 4.7,
    totalAvaliacoes: 212,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Rosa", hex: "#e8c4d4" },
      { nome: "Branco", hex: "#f0e6ff" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_44.jpg",
      "SUA_IMAGEM_P44_FOTO2.jpg",
      "SUA_IMAGEM_P44_FOTO3.jpg",
      "SUA_IMAGEM_P44_FOTO4.jpg"
    ],
    descricao: "Top cropped com suspensórios inspirado no estilo Harajuku e Y2K.",
    detalhes: "Malha elástica. Alças ajustáveis.",
    diferenciais: ["Visual Harajuku","Confortável","Modelagem Cropped","Leve"],
    combineComIds: [35,45,50]
  },
  
  {
    id: 45,
    nome: "Cinto Rebite Punk Hip-Hop Y2K",
    estilo: "Y2K",
    categoria: "acessorios",
    tipo: "cintos",
    preco: 22.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 11.45,
    avaliacao: 4.8,
    totalAvaliacoes: 247,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Marrom", hex: "#8b7355" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_45.jpg",
      "SUA_IMAGEM_P45_FOTO2.jpg",
      "SUA_IMAGEM_P45_FOTO3.jpg",
      "SUA_IMAGEM_P45_FOTO4.jpg"
    ],
    descricao: "Cinto com rebites metálicos inspirado na moda punk, hip-hop e Y2K.",
    detalhes: "Couro sintético. Fivela metálica ajustável.",
    diferenciais: ["Rebites Metálicos","Material Resistente","Ajustável","Visual Punk"],
    combineComIds: [41,44,35]
  },
  {
    id: 46,
    nome: "Pulseira Punk Rebites Colorida",
    estilo: "Grunge",
    categoria: "acessorios",
    tipo: "pulseiras",
    preco: 18.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 9.45,
    avaliacao: 4.6,
    totalAvaliacoes: 104,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Rosa", hex: "#e066a0" },
      { nome: "Roxo", hex: "#9b6dc5" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_46.jpg",
      "SUA_IMAGEM_PRODUTO_46_2.jpg",
      "SUA_IMAGEM_PRODUTO_46_3.jpg",
      "SUA_IMAGEM_PRODUTO_46_4.jpg"
    ],
    descricao: "Pulseira punk com rebites coloridos, perfeita para compor looks grunge e alternativos.",
    detalhes: "Material sintético com aplicação de rebites metálicos.",
    diferenciais: ["Rebites Coloridos", "Ajustável", "Visual Punk", "Leve"],
    combineComIds: [18, 31, 42, 49],
  },
  
  {
    id: 47,
    nome: "Regata Listrada Punk Kawaii",
    estilo: "Scene",
    categoria: "roupas",
    tipo: "top-cropped",
    preco: 36.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 18.45,
    avaliacao: 4.7,
    totalAvaliacoes: 176,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Rosa", hex: "#e066a0" },
      { nome: "Branco", hex: "#f0e6ff" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_47.jpg",
      "SUA_IMAGEM_PRODUTO_47_2.jpg",
      "SUA_IMAGEM_PRODUTO_47_3.jpg",
      "SUA_IMAGEM_PRODUTO_47_4.jpg"
    ],
    descricao: "Regata listrada inspirada na estética Scene, combinando visual kawaii com atitude punk.",
    detalhes: "Modelagem cropped. Tecido confortável e elástico.",
    diferenciais: ["Estilo Scene", "Listras Contrastantes", "Leve", "Confortável"],
    combineComIds: [45, 46, 48, 33],
  },
  
  {
    id: 48,
    nome: "Regata Y2K Renda Sweet Spicy",
    estilo: "Y2K",
    categoria: "roupas",
    tipo: "top-cropped",
    preco: 38.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 19.45,
    avaliacao: 4.8,
    totalAvaliacoes: 201,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Branco", hex: "#f0e6ff" },
      { nome: "Rosa", hex: "#e8c4d4" },
      { nome: "Preto", hex: "#1a1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_48.jpg",
      "SUA_IMAGEM_PRODUTO_48_2.jpg",
      "SUA_IMAGEM_PRODUTO_48_3.jpg",
      "SUA_IMAGEM_PRODUTO_48_4.jpg"
    ],
    descricao: "Regata Y2K com detalhes em renda no estilo Sweet Spicy.",
    detalhes: "Tecido macio com acabamento em renda delicada.",
    diferenciais: ["Renda Delicada", "Sweet Spicy", "Leve", "Caimento Ajustado"],
    combineComIds: [28, 13, 8, 50],
  },
  
  {
    id: 49,
    nome: "Cinto Cravejado Street Blogger",
    estilo: "Grunge",
    categoria: "acessorios",
    tipo: "cintos",
    preco: 26.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 13.45,
    avaliacao: 4.7,
    totalAvaliacoes: 149,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Marrom", hex: "#8b7355" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_49.jpg",
      "SUA_IMAGEM_PRODUTO_49_2.jpg",
      "SUA_IMAGEM_PRODUTO_49_3.jpg",
      "SUA_IMAGEM_PRODUTO_49_4.jpg"
    ],
    descricao: "Cinto cravejado inspirado no street style e na estética grunge.",
    detalhes: "Couro sintético com rebites metálicos.",
    diferenciais: ["Rebites Metálicos", "Ajustável", "Visual Urbano", "Resistente"],
    combineComIds: [31, 42, 43, 46],
  },
  
  {
    id: 50,
    nome: "Cinto Punk Street Rebites Y2K",
    estilo: "Y2K",
    categoria: "acessorios",
    tipo: "cintos",
    preco: 34.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 17.45,
    avaliacao: 4.8,
    totalAvaliacoes: 215,
    emEstoque: true,
    tamanhos: ["Único"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Marrom", hex: "#8b7355" }
    ],
    imagens: [
      "1 Peça Cinto de Cor Sólida Punk Street em Couro PU com Rebites Pesados, Gancho Curvo e Corrente de Strass, Estilo Y2K American Baddie Fashion Punk Retrô para Mulheres1.jpg",
      "1 Peça Cinto de Cor Sólida Punk Street em Couro PU com Rebites Pesados, Gancho Curvo e Corrente de Strass, Estilo Y2K American Baddie Fashion Punk Retrô para Mulheres2.jpg",
      "1 Peça Cinto de Cor Sólida Punk Street em Couro PU com Rebites Pesados, Gancho Curvo e Corrente de Strass, Estilo Y2K American Baddie Fashion Punk Retrô para Mulheres3.jpg",
      "1 Peça Cinto de Cor Sólida Punk Street em Couro PU com Rebites Pesados, Gancho Curvo e Corrente de Strass, Estilo Y2K American Baddie Fashion Punk Retrô para Mulheres4.jpg"
    ],
    descricao: "Cinto punk com rebites, ideal para completar looks Y2K e streetwear.",
    detalhes: "Couro PU com fivela metálica resistente.",
    diferenciais: ["Rebites Metálicos", "Estilo Y2K", "Ajustável", "Durável"],
    combineComIds: [33, 35, 45, 51],
  },
  
  {
    id: 51,
    nome: "Top Avant Gola Mandarim Tigre",
    estilo: "Y2K",
    categoria: "roupas",
    tipo: "top-cropped",
    preco: 49.90,
    precoOriginal: null,
    desconto: null,
    parcelas: 2,
    precoParcela: 24.95,
    avaliacao: 4.8,
    totalAvaliacoes: 188,
    emEstoque: true,
    tamanhos: ["PP","P","M","G","GG"],
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Vermelho", hex: "#8b1a1a" }
    ],
    imagens: [
      "SUA_IMAGEM_PRODUTO_10.jpg",
      "SUA_IMAGEM_PRODUTO_10_2.jpg",
      "SUA_IMAGEM_PRODUTO_10_3.jpg",
      "SUA_IMAGEM_PRODUTO_10_4.jpg"
    ],
    descricao: "Top cropped inspirado na moda oriental com estampa de tigre e estética Y2K.",
    detalhes: "Modelagem ajustada com gola mandarim e tecido confortável.",
    diferenciais: ["Estampa Exclusiva", "Gola Mandarim", "Visual Y2K", "Caimento Slim"],
    combineComIds: [35, 50, 13, 12],
  },
      
  
];
