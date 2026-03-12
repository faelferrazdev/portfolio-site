const form = document.querySelector("form");

form.addEventListener("submit", function(event){

event.preventDefault();

const nome = form.querySelector("input[type='text']").value;
const email = form.querySelector("input[type='email']").value;
const mensagem = form.querySelector("textarea").value;

if(nome === "" || email === "" || mensagem === ""){
alert("Preencha todos os campos!");
return;
}

const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

if(!emailValido.test(email)){
alert("Digite um email válido!");
return;
}

alert("Mensagem enviada com sucesso!");

form.reset();

});
function trocarTema(){
document.body.classList.toggle("dark");
}
