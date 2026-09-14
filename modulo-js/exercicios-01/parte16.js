const pacotes = 176;
const capacidadeCaixa = 10;

const pacotesRestantes = pacotes % capacidadeCaixa;
const caixasCompletas = (pacotes - pacotesRestantes) / capacidadeCaixa;

console.log("Pacotes restantes:", pacotesRestantes);
console.log("Caixas completas:", caixasCompletas);