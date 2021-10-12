var anoAtual = +(prompt("Digite o ano atual: "));
var anoNasc = +(prompt("Digite seu ano de nascimento: "));
var idade = anoAtual - anoNasc;

if (idade >= 16) {
    alert("Considerando a idade de 16 anos. Você agora com " + idade + " anos, poderá votar este ano!");
} else {
    alert("Considerando a idade de 16 anos. Você agora com " + idade + " anos, não poderá votar este ano!");
}