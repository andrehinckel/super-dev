const numero1 = 10;
const numero2 = 0;
const operacao = "/";

if (operacao === "+") {
    console.log(numero1 + numero2);
}
else if (operacao === "-") {
    console.log(numero1 - numero2);
}
else if (operacao === "*") {
    console.log(numero1 * numero2);
}
else if (operacao === "/") {

    // Numero2 for 0 OU numero1 for zero = nao posso
    //if (numero1 === 0 || numero2 === 0) {
    //    console.log("Não é possivel dividr um numero por 0");
    //}
    //else {
    //    console.log(numero1 / numero2);
    //}

    if (numero2 >= 1 && numero1 >= 1) {
        console.log(numero1 / numero2);
    }
    else {
        console.log("Não é possivel dividr um numero por 0");
    }

}