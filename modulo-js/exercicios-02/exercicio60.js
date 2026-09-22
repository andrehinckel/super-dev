const salario = 5000;
const valorEmprestimo = 20000;
const parcelas = 24;
const possuiDividas = false;

const valorParcela = valorEmprestimo / parcelas;
const limiteParcela = salario * 30 / 100;
const limitEmprestimo = salario * 10;

if (possuiDividas) {
    console.log("Emprestimo Negado: Possuir dividas");
}
else if (valorParcela > limiteParcela) {
    console.log("Emprestimo Negado: Parcela compromete mais do que 30% do salario")
}
else if (valorEmprestimo > limitEmprestimo) {
    console.log("Emprestimo Negado: Valor do emprestimo é 10 vezes maior do que o salario");
}
else if (parcelas >= 6 && parcelas <= 48) {
    console.log("Emprestimo Negado: quantidade de parcelas inválida");
}
else {
    console.log("Emprestimo aprovado");
}
