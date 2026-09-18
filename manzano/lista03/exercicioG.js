let start = 0
let atual = 1
let next = 0
let counter = 0


while (counter < 15) { 
    next = start + atual
    start = atual
    atual = next
    console.log(start)
    counter++
}