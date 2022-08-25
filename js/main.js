window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function calcular() {
    let dado1 = document.getElementById("peso").value
    let dado2 = document.getElementById("altura").value
    let dado3 = document.getElementById("nome").value
    let result = dado1 / dado2
    document.getElementById("result").innerHTML = result
}


