const combustivel = 50000;
const consumoIda = 18000;
const consumoVolta = 17000;
const consumoTotal = consumoIda + consumoVolta;
const combustivelRestante = combustivel - consumoTotal;

console.log("Combustível inicial:", combustivel, "litros");
console.log("Combustível utilizado:", consumoTotal, "litros");
console.log("Combustível restante:", combustivelRestante, "litros");