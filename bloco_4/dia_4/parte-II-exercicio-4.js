//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(arr){
    let nome = "";

    for(i = 0; i < arr.length; i++){
        if(arr[i].length > nome.length){
            nome = arr[i]
        }
    }
    return nome
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
