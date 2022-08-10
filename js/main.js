window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function calcular() {
    let dado1 = document.getElementById("width").value
    let dado2 = document.getElementById("height").value
    let result = dado1 * dado2
    document.getElementById("result").innerHTML = result
}


