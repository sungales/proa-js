let anos = parseInt(prompt("digite a idade em anos: "));
let meses = parseInt(prompt("digite a idade em meses: "));
let dias = parseInt(prompt("digite a idade em dias: "));

let totalDias = anos * 365 + meses * 30 + dias;
alert(`A idade expressa apenas em dias é: ${totalDias} dias`);
