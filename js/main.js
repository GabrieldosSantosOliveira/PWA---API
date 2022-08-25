window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function calcular() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let nome = document.getElementById("nome")
    let result = peso / (altura * altura)
    let resultado = document.getElementById("nome")
    document.getElementById("result").innerHTML = result
    document.getElementById("resultado").innerHTML = resultado
}


