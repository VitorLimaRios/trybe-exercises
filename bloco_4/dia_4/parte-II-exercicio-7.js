//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(word, ending){
    for (let i = 1; i <= ending.length; i += 1) {
        if (word[word.length - i] !== ending[ending.length - i]) {
            return false
        }
    }
    return true
}

console.log(verificaFimPalavra("trybe", "be"))
//Valor esperado no retorno da função: true.

console.log(verificaFimPalavra("joaofernando", "fernan"))
//Valor esperado no retorno da função: false.
