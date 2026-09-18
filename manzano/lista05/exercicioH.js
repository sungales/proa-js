let numero = 4
let expoente = 15
let resultado = 1

for (i = 0; i <= expoente; i++) {
    resultado += numero ** i
    console.log(`${numero} ^ ${i} = ${resultado}`)
}