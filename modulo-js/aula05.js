/* let opcao = 2;

do {
    console.log("=== MENU ====");
    console.log("1 - Jogar");
    console.log("2 - Configuracoes");
    console.log("0 - Sair");

    console.log("Opção escolhida: ", opcao)
    opcao--;
} while (opcao !== 0); */

// for

/* let numero = 1;

while (numero < 5) {
    console.log(numero);
    numero++;
} */

/* for (
    // i = index = posicao
    let i = 1; // Inicialização
    i <= 5; // Condição
    i++ // Atualização
) {
    console.log(i);
} */

// EXEMPLO 2

/* for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Feliz Ano Novo"); */

// EXEMPLO 3

/* for (let i = 0; i <= 20; i += 2) {
    console.log(i);
} */

// EXEMPLO 4

/* const numero = 7;

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(numero, "X", i, "=", resultado);
} */

// EXEMPLO 5

/* for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i, "é Par");
    }
    else {
        console.log(i, "é Impar");
    }
} */

// EXEMPLO 6

/* for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i, "é divisivel por 5");
    }
} */

// EXEMPLO 7 

/* let pares = 0;
let impares = 0;

for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        pares++;
    }
    else {
        impares++;
    }
}

console.log("Quantidade de pares", pares);
console.log("Quantidade de pares", impares); */

// EXEMPLO 8

/* let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = i * 2;

    soma += nota;
}

let media = soma / 2;

console.log(media); */

// EXEMPLO 9

/* for (let i = 1; i <= 5; i++) {
    console.log("Iniciando volta:", i);

    if (i === 5) {
        console.log("Ultima volta")
    }
} */

// EXEMPLO 10

/* for (let i = 1; i <= 100; i++) {

    if (i > 20 &&
        i < 80 &&
        i % 4 === 0
    ) {
        console.log(i);
    }
} */

/* for (let i = 1; i <= 100; i++) {
    if (i === 47){
        break;
    }

    console.log(i);
} */