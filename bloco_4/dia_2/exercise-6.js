let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i]%2 != 0) {
        impar.push(numbers[i])
    }
}

if(impar.length == 0){
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(impar);
}