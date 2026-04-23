function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
}

function executarEx1() {
    let n1 = parseFloat(prompt("Primeiro número:"));
    let n2 = parseFloat(prompt("Segundo número:"));
    let n3 = parseFloat(prompt("Terceiro número:"));

    let maior = maiorNumero(n1, n2, n3);

    document.getElementById("resultado").innerHTML =
        "Maior número: " + maior;
}



function ordenarCrescente(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort(function(x, y) {
        return x - y;
    });
    return numeros;
}

function executarEx2() {
    let n1 = parseFloat(prompt("Primeiro número:"));
    let n2 = parseFloat(prompt("Segundo número:"));
    let n3 = parseFloat(prompt("Terceiro número:"));

    let ordenado = ordenarCrescente(n1, n2, n3);

    document.getElementById("resultado").innerHTML =
        "Ordem crescente: " + ordenado.join(", ");
}


function ehPalindromo(texto) {
    let tratado = texto.toLowerCase().replace(/\s/g, "");
    let invertido = tratado.split("").reverse().join("");
    return tratado === invertido;
}

function executarEx3() {
    let texto = prompt("Digite uma palavra ou frase:");

    let resultado = ehPalindromo(texto);

    document.getElementById("resultado").innerHTML =
        resultado ? "É palíndromo" : "Não é palíndromo";
}


function verificarSubconjunto(p1, p2) {

    if (!p1 || !p2) {
        return "erro";
    }

    p1 = p1.toLowerCase();
    p2 = p2.toLowerCase();

    if (p1.includes(p2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

function executarEx4() {
    let palavra1 = prompt("Digite a primeira palavra:");
    let palavra2 = prompt("Digite a segunda palavra:");

    let resultado = verificarSubconjunto(palavra1, palavra2);

    document.getElementById("resultado").innerHTML = resultado;
}


function diaSemana(dataStr) {

    let partes = dataStr.split("-");

    let ano = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1; // mês começa em 0
    let dia = parseInt(partes[2]);

    let data = new Date(ano, mes, dia);

    let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    return dias[data.getDay()];
}

function executarEx5() {
    let data = prompt("Digite uma data (YYYY-MM-DD):");

    let resultado = diaSemana(data);

    document.getElementById("resultado").innerHTML =
        "Dia da semana: " + resultado;
}