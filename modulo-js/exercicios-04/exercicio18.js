let numero = 1;
let pares = 0;
let impares = 0;

while (numero <= 30) {
    if (numero % 2 === 0) {
        pares++;
    }
    else {
        impares++;
    }

    numero++;
}

console.log("Pares:", pares);
console.log("Impares", impares)