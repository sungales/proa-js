let vetor = [9, 7, 3, 12, 5, 6, 2, 8]
let vetorB = []
let numero = 25

for (i = 0; i < 8; i++) {
    vetorB[i] = vetor[i] * 5
}

for (i = 0; i < 8; i++) {
    if(vetorB[i] === numero) {
        console.log("numero encontrado!! na posição: ", i)
    } else {
        console.log("numero nao existe")
    }
}
