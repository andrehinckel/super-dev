const peso = 87;
const altura = 1.80;

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso");
}
else if (imc >= 18.5 && imc < 25) {
    console.log("Faixa normal")
}
else if (imc >= 25 && imc < 30) {
    console.log(imc)
    console.log("sobrepeso")
}