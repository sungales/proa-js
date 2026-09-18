let matrizA = new Array(20)
let matrizB = new Array(20)

for (i = 0; i < matrizA.length; i++) { 
    matrizA[i] = Number(prompt(`digite A[${i}]: `))
}

for (i = 0; i < matrizB.length; i++) { 
    matrizB[i] = matrizA[i] ** 2
}

console.log("A: ", matrizA)
console.log("B: ", matrizB)