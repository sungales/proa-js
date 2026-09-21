let vetor = [9, 7, 3, 12, 5, 6, 2, 8, 1, 10, 11, 4]

for (i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        if (vetor[j] < vetor[j + 1]) {
            let aux = vetor[j]
            vetor[j] = vetor[j + 1]
            vetor[j + 1] = aux
        }
    }
}

console.log(vetor)


