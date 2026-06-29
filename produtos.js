/*=========================================
LUNÉA
PRODUTOS.JS
PARTE 1
=========================================*/

const estilos = {

y2k:{
titulo:"Y2K",
descricao:"Brilho, nostalgia e atitude dos anos 2000.",
banner:"img/banner-y2k.jpg"
},

grunge:{
titulo:"Grunge",
descricao:"Peças escuras, xadrez e muito estilo underground.",
banner:"img/banner-grunge.jpg"
},

scene:{
titulo:"Scene",
descricao:"Cores vibrantes e personalidade única.",
banner:"img/banner-scene.jpg"
},

emo:{
titulo:"Emo",
descricao:"Looks escuros com muita atitude.",
banner:"img/banner-emo.jpg"
},

gyaru:{
titulo:"Gyaru",
descricao:"Moda japonesa cheia de glamour.",
banner:"img/banner-gyaru.jpg"
},

jfashion:{
titulo:"J-Fashion",
descricao:"Os estilos mais famosos do Japão.",
banner:"img/banner-jfashion.jpg"
},

hippie:{
titulo:"Hippie Alternativo",
descricao:"Liberdade, natureza e autenticidade.",
banner:"img/banner-hippie.jpg"
}

};


/*=========================
BOTÕES DOS ESTILOS
==========================*/

const botoes=document.querySelectorAll(".estilo-btn");

const titulo=document.getElementById("titulo-estilo");

const descricao=document.getElementById("descricao-estilo");

const banner=document.querySelector(".banner-imagem img");


botoes.forEach(botao=>{

botao.addEventListener("click",()=>{

botoes.forEach(btn=>btn.classList.remove("ativo"));

botao.classList.add("ativo");

let estilo=botao.dataset.estilo;

titulo.innerHTML=estilos[estilo].titulo;

descricao.innerHTML=estilos[estilo].descricao;

banner.src=estilos[estilo].banner;

});

});


/*=========================
FAVORITOS
==========================*/

const favoritos=document.querySelectorAll(".btn-fav");

favoritos.forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.stopPropagation();

btn.classList.toggle("favoritado");

if(btn.classList.contains("favoritado")){

btn.innerHTML="♥";

}else{

btn.innerHTML="♡";

}

});

});


/*=========================
ORDENAÇÃO
==========================*/

const select=document.querySelector(".produtos-topo select");

select.addEventListener("change",()=>{

console.log("Ordenar por:",select.value);

});


/*=========================
FILTRO TAMANHO
==========================*/

const tamanhos=document.querySelectorAll(".tamanhos button");

tamanhos.forEach(botao=>{

botao.addEventListener("click",()=>{

botao.classList.toggle("ativo");

});

});


/*=========================
FILTRO COR
==========================*/

const cores=document.querySelectorAll(".cores span");

cores.forEach(cor=>{

cor.addEventListener("click",()=>{

cor.classList.toggle("ativa");

});

});
