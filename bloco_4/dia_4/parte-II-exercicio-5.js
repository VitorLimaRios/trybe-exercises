//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maiorRepeticao(arr){
    let maisRepete = 0;
    let maiorRepeticao = 0;
    let numeroDeRepeticoes = 0;
   for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
            if (arr[i] === arr[j]) {
                numeroDeRepeticoes += 1;
            }
        }
        if (numeroDeRepeticoes > maiorRepeticao) {
            maiorRepeticao = numeroDeRepeticoes;
            maisRepete = arr[i];
        }
        numeroDeRepeticoes = 0
   }
   return maisRepete;
}

console.log(maiorRepeticao([2, 3, 2, 5, 8, 2, 3]))
//Valor esperado no retorno da função: 2.
