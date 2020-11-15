//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindromo(word){
    let pali = true;
    for(i = 0; i < Math.trunc(word.length/2); i++){
        if(word[i] != word[word.length - (i + 1)]){
            pali = false
        }
    }
    return pali
}

console.log(palindromo("arara"))
