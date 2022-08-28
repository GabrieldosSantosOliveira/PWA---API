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

    let result = peso / (altura * altura)
    document.getElementById("result").innerHTML = Math.floor(result);
    imprimir_nome.textContent = "Nome: " + nome;
    imprimir_idade.textContent = "Idade: " + idade + " anos";
    imprimir_sexo.textContent = "Sexo: " + sexo;
    imprimir_altura.textContent = "Altura: " + altura + " cm";
    imprimir_peso.textContent = "Peso: " + peso + " Kg";

    if(result < 18.5){
        document.getElementById("msg").innerHTML = "Abaixo do peso normal";
    }else if(result > 18.5 & result < 24.9){
        document.getElementById("msg").innerHTML = "Peso Normal";
    }else if(result > 25.0 & result < 29.9){
        document.getElementById("msg").innerHTML = "Excesso de Peso";
    }else if(result > 30.0 & result <= 34.9){
        document.getElementById("msg").innerHTML = "Obesidade classe 1";
    }else if(result >= 35.0 & result <= 39.9){
        document.getElementById("msg").innerHTML = "Obesidade classe 2";
    }else if(result >= 40.0){
        document.getElementById("msg").innerHTML = "Obesidade classe 3";
    }
}
function Limpar(){
    let peso = document.getElementById("peso").value = " ";
    let altura = document.getElementById("altura").value = " ";
    let nome = document.getElementById("nome").value = " ";
    let idade = document.getElementById("idade").value = " ";
    let sexo = document.getElementById("sexo").value = " ";
}
function PDF() {
    var pegar_dados = document.getElementById("final").innerHTML;

    var janela = window.open('', '', 'width=800, height=600');
    janela.document.write('<html><head>');
    janela.document.write('<title>PDF</title>');
    janela.document.write('<body>');
    janela.document.write(pegar_dados);
    janela.document.write('</body></html>');
    janela.document.close();
    janela.print();
}