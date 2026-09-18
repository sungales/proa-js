let atual = 1
let next = 0
let start = 0

for (i = 0; i <= 15; i++) {
    next = start + atual
    start = atual
    atual = next
    console.log(start)
}

