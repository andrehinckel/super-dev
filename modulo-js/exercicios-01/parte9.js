const percentualReserva = 12;
const custoTotal = 2725000;

const valorReserva = custoTotal * percentualReserva / 100;
const custoFinal = custoTotal + valorReserva;

console.log("Reserva de segurança: R$", valorReserva);
console.log("Custo final: R$ ", custoFinal);
