const quantidadeProdutoComprado = 1

if(quantidadeProdutoComprado <= 1){
    console.log("Não há promoção")
}else if( quantidadeProdutoComprado >= 2 && quantidadeProdutoComprado < 10){
    console.log("Promoção de 5%")
} else if ( quantidadeProdutoComprado >= 10  && quantidadeProdutoComprado <= 19){
    console.log("Promoção de 15%")
} else if ( quantidadeProdutoComprado >= 20  && quantidadeProdutoComprado <= 49){
console.log("Promoção de 40%")
}else if ( quantidadeProdutoComprado == 50){
console.log("Promoção de 50%")
} else if ( quantidadeProdutoComprado >= 51  && quantidadeProdutoComprado <= 99){
console.log("Promoção de 75%")
} else{
    console.log("Promoção de 100%")
}