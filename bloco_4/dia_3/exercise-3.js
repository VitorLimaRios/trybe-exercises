let n = 5

let asterisco = "";

if(n <= 1) {
    console.log("Numero escolhido muito pequeno");
} else {
    for(i = n; i > 0; i -= 1){
        asterisco = "";
        for(j = 1; j <= n; j += 1){
            if(j>=i){      
                asterisco+="*";
            } else {
                asterisco+=" ";
            }
        }
        console.log(asterisco);
    }
}
