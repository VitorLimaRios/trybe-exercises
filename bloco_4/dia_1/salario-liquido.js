let salarioBruto = 3500;
let inss, ir;

if(salarioBruto <= 1556.94) {
    inss = salarioBruto*0.08;
} else if(salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    inss = salarioBruto*0.09;
} else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    inss = salarioBruto*0.11;
} else {
    inss = salarioBruto*0.11;
    if(inss > 570.88){
        inss = 570.88;
    }
}

salarioBruto -= inss;

if (salarioBruto <= 1903.98) {
    ir = 0;
} else if(salarioBruto > 1903.98 && salarioBruto <= 2826.65) {
    ir = (salarioBruto*0.075) - 142.8;
} else if(salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
    ir = (salarioBruto*0.15) - 354.80;
} else if(salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
    ir = (salarioBruto*0.225) - 636.13;
} else {
    ir = (salarioBruto*0.275) - 869.36;
}

salarioBruto -= ir;

console.log(salarioBruto);