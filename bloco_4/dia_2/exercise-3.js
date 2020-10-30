let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let media_aritmetica = 0;

for(let i = 0; i < numbers.length; i++) {
    media_aritmetica += numbers[i]
}

media_aritmetica /= numbers.length;

console.log(media_aritmetica);