/* 
function ehPar(numero) {
    // Resultado true        // Resultado false
    return numero % 2 === 0 ? true : false;
}

for (let numero = 0; numero <= 100; numero++) {
    if (ehPar(numero)) {
        console.log(numero, "é par")
    } else {
        console.log(numero, "é impar")
    }
} */

/* function somar(a, b) {
    return a + b;
}

let resultado = somar(10, 5) * 2;

console.log(resultado); */

/* function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
}

console.log(calcularMedia(9, 8, 7)) */

/* const aluno1 = "Dongle"
const aluno2 = "William"
const aluno3 = "Nathan"
const aluno4 = "Xande"
const aluno5 = "Diogo"


// Array/Lista de alunos
const alunos = [
    "Dongle", // 0
    "William", // 1
    "Nathan", // 2
    "Xande", // 3
    "Diogo" // 4
]
console.log(alunos.length)

    // Acesssando a posição 1
console.log(alunos[1])
console.log(alunos[alunos.length -1])

// Alteração/Atribuição de um valor na posição X
alunos[0] = "Diego"
console.log(alunos[0]) */

/* const cores = ["azul", "verde", "amarelo", "preto"];

// Primeira cor
console.log("Primeira cor", cores[0])

// Terceira cor
console.log("Terceira cor", cores[2])

// Ultima
console.log("Ultima cor", cores[cores.length -1])

// Tamanho
console.log("Tamanho Array", cores.length)

// Substituir
cores[1] = "roxo"
console.log(cores) */

/* const animais = ["gato", "cachorro", "coelho"];

console.log(animais[animais.length - 1]); */

/////////////////////////////////////////// MANIPULAÇÂO ARRAYS ///////////////////////////////

/* const livros = ["Harry Potter", "Percy Jackson", "Game of Thrones"]
console.log(livros)

// Adiciono um novo elemento AO FINAL do Array
livros.push("Senhor dos Anéis")
console.log(livros)

// Remove o ULTIMO elemento do Array
livros.pop();
console.log(livros)

// Adiciono um novo elemento AO INICIO do Array
livros.unshift("Homem de Ferro")
console.log(livros)

// Remove o PRIMEIRO elemento do Array
livros.shift();
console.log(livros)

                    // Expressão lambda
const novoLivros = livros.filter(item => item !== 'Harry Potter');
console.log(novoLivros)

function removerItem(array, itemParaRemover) {
    return array.filter(item => item !== itemParaRemover);
}

const novoNovoLivros = removerItem(livros, 'Percy Jackson');
console.log(novoNovoLivros); */

/* const alunos = [
    "Dongle", // 0
    "William", // 1
    "Nathan", // 2
    "Xande", // 3
    "Diogo" // 4
]

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
} */

/* const idades = [15, 18, 22, 16, 30];

let quantidade = 0;

for (let i = 0; i < idades.length; i++) {
    const idade = idades[i];

    if (idade >= 18) {
        quantidade++;
    }
}

console.log("Maiores de idade:", quantidade) */

/* function somar(a, b) {
    return a + b;
}

const notas = [8, 5, 10, 6, 7];
let somaNotas = 0;
let notasMaioresOuIguaisSete = 0;
let maiorNota = 0;
let menorNota = 999;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];

    somaNotas = somar(somaNotas, nota);

    if (nota >= 7) {
        notasMaioresOuIguaisSete++;
    }

    if (nota >= maiorNota) {
        maiorNota = nota;
    }

    if (nota <= menorNota) {
        menorNota = nota;
    }

    console.log("Aluno", i + 1, "- Nota:", nota);
}

const media = somaNotas / notas.length;

console.log("Soma das Notas:", somaNotas);
console.log("Média da turma:", media);
console.log("Notas maiores ou iguais a sete", notasMaioresOuIguaisSete);
console.log("A maior nota é:", maiorNota);
console.log("A menor nota é:", menorNota); */

/* const notas = [8, 5, 10, 6, 7];
let somaNotas = 0;
let notasMaioresOuIguaisSete = 0;
let maiorNota = 0;
let menorNota = 999;

// For Tradicional OU For com Indice
for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
}


        // for...of
for (const nota of notas) {

    somaNotas += nota;

    if (nota >= 7) {
        notasMaioresOuIguaisSete++;
    }

    if (nota >= maiorNota) {
        maiorNota = nota;
    }

    if (nota <= menorNota) {
        menorNota = nota;
    }

    console.log("Nota:", nota);
} */


function mostrarNomes(nomes) {
    for (const nome of nomes) {
        console.log(nome);
    }
}

const alunos = [
    "Dongle", // 0
    "William", // 1
    "Nathan", // 2
    "Xande", // 3
    "Diogo" // 4
]

mostrarNomes(alunos);