let matrizA = new Array(20)
let matrizB = new Array(30)
let matrizC = new Array(50)

for (let i = 0; i < matrizA.length; i++) { 
    matrizA[i] = Number(prompt(`digite A[${i}]: `))
}

for (let i = 0; i < matrizB.length; i++) { 
    matrizB[i] = Number(prompt(`digite B[${i}]: `))
}

for(let i = 0; i < 30; i++) { 
    matrizC[i] = matrizA[i]
    matrizC[i + 30] = matrizB[i] * 2
}