/* console.log(10 > 5);
console.log(10 < 5);
console.log(18 >= 18);
console.log(17 >= 18);

console.log(5 === "5");
console.log(5 !== "5"); */

/* const media = Math.round(7);

if (media >= 7) {
    console.log("Aprovado");
}
else if (media >= 6) {
    console.log("Falar com coordenação");
}
else {
    console.log("Reprovado");
} */

/* const idade = 17;

if (idade >= 18) {
    console.log("Maior de Idade")
}
else {
    console.log("Menor de idade")
} */

/* const meta = 18000;
const vendeu = 19000;

if (vendeu > meta) {
    console.log("Bateu a meta")
}
else {
    console.log("Não bateu a meta")
} */

/* const idade = 17;
const possuiuIngresso = true;
const querComprarIngresso = true;
const possuiEstoque = true;

if (idade >= 18 && possuiuIngresso) {
    console.log("Pode entrar na festa")
}
else if (idade >= 18 && !possuiuIngresso) {
    if (querComprarIngresso && possuiEstoque) {
        console.log("O ingresso está R$ 500")
    }
    else if (querComprarIngresso && !possuiEstoque) {
        console.log("Nao tem ingresso disponivel")
    }
    else {
        console.log("Vá embora")
    }
}
else if (idade < 18 && possuiuIngresso) {
    console.log("Nao Pode entrar na festa por que é de menor")
}
else {
    console.log("Nao Pode entrar na festa")
} */

/* const possuiCupom = false;
const clienteVip = true;

if (possuiCupom || clienteVip) {
    console.log("Possuir desconto")
} */

/* const naoBloqueado = false;

console.log(!naoBloqueado)

const desbloqueado = true;

console.log(desbloqueado) */

const valorCompra = 850;
const clienteVip = true;
let valorDesconto = 0;

if (clienteVip && valorCompra >= 500) {
    //Aplicar 20% de desconto
    valorDesconto = valorCompra * 20 / 100;
}
else if (clienteVip) {
    valorDesconto = valorCompra * 10 / 100;
}
else if (valorCompra >= 500) {
    valorDesconto = valorCompra * 5 / 100;
}
else {
    valorDesconto = 0;
}

const valorFinal = valorCompra - valorDesconto;

console.log("Valor desconto:", valorDesconto);
console.log("Valor Final:", valorFinal);