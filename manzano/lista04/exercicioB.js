let counter = 1
let resultado = 0

do {
    if (counter % 2 === 0) { 
        resultado = resultado + counter
        console.log(resultado)
    }
    counter++
} while (counter < 501)
