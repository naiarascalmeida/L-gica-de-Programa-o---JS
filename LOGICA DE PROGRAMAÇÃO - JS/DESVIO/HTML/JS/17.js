var nome = (prompt("Escreva seu nome: "));
var altura = +(prompt("Escreva sua altura: "));
var sexo = (prompt("Escreva seu sexo: [M] ou [F]"));

if (sexo == "M") {
    var pesoIdeal = (72.7 * altura) - 58;
    alert("O seu peso ideal sendo do sexo masculino é: " + pesoIdeal);
} else if (sexo == "F") {
    var pesoIdeal = (62.1 * altura) - 44.7;
    alert("O seu peso ideal sendo do sexo feminino é: " + pesoIdeal);
}