function iniciarPesquisa() {

    let idades = new Array(45);
    let sexos = new Array(45);
    let opinioes = new Array(45);

    let somaIdade = 0;
    let maiorIdade = 0;
    let menorIdade = 999;

    let qtdePessimo = 0;
    let qtdeOtimoBom = 0;

    let qtdeMulheres = 0;
    let qtdeHomens = 0;
    let qtdeOutros = 0;

    for (let i = 0; i < 45; i++) {

        let numeroPessoa = i + 1;

        let idade = parseInt(prompt("Idade da " + numeroPessoa + "ª pessoa:"));
        let sexo = prompt("Sexo da " + numeroPessoa + "ª pessoa (feminino, masculino, outros):").toLowerCase();
        let opiniao = parseInt(prompt("Opinião da " + numeroPessoa + "ª pessoa (ótimo=4, bom=3, regular=2, péssimo=1):"));
        
        idades[i] = idade;
        sexos[i] = sexo;
        opinioes[i] = opiniao;

        somaIdade += idade;

        if (idade > maiorIdade) {
            maiorIdade = idade;
        }

        if (idade < menorIdade) {
            menorIdade = idade;
        }

        if (opiniao === 1) {
            qtdePessimo++;
        }

        if (sexo === "feminino") {
            qtdeMulheres++;
        } else if (sexo === "masculino") {
            qtdeHomens++;
        } else {
            qtdeOutros++;
        }
    }

    let mediaIdade = somaIdade / 45;
    let porcentagemOtimoBom = (qtdeOtimoBom / 45) * 100;

    document.getElementById("resultado").innerHTML =
        "Média de idade: " + mediaIdade.toFixed(2) + "<br>" +
        "Maior idade: " + maiorIdade + "<br>" +
        "Menor idade: " + menorIdade + "<br>" +
        "Quantidade de péssimo: " + qtdPessimo + "<br>" +
        "Porcentagem ótimo/bom: " + porcentagemOtimoBom.toFixed(2) + "%<br>" +
        "Mulheres: " + qtdMulheres + "<br>" +
        "Homens: " + qtdHomens + "<br>" +
        "Outros: " + qtdOutros;
}