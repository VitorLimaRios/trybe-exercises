//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceMaior(arr){
    let maiorNumero = -Infinity;
    let posicao = 0;

    for(i = 0; i < arr.length; i++){
        if(arr[i] > maiorNumero){
            maiorNumero = arr[i]
            posicao = i;
        }
    }
    return posicao
}

console.log(indiceMaior([2, 3, 6, 7, 10, 1]))
