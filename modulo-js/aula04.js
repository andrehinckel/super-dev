
// valor inicial
/* let contador = 0;

// While = ENQUANTO
// condicao
while (contador <= 5) {
    // fazer algo
    console.log(contador)

    // atualizar algo

    // Novo valor vai ser = antigo valor + 1;
    contador = contador + 1;
} */

/* let vidaBoss = 100;

while (vidaBoss > 0) {
    console.log("Atacando o Boss!")

    vidaBoss = vidaBoss - 20;

    console.log("Vida:", vidaBoss)
} */

/* let numero = 1;

while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(numero, "é par")
    }
    else {
        console.log(numero, "é impar")
    }

    numero = numero + 1;
} */

/* let numero = 0;
let divisivelPor3e5 = 0;
let divisivelPor3 = 0;
let divisivelPor5 = 0;

while (numero <= 100) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log(numero, "é divisivel por 3 e 5");
        divisivelPor3e5 += 1; // divisivelPor3e5 = divisivelPor3e5 + 1
    }
    else if (numero % 3 === 0) {
        console.log(numero, "é divisivel por 3");
        divisivelPor3 += 1;
    }
    else if (numero % 5 === 0) {
        console.log(numero, "é divisivel por 5");
        divisivelPor5 += 1;
    }

    numero = numero + 1;
}

console.log("Quantidad de números diviseis por 3 e 5 é:", divisivelPor3e5);
console.log("Quantidad de números diviseis por 3 é:", divisivelPor3);
console.log("Quantidad de números diviseis por 5 é:", divisivelPor5); */

/* let dinheiro = 50;
let mes = 0;

while (dinheiro <= 500) {
    console.log("Mes", mes + 1, dinheiro);

    dinheiro += 50;

    mes++; // mes += 1; mes = mes + 1;
}

console.log("Total de meses:", mes); */

/* let progresso = 0;

while (progresso <= 100) {
    console.log("Download:", progresso, "%");

    progresso = progresso + parseInt(Math.random() * 6);
} */

    console.log(Math.random())