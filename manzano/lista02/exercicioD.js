let numero1 = parseInt(prompt("Digite a primeira nota:"))
let numero2 = parseInt(prompt("Digite a segunda nota:"))
let numero3 = parseInt(prompt("Digite a terceira nota:"))
let numero4 = parseInt(prompt("Digite a quarta nota:"))
let notaExame

let media = (numero1 + numero2 + numero3 + numero4) / 4

if (media >= 7) { 
    console.log("aluno aprovado: ", media)
} else if(media < 7) {
    notaExame = parseInt(prompt("Digite a nota do exame:"))
    media += notaExame
    if(media >= 5) { 
        console.log("aluno foi aprovado: ", media)
    } else {
        console.log("aluno reprovado: ", media)
    }
}