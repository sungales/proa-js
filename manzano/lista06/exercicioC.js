let matrizA = new Array(20)
let matrizB = new Array(20)
let matrizC = new Array(20)

for (i = 0; i < matrizA.length; i++) { 
    matrizA[i] = Number(prompt(`digite A[${i}]: `))
}

for (i = 0; i < matrizB.length; i++) { 
    matrizB[i] = Number(prompt(`digite B[${i}]: `))
}

for (i = 0; i < matrizC.length; i++) {
    matrizC[i] = matrizA[i] - matrizB[i]
}
console.log(matrizC)