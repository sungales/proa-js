let matrizA = [1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14, 15
]

let matrizB = new Array(15)


for (let i = 0; i < matrizA.length; i++) {
    if (i % 2 !== 0) {
        matrizB[i] = matrizA[i] / 2
    } else {
        matrizB[i] = matrizA[i] * 1.5
    }
}

console.log("Matriz A    Matriz B")

for (let i = 0; i < matrizA.length; i++) {
    console.log(`${matrizA[i]}          ${matrizB[i]}`)
}