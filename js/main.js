window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function calcular() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let sexo = document.getElementById("sexo").value;
    let sexo_femi = document.getElementById("sexo_femi").value;

    let result = peso / (altura * altura)
    document.getElementById("result").innerHTML = Math.floor(result);
    imprimir_nome.textContent = nome;
    imprimir_idade.textContent = idade;
    imprimir_sexo.textContent = sexo;
    imprimir_sexo_femi.textContent = sexo_femi;

    if(result > 18){
        document.getElementById("msg").innerHTML = "gordo";
    }
}



