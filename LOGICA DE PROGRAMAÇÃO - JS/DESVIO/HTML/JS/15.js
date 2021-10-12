var horaInicio = parseInt(prompt("Digite a hora de início da partida: "));
var horaFim = parseInt(prompt("Digite a hora do fim da partida: "));
var hora1 = horaFim - horaInicio;
var hora2 = (24 - horaInicio) + horaFim;
if (horaInicio < horaFim) {
    alert("A partida teve: " + hora1 + " horas.");
} else if (horaInicio > horaFim) {
    alert("A partida teve: " + hora2 + " horas.");
}