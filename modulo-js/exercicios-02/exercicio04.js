const valorCompra = 100;
let valorDesconto = 0;

if (valorCompra > 1000) {
    valorDesconto = valorCompra * 15 / 100;
}
else if (valorCompra > 500) {
    valorDesconto = valorCompra * 10 / 100;
}
else if (valorCompra > 200) {
    valorDesconto = valorCompra * 5 / 100;
}

console.log(valorDesconto);
console.log(valorCompra - valorDesconto);