let matrizA = new Array(6)
let matrizB = new Array(6)
let matrizC = new Array(12)
let numero;

for (let i = 0; i < matrizA.length; i++) { 
    numero = Number(prompt(`digite A[${i}]: `))

    if(numero % 2 === 0) { 
        matrizA[i] = numero
    }
}

for (let i = 0; i < matrizB.length; i++) { 
    numero = Number(prompt(`digite B[${i}]: `))

    if(numero % 2 !== 0) { 
        matrizB[i] = numero
    }
}

for (let i = 0; i < 12; i++) { 
    matrizC[i] = matrizA[i]
    matrizC[i + 6] = matrizB[i]
}

console.log(matrizC)