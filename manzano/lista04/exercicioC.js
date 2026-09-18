let counter = 1
let numero = 0

do {
    if (counter % 4 === 0) {
        numero = counter
        console.log(numero)
    }
    counter++
} while (counter < 201)