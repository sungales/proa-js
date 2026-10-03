let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));

let percentualDistribuidor = 0.28;
let percentualImpostos = 0.45;

let custoFinal = custoFabrica + (custoFabrica * percentualDistribuidor) + (custoFabrica * percentualImpostos);

alert(custoFinal)
