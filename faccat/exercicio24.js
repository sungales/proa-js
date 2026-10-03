let salarioFixo = Number(prompt("Digite o salário fixo:"));
let vendas = Number(prompt("Digite o valor total das vendas:"));

let comissao;

if (vendas <= 1500) {
  comissao = vendas * 0.03;
} else {
  let excedente = vendas - 1500;

  comissao = 1500 * 0.03 + excedente * 0.05;
}

let salarioTotal = salarioFixo + comissao;

alert(`Comissão: R$ ${comissao}`);
alert(`Salário total: R$ ${salarioTotal}`);
