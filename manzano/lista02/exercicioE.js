let a = parseFloat(prompt("Digite o valor de A (diferente de zero):"))
let b = parseFloat(prompt("Digite o valor de B:"))
let c = parseFloat(prompt("Digite o valor de C:"))

if (a === 0) {
  alert("O valor de A deve ser diferente de zero!")
} else {
  let delta = (b * b) - (4 * a * c)
  
  if (delta < 0) {
    alert(`Delta negativo (${delta}) não existem raízes reais!`)
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    
    alert("Delta = " + delta + "\nRaiz 1 (x1) = " + x1.toFixed(2) + "\nRaiz 2 (x2) = " + x2.toFixed(2))
  }
}