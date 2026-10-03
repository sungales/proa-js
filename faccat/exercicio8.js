let totalEleitores = parseInt(prompt("Digite o número total de eleitores: "))
let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "))
let votosNulos = parseInt(prompt("Digite o número de votos nulos: "))
let votosValidos = parseInt(prompt("Digite o número de votos válidos: "))

let percBrancos = (votosBrancos / totalEleitores) * 100;
let percNulos = (votosNulos / totalEleitores) * 100;
let percValidos = (votosValidos / totalEleitores) * 100;

alert(
  `Percentual de votos brancos: ${percBrancos}%\n` +
    `Percentual de votos nulos: ${percNulos}%\n` +
    `Percentual de votos válidos: ${percValidos}%`,
);
