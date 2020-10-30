let array = [];

for(let i = 1; i <= 25; i++) {
    array.push(i);
}

let arrayDividido = [];

for(let i = 0; i <= array.length; i++) {
    arrayDividido.push(array[i]/2);
}

console.log(arrayDividido);