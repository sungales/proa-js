let areaTotal = 0;
let continuar = "SIM";

while (continuar !== "NAO") {

    let nome = prompt("Nome do cômodo: ");
    let largura = Number(prompt("Largura (m): "));
    let comprimento = Number(prompt("Comprimento (m): "));

    let area = largura * comprimento;

    console.log(`Área do ${nome} é: ${area.toFixed(2)} m²`);

    areaTotal += area;

    continuar = prompt("Deseja continuar calculando novos cômodos? (SIM/NAO): ");
    continuar = continuar.toUpperCase();
}