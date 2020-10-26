let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let media_aritmetica = 0;

for(let i = 0; i < numbers.length; i++) {
    media_aritmetica += numbers[i]
}

media_aritmetica /= numbers.length;

if(media_aritmetica > 20){
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}