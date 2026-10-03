let horaInicio = Number(prompt("Digite a hora de início:"));
let horaFim = Number(prompt("Digite a hora de fim:"));

let duracao;

if (horaFim > horaInicio) {
    duracao = horaFim - horaInicio;
} else {
    duracao = (24 - horaInicio) + horaFim;
}

alert(`A duração do jogo foi de ${duracao} horas.`);
