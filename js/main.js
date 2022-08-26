window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function calcular() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let nome = document.getElementById("nome").value = " ";

    let result = peso / (altura * altura)
    document.getElementById("result").innerHTML = Math.floor(result);

}



