const form = document.querySelector("form");

form.addEventListener("submit", function(event){

event.preventDefault();

const nome = form.querySelector("input[type='text']").value.trim();
const email = form.querySelector("input[type='email']").value.trim();
const mensagem = form.querySelector("textarea").value.trim();

function mostrarAviso(texto, cor){

const aviso = document.createElement("div");

aviso.textContent = texto;

aviso.style.position = "fixed";
aviso.style.top = "50%";
aviso.style.left = "50%";
aviso.style.transform = "translate(-50%, -50%) scale(0.8)";
aviso.style.padding = "18px 30px";
aviso.style.borderRadius = "10px";
aviso.style.color = "white";
aviso.style.fontWeight = "500";
aviso.style.fontSize = "16px";
aviso.style.background = cor;
aviso.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
aviso.style.zIndex = "9999";
aviso.style.opacity = "0";
aviso.style.transition = "all 0.3s ease";
aviso.style.fontFamily = "Poppins, sans-serif";

document.body.appendChild(aviso);

// animação de entrada
setTimeout(() => {
aviso.style.opacity = "1";
aviso.style.transform = "translate(-50%, -50%) scale(1)";
}, 10);

// desaparece depois
setTimeout(() => {
aviso.style.opacity = "0";
aviso.style.transform = "translate(-50%, -50%) scale(0.8)";
setTimeout(() => aviso.remove(), 300);
}, 2500);

}

// campos vazios
if(!nome || !email || !mensagem){
mostrarAviso("Preencha todos os campos.", "#e74c3c");
return;
}

// validação email
const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailValido.test(email)){
mostrarAviso("E-mail inválido.", "#f39c12");
return;
}

// sucesso
mostrarAviso("Mensagem enviada com sucesso!", "#2ecc71");

form.reset();

});

function trocarTema(){
document.body.classList.toggle("dark");
}

const linksMenu = document.querySelectorAll("nav a");
const secoesSite = document.querySelectorAll("main section");

linksMenu.forEach(link => {

link.addEventListener("click", function(event){

event.preventDefault();

const idDestino = this.getAttribute("href");

secoesSite.forEach(secao => {
secao.style.display = "none";
});

document.querySelector(idDestino).style.display = "block";

});

});
const botaoHome = document.getElementById("home");

botaoHome.addEventListener("click", function(event){

event.preventDefault();

secoesSite.forEach(secao => {
secao.style.display = "block";
});

});
