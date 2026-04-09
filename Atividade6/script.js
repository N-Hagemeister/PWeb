function calcularMedia() {
    let nome = prompt("Nome do aluno:");

    let nota1 = parseFloat(prompt("Primeira nota:"));
    let nota2 = parseFloat(prompt("Segunda nota:"));
    let nota3 = parseFloat(prompt("Terceira nota:"));
    let nota4 = parseFloat(prompt("Quarta nota:"));

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    alert("Aluno: " + nome + "\nMédia: " + media);
}

function calcularOperacoes() {
    let num1 = parseFloat(prompt("Primeiro número:"));
    let num2 = parseFloat(prompt("Segundo número:"));

    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let produto = num1 * num2;
    let divisao = num1 / num2;
    let resto = num1 % num2;

    alert(
        "Resultados:\n" +
        "Soma: " + soma + "\n" +
        "Subtração: " + subtracao + "\n" +
        "Produto: " + produto + "\n" +
        "Divisão: " + divisao + "\n" +
        "Resto: " + resto
    );
}