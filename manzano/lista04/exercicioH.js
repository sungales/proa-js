let areaTotal = 0;
let continuar = "SIM";

do {

    let nome = prompt("Nome do cômodo: ");
    let largura = Number(prompt("Largura (m): "));
    let comprimento = Number(prompt("Comprimento (m): "));

    let area = largura * comprimento;

    console.log(`Área do ${nome} é: ${area})} m²`);

    areaTotal += area;

    continuar = prompt("Deseja continuar calculando novos cômodos? (SIM/NAO): ");
    continuar = continuar.toUpperCase();
} while (continuar !== "NAO")
