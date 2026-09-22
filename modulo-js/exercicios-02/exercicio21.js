const numero = 18;

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("Número é divisel por 3 e 5");
}
else if (numero % 3 === 0) {
    console.log("Número é divisel por 3");
}
else if (numero % 5 === 0) {
    console.log("Número é divisel por 5");
}
else {
    console.log("nenhum")
}