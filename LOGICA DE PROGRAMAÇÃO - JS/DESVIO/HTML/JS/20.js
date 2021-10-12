var estoqueAtual = parseInt(prompt("Digite a quantidade de estoque atual: "));
var minEstoque = parseInt(prompt("Digite a quantidade mínima se ter no estoque: "));
var maxEstoque = parseInt(prompt("Digite a quantidade máxima a se ter no estoque: "));
var quantMedia = (minEstoque + maxEstoque) / 2;

if (estoqueAtual >= quantMedia) {
    alert("Não efetuar a compra de mais produto!");
} else {
    alert("Efetuar compra do produto!");
}