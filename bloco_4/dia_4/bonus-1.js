//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function conversaoRomano(word) {
    let arr = [];
    let numeroDecimal = 0;
    for (let i = 0; i < word.length; i += 1) {
        if (word[i] === "I") {
            arr.push(1)
        } else if (word[i] === "V") {
            arr.push(5)
        } else if (word[i] === "X") {
            arr.push(10)
        } else if (word[i] === "L") {
            arr.push(50)
        } else if (word[i] === "C") {
            arr.push(100)
        } else if (word[i] === "D") {
            arr.push(500)
        } else if (word[i] === "M") {
            arr.push(1000)
        }
    }
    for (let j = 0; j < arr.length; j += 1) {
        if (arr[j] < arr[j + 1]) {
            numeroDecimal -= arr[j]
        } else {
            numeroDecimal += arr[j]
        }
    }
    return numeroDecimal;
}

console.log(conversaoRomano("IX")) // 9

console.log(conversaoRomano("XLIX")) // 49

console.log(conversaoRomano("CLIII")) // 153