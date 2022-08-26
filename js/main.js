window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function calcular() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let nome = document.getElementById("nome").value
    let result = peso / (altura * altura)
    let resultado = document.getElementById("nome")
    document.getElementById("result").innerHTML = result

    result.textContent = Math.floor(result);
    if (result<18.5) {
        tabela.textContent = "Abaixo do peso";
       
    } else if (result>18.5 & result<24.9) {
        tabela.textContent = "Peso normal";

    } else if (result>25.0 & result<29.9) {
        tabela.textContent = "Excesso de peso";
    
    } else if (result>30.0 & result<34.9) {
        tabela.textContent = "Obsidade classe I";

    } else if (result>35.0 & result<39.9) {
        tabela.textContent = "Obsidade classe II";

    } else if (result>40) {
        tabela.textContent = "Obsidade classe III";
    }

}



