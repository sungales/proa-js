let counter = 0
let result = 1
let POTENCIA = 3

while (counter < 15) {
    result = result * POTENCIA
    if (result === 0) {
        result = 1
    }
    counter++
    console.log(result)
}

