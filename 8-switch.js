const nome = 'Cleiton'
const nota = 8;
const faltas = 2;

const recebeBonos = (nota >= 8) && (faltas <= 2) ? `${nome} recebe bonus` : `${nome} não recebe bonus`

console.log(recebeBonos);