function jogar(usuario) {
    let numero = Math.random();
    let computador;

    if (numero < 0.33) {
        computador = "pedra";
    } else if (numero < 0.66) {
        computador = "papel";
    } else {
        computador = "tesoura";
    }

    let resultado;

    if (usuario === computador) {
        resultado = "Empate";
    } else if (
        (usuario === "pedra" && computador === "tesoura") ||
        (usuario === "tesoura" && computador === "papel") ||
        (usuario === "papel" && computador === "pedra")
    ) {
        resultado = "Você venceu!";
    } else {
        resultado = "Computador venceu!";
    }

    document.getElementById("resultado").innerText =
        "Você: " + usuario +
        " | Computador: " + computador +
        " | Resultado: " + resultado;
}