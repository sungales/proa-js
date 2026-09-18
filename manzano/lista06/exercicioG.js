let matrizA = new Array(20)
let matrizB = new Array(20)

for (let i = 0; i < matrizA.length; i++) { 
    matrizA[i] = Number(prompt(`digite A[${i}]: `))
}

for(let i = 0; i < matrizA.length; i++) { 
    matrizB[i] = matrizA[19 - i]
}

console.log("Matriz A    Matriz B")

for (let i = 0; i < matrizA.length; i++) {
    console.log(`${matrizA[i]}          ${matrizB[i]}`)
}


