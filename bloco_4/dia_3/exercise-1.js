let n = 5

let asterisco = "*";

if(n <= 1) {
    console.log("Numero escolhido muito pequeno");
} else {
    for(i = 1; i < n; i += 1){
        asterisco+="*";
    }
    for(i = 0; i < n; i += 1){
        console.log(asterisco);
    }
}
