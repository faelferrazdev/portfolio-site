function adicionar(valor){

document.getElementById("resultado").value += valor

}
function limpar(){

document.getElementById("resultado").value = ""

}
function calcular(){

let valor = document.getElementById("resultado").value

document.getElementById("resultado").value = eval(valor)

}
document.addEventListener("keydown", function(event){

let tecla = event.key;

if(!isNaN(tecla) || tecla === "+" || tecla === "-" || tecla === "*" || tecla === "/" || tecla === "."){
    adicionar(tecla);
}

if(tecla === "Enter"){
    calcular();
}

if(tecla === "Backspace"){
    apagar();
}

if(tecla === "Delete"){
    limpar();
}

});
function apagar(){
let resultado = document.getElementById("resultado").value;

document.getElementById("resultado").value = resultado.slice(0, -1);
}

