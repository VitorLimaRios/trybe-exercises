//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceMenor(arr){
    let menorNumero = +Infinity;
    let posicao = 0;

    for(i = 0; i < arr.length; i++){
        if(arr[i] < menorNumero){
            menorNumero = arr[i]
            posicao = i;
        }
    }
    return posicao
}

console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]))
