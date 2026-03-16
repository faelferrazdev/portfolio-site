// Seleciona o formulário da página
const form = document.querySelector("form");

// Evento executado quando o formulário é enviado
form.addEventListener("submit", function(event){

event.preventDefault();

// Captura os valores digitados
const nome = form.querySelector("input[type='text']").value.trim();
const email = form.querySelector("input[type='email']").value.trim();
const mensagem = form.querySelector("textarea").value.trim();


// Função que mostra mensagens na tela
function mostrarAviso(texto, cor){

const aviso = document.createElement("div");

aviso.textContent = texto;

// Estilização da caixa de aviso
aviso.style.position = "fixed";
aviso.style.top = "50%";
aviso.style.left = "50%";
aviso.style.transform = "translate(-50%, -50%)";
aviso.style.padding = "18px 30px";
aviso.style.borderRadius = "10px";
aviso.style.color = "white";
aviso.style.background = cor;
aviso.style.fontWeight = "500";
aviso.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
aviso.style.zIndex = "9999";

document.body.appendChild(aviso);

// remove aviso depois de alguns segundos
setTimeout(() => aviso.remove(), 2500);

}

// Validação do nome
if(nome.length < 3){
mostrarAviso("O nome deve ter pelo menos 3 caracteres.","#e74c3c");
return;
}

// Validação do email
const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailValido.test(email)){
mostrarAviso("Insira um email válido.","#f39c12");
return;
}

// Validação da mensagem
if(mensagem.length < 10){
mostrarAviso("A mensagem deve ter pelo menos 10 caracteres.","#e74c3c");
return;
}

// Mensagem de sucesso
mostrarAviso("Mensagem enviada com sucesso!","#2ecc71");

form.reset();

});


// Função responsável por trocar o tema do site
function trocarTema(){

document.body.classList.toggle("dark");

// Salva a escolha do usuário no navegador
if(document.body.classList.contains("dark")){
localStorage.setItem("tema","dark");
}else{
localStorage.setItem("tema","light");
}

}

// Recupera o tema salvo quando o site abre
const temaSalvo = localStorage.getItem("tema");

if(temaSalvo === "dark"){
document.body.classList.add("dark");
}


// Controle da navegação entre as seções
const linksMenu = document.querySelectorAll("nav a");
const secoesSite = document.querySelectorAll("main section");

// Quando um link do menu é clicado
linksMenu.forEach(link => {

link.addEventListener("click", function(event){

event.preventDefault();

const idDestino = this.getAttribute("href");

// Esconde todas as seções
secoesSite.forEach(secao => {
secao.style.display = "none";
});

// Mostra apenas a selecionada
document.querySelector(idDestino).style.display = "block";

});

});

// Botão home mostra todas as seções novamente
const botaoHome = document.getElementById("home");

botaoHome.addEventListener("click", function(event){

event.preventDefault();

secoesSite.forEach(secao => {
secao.style.display = "block";
});

});