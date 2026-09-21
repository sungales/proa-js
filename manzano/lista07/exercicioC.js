let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let vetorB = []

for (i = 0; i < 15; i++) {
    vetorB[i] = vetor[i] / 2
}

for (i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
        if (vetor[j] < vetor[j + 1]) {
            let aux = vetor[j]
            vetor[j] = vetor[j + 1]
            vetor[j + 1] = aux
        }
    }

    for (let j = 0; j < 15; j++) {
        if (vetorB[j] < vetorB[j - 1]) {
            let aux = vetorB[j]
            vetorB[j] = vetorB[j - 1]
            vetorB[j - 1] = aux
        }
    }
}

console.log("vetor A: ", vetor)
console.log("vetor B: ", vetorB)
