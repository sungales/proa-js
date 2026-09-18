let counter = 0

do {
    if (counter % 2 !== 0) {
        let fatorial = 1
        let numero = 1

        do {
            fatorial *= numero
            numero++
        } while (numero < counter)

        console.log(`${counter}! = ${fatorial}`)
    }
    counter++
} while (counter < 11)