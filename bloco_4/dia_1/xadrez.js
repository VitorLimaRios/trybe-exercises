let a = "REI";

let peca = a.toLowerCase(a);

switch(peca) {
    case "peao":
        console.log("apenas move uma unidade para frente")
        break;
    case "torre":
        console.log("move quantas unidades quiser horizontalmente e verticalmente");
        break;
    case "cavalo":
        console.log("move em L");
        break;
    case "bispo":
        console.log("move quantas unidades quiser em diagonal");
        break;
    case "rainha":
        console.log("move para qualquer direcao quantas unidades quiser");
        break;
    case "rei":
        console.log("move para qualquer direcao apenas uma unidade");
        break
}