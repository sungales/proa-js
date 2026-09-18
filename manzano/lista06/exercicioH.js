let matrizA = [1,2,3,4,5]
let matrizB = [6,7,8,9,10]
let matrizC = [11,12,13,14,15]
let matrizD = new Array(15)

for (let i = 0; i < 5; i++) { 
    matrizD[i] = matrizA[i]
    matrizD[i + 5] = matrizB[i]
    matrizD[i + 10] = matrizC[i]
}

console.log(matrizD)

