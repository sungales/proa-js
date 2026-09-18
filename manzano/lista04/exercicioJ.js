let dividendo = Number(prompt("Número a dividir"));
let divisor = Number(prompt("Número que divide"));

let resultado = 0

do {
    dividendo -= divisor
    resultado++
} while(dividendo >= divisor)

alert(`o quociente é: ${resultado}`)