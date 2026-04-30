// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Magreza - Grau 0";
    } else if (imc < 25) {
        return "Normal - Grau 0";
    } else if (imc < 30) {
        return "Sobrepeso - Grau I";
    } else if (imc < 40) {
        return "Obesidade - Grau II";
    } else {
        return "Obesidade Grave - Grau III";
    }
}

// Função principal (botão)
function calcular() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if (!altura || !peso) {
        document.getElementById("resultado").innerText = "Preencha todos os campos!";
        return;
    }

    let imc = calcularIMC(peso, altura);
    let classificacao = classificarIMC(imc);

    document.getElementById("resultado").innerText =
        `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}