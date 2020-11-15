//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorio(N){
    let soma = 0;
    for (let i = 1; i <= N; i += 1) {
        soma += i;
    }
    return soma;
}

console.log(somatorio(5))
//Valor esperado no retorno da função: 15.
