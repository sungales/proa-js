let counter = 0
let aux = 0

while (counter < 501) {
    if (counter % 2 === 0) {
        aux = aux + counter
        console.log(aux)
    }
    counter++
}