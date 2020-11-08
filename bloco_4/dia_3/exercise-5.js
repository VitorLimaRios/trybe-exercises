// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 7,
    meio = Math.round(n/2), // 3
    ladoEsquerdo = meio, // 3
    ladoDireito = meio; // 3

let word = "";

for (let i = 1; i <= meio; i += 1) {
    if (i === meio) {
        for (let end = 1; end <= n; end += 1) {
            word += "*"
        }
        console.log(word);
        break
    }
    for (let e = 1; e <= n; e += 1) {
        if (e === ladoEsquerdo || e === ladoDireito) {
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
