var horasMes = parseFloat(prompt("Digite quantas horas foram trabalhadas no mês: "));
var salarioHora = parseFloat(prompt("Digite seu salário por hora: "));
var salarioMes = salarioHora * horasMes;

if (horasMes > 40) {
    var reajuste = horasMes - 40;
    var reajuste1 = (reajuste * salarioHora) / 2;
    alert("O salário com acrescimo de horas extras é de: R$" + (salarioMes + reajuste1));
} else {
    alert("O salário do funcionário é de: R$" + salarioMes);
}