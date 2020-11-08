// faça uma pirâmide com n asteriscos de base

let n = 6,
    meio = Math.round(n/2), // 3
    ladoEsquerdo = meio, // 3
    ladoDireito = meio; // 3

let word = "";

if (n % 2 === 0) {
    ladoDireito += 1;
}

for (let i = 1; i <= meio; i += 1) {
    for (let e = 1; e <= n; e += 1) {
        if (e >= ladoEsquerdo && e <= ladoDireito) {
            word += "*";
        } else {
            word += " ";
        }
    }
    console.log(word);
    ladoEsquerdo -= 1;
    ladoDireito += 1;
    word = "";
}
