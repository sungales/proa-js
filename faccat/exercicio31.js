let A = Number(prompt("Digite o lado A:"));
let B = Number(prompt("Digite o lado B:"));
let C = Number(prompt("Digite o lado C:"));

if (A < B + C && B < A + C && C < A + B) {
    alert("Os valores formam um triângulo.");
} else {
    alert("Os valores não formam um triângulo.");
}
