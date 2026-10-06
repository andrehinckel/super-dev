let texto = "JavaScript";

texto.trim(); // Remove todos os espaços em branco do texto
texto.toUpperCase() // Transforma a string em maisculo = JAVASCRIPT
texto.toLowerCase() // Transforma a string em maisculo = javascript
texto.startsWith("ja") // Verifica se o texto fornecido no parametro está contido no INICIO do texto
texto.endsWith("scri") // Verifica se o texto fornecido no parametro está contido no FINAL do texto

//console.log(texto.length); // Retorna a quantidade de caracteres na string (contando com espaço em branco)

//console.log(texto[0]) // Pega o primeiro caracter da string
texto.charAt(0)

//console.log(texto[texto.length - 1]) // Pega o ultimo caracter da string
texto.charAt(texto.length - 1);

/* for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
} */

/* let palavra = "banana";
let quantidade = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === "a") {
        quantidade++;
    }
}

console.log(quantidade) */

/* let palavra = "JavaScript";
let invertida = "";

for (let i = palavra.length -1; i >= 0; i--) {
    // Interpolação de String
    invertida += palavra[i]; // invertida = invertida + palavra[i]

    // console.log("palavra" + " " + "alguma outra coisa")
}

console.log(invertida); */

/* for (let andar = 1; andar <= 4; andar++) {
    for (let sala = 1; sala <= 3; sala++) {
        for (let quarto = 1; quarto <= 2; quarto++) {
            console.log("Andar", andar, "Sala", sala, "Quarto", quarto)
        }
    }
} */

/* for (let turma = 1; turma <= 3; turma++) {
    for (let aluno = 1; aluno <= 5; aluno++) {
        console.log("Turma", turma, "Aluno", aluno);
    }
} */

/* for (let semana = 1; semana <= 4; semana++) {
    for (let dia = 1; dia <= 7; dia++) {
        console.log("Semana", semana, "-", "Dia", dia);
    }
} */

/* for (let numero = 1; numero <= 10; numero++) {
    console.log("Tabuada do", numero)

    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        console.log(
            numero,
            "X",
            multiplicador,
            "=",
            numero * multiplicador
        );
    }
} */


/* for (let linha = 1; linha <= 5; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 5; coluna++) {
        if (linha === 1 || linha === 5 || coluna === 1 || coluna === 5) {
            desenho += "*";
        } else {
            desenho += " ";
        }
    }

    console.log(desenho)
} */



















for (let linha = 5; linha >= 1; linha--) {
    let desenho = "";

    for (let espaco = 1; espaco <= 5 - linha; espaco++) {
        desenho += " ";
    }

    for (let estrela = 1; estrela <= linha * 2 - 1; estrela++) {
        desenho += "*"
    }

    console.log(desenho)
};
