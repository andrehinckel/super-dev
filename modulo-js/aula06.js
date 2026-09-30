
// Não funciona

/* console.log(test)

for (let i = 0; i <= 100; i+= 10) {
    console.log(i);
}

const test = 0;
console.log(i); */


// Funciona

/* for (let i = 1; i > 100; i+=2) {
    console.log(i);
}

for (let i = 1; i <= 100; i++) {
    console.log(i);
} */


// Qual a diferença entre for e while, e quando eu utilizo um ou outro?
// For é geralmente utilizado quando conseguimos de antemão saber quantas repetições eu vou fazer (QUANTAS VEZES)
// While é geralmente utilizado quando a condição não sabemos necessariamente quantas vezes ela vai acontecer. (ATÈ QUANDO)

// Exemplo 1:

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Exemplo 2:

let vida = 100;

while (vida > 0) {
    vida -= 17;
} */


// Manipulação de Strings

// A    n   d   r   e
// 0    1   2   3   4
/* let nome = "André"

console.log(nome[2])

// Length = Tamanho
console.log(nome.length)

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
} */

//let palavra = "andrehinckel@gmail.com";

/* console.log(palavra.length);

console.log(palavra[0])
console.log(palavra[palavra.length -1])
console.log(palavra[9]) */

/* console.log(palavra.charAt(0))
console.log(palavra.charAt(9)) */

//console.log(palavra.toUpperCase());
//console.log(palavra.toLocaleLowerCase());

// palavra.length = acessando uma propriedade (uma informação) da String
// palavra.toUpperCase() = Ele é um método, ele sempre vai fazer uma AÇÂO na minha variavel/string

// diogo.idade = informação;
// diogo.correr() 


/* if (palavra.includes("@gmail.com")) {
    console.log("Email válido")
}
else {
    console.log("Email inválido")
} */

/* let nome = "André"

if (nome.toLocaleLowerCase().startsWith("a")) {
    console.log("O nome começa com A")
}

let arquivo = "foto1.jpeg";


// Deny List = Uma lista de "negacao"
if (arquivo.endsWith("png") || arquivo.endsWith("jpg") || arquivo.endsWith("jpeg")) {
    console.log("Formato do arquivo não suportado")
}

// Allow list = uma lista de permissao
if (arquivo.endsWith("pdf")) {
    console.log("Formato do arquivo não suportado")
} */

/* let nome = "     André     ";
console.log(nome.length);

console.log(nome);
console.log(nome.trim()); */

/* let palavra = "JavaScript";

console.log(palavra.slice(0, 5)); */

/* let palavra = "banana";
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];

    if (letra === "a") {
        contador++;
    }
}

console.log(contador); */

let palavra = "javascript"
let vogais = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];

    if (letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u"
    ) {
        vogais++;
    }
}

console.log(vogais);