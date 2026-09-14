const tripulantes = 4;
const aguarPorDia = 3;
const diasMissao = 16;
const aguaDisponivel = 220;

const consumoPorPessoa = aguarPorDia * diasMissao;

const consumoTotal = consumoPorPessoa * tripulantes;

const aguaRestante = aguaDisponivel - consumoTotal;

console.log("Consumo por pessoa:", consumoPorPessoa);
console.log("Consumo total da tripulação:", consumoTotal);
console.log("Agua restante:", aguaRestante);