var maca = +(prompt("Digite quantas maças deseja comprar: "));
if (maca < 12) {
    alert("comprando " + maca + " maçãs, você gastará R$1,30 em cada. O valor de sua compra será: R$" + maca * 1.30 + ",00.");
} else {
    alert("comprando " + maca + " maçãs, você gastará R$1,00 em cada. O valor de sua compra será: R$" + maca * 1.0 + ",00.");
}