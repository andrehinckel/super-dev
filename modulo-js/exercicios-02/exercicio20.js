const jogador1 = "pedra";
const jogador2 = "tesoura";

if (jogador1 === "pedra" && jogador2 === "tesoura") {
    console.log("Jogador 1 ganhou")
}
else if (jogador1 === "tesoura" && jogador2 === "papel") {
    console.log("Jogador 1 ganhou")
}
else if (jogador1 == "papel" && jogador2 === "pedra") {
    console.log("Jogador 1 ganhou")
}
else if (jogador1 === jogador2) {
    console.log("Empate")
}
else {
    console.log("Jogador 2 ganhou")
}