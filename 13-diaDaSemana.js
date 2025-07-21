// 1: Domingo    10h às 14h.

// 2: Segunda-feira
// 3: Terça-feira
// 4: Quarta-feira
// 5: Quinta-feira               9h às 18h
// 6: Sexta-feira
// 7: Sábado


// durane a semna 9h às 18h aos sábados e domingos 10h às 14h.

const diaSemana = 1;

if(diaSemana == 1){
        console.log("Aberto das 10 às 14")
} else if(diaSemana >= 2 && diaSemana <= 7){
    console.log("Aberto das  9h às 18h")
}

if( diaSemana == 0 ){
    console.log("Digite um valor de 1 a 7. Sendo: \n 1 - Domindo; \n 2 - Segunda; \n 3 - Terça; \n 4 - Quarta; \n 5 - Quinta; \n 6 - Sexta; \n 7 - Sábado;")
}


// ou

// const diaSemana = 6;

// if (diaSemana === 6 || diaSemana === 0) {
//   console.log("A loja está aberta em horário especial: 10h às 14h.");
// } else {
//   console.log("A loja está aberta no horário normal: 9h às 18h.");
// }