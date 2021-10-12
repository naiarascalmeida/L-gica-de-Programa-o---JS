var numero = +(prompt("Digite um número: "));
var numero1 = +(prompt("Digite outro número: "));
var operacao = (prompt("Você quer soma, dividir, mult ou subtrair? "))
var div;
var soma;
var sub;


if (operacao == "subtrair") {
    sub = numero - numero1;
    alert("A subtração dos dois valores será: " + sub);
} else if (operacao == "soma") {

    soma = numero + numero1;
    alert("A soma dos dois valores será: " + soma);
} else if (operacao == "dividir") {
    div = numero / numero1;
    alert("A divisão dos dois valores será: " + div);
} else if (operacao == "mult") {
    mult = numero * numero1;
    alert("A multiplicação dos dos valores será: " + mult);
} else {
    alert("Operação invalida ou não identificada.");
}