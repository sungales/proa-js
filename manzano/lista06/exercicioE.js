let matrizA = new Array(15)
let matrizB = new Array(15)
let matrizC = new Array(30)

for (let i = 0; i < matrizA.length; i++) { 
    matrizA[i] = Number(prompt(`digite A[${i}]: `))
}

for (let i = 0; i < matrizB.length; i++) { 
    matrizB[i] = Number(prompt(`digite B[${i}]: `))
}

for(let i = 0; i < 15; i++) { 
    matrizC[i] = matrizA[i]
    matrizC[i + 15] = matrizB[i] * 2
}

console.log(matrizC)

