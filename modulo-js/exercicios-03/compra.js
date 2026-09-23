const valorCompra = 400;
const clienteVip = false;
const possuiCupom = true;
const cupomValido = true;
const primeiraCompra = false;

let percentualDesconto = 0;

if (clienteVip && valorCompra >= 1000) {
    percentualDesconto = 20;
}
else if (possuiCupom && cupomValido) {
    percentualDesconto = 15;
}
else if (primeiraCompra) {
    percentualDesconto = 10;
}
else if (clienteVip) {
    percentualDesconto = 5;
}

const valorDesconto = valorCompra * percentualDesconto / 100;

const valorFinal = valorCompra - valorDesconto;

let frete = 30;

if (valorFinal >= 500 || clienteVip) {
    frete = 0;
}

const totalPedido = valorFinal + frete;

console.log("Compra: RS", valorCompra)
console.log("Percentual Desconto: ", percentualDesconto, "%")
console.log("Valor Desconto: RS", valorDesconto);
console.log("Valor compra pós desconto: RS", valorFinal)
console.log("Valor frete: RS", frete)
console.log("Valor total pedido: RS", totalPedido)