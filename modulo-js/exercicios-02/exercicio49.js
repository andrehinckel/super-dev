const salario = 18000;
const anos = 5;
let percentualBonus = 0;

if (anos >= 10) {
    percentualBonus = 20;
}
else if (anos >= 5) {
    percentualBonus = 10;
}
else if (anos >= 2) {
    percentualBonus = 5;
}

const valorBonus = salario * percentualBonus / 100;
const novoSalario = salario + valorBonus;

console.log("Percentual de aumento", percentualBonus);
console.log("Bonus", valorBonus);
console.log("Novo salário:", novoSalario);