let a = Number(prompt("Informe A:"))
let b = Number(prompt("Informe B:"))
let c = Number(prompt("Informe C:"))

let tmp;

if (a > b) { tmp = a; a = b; b = tmp; }
if (a > c) { tmp = a; a = c; c = tmp; }
if (b > c) { tmp = b; b = c; c = tmp; }

console.log(`Ordem crescente: ${a} ${b} ${c}`)