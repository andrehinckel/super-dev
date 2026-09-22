// Regras
// Possuir concurso ou pelo menos 2 anos de exp;
// tirar pelo menos nota 7 nos testes;

// se a nota for 9 ou maior e possuir portifolio está aprovado
// se a nota for 8 e possuir portifolio ele precisa passar pela entrevista técnica
// se a nota for 8 e ele possuir disponibilidade integral ele precisa passar pela entrevista técnica
// Banco de talentos

// Caso ele não possua requisitos inicias ele está reprovado

const possuiConcurso = true;
const anosExperiencia = 1;
const notaTeste = 9;
const possuiPortifolio = true;
const possuiDisponibilidadeIntegral = true;

const possuiConcursoOuAnosExperiencia = possuiConcurso || anosExperiencia >= 2;
const possuiRequisitosInicias = possuiConcursoOuAnosExperiencia && notaTeste >= 7;

if (possuiRequisitosInicias) {

    if (notaTeste >= 9 && possuiPortifolio) {
        console.log("Aprovado diretamente")
    }
    else if (notaTeste >= 8 && (possuiPortifolio || possuiDisponibilidadeIntegral)) {
        console.log("Entrevista ténica")
    }
    else {
        console.log("Banco de talentos")
    }

}
else {
    console.log("Reprovado")
}

