const custoMissao = 3000000;
const percentualReserva = 10;

const reserva = custoMissao * percentualReserva / 100;
const total = custoMissao + reserva;

console.log("Reserva:", reserva);
console.log("Total:", total);