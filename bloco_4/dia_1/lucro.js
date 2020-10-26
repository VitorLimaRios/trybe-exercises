let custo = 100, venda = 150;
let imposto = custo*0.2;
let custoTotal = custo + imposto;
let lucro = venda - custoTotal;

if(custo < 0 || venda < 0) {
    console.log("erro");
} else {
    console.log(lucro);
}