let carrosVendidos = parseInt(prompt("Digite o número de carros vendidos:" ));
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas:" ));
let salarioFixo = parseFloat(prompt("Digite o salário fixo:" ));
let comissaoPorCarro = parseFloat(prompt("Digite o valor da comissão por carro vendido:" ))

let comissaoFixa = carrosVendidos * comissaoPorCarro;
let comissaoPercentual = valorTotalVendas * 0.05;

let salarioFinal = salarioFixo + comissaoFixa + comissaoPercentual;

alert(`O salário final do vendedor é: R$ ${salarioFinal}`);
