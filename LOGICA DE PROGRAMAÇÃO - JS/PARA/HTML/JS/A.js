var texto = "";
var quadrado = 0;

for (let cont = 10; cont <= 100; cont++) {
    quadrado = cont ** 2;
    texto += "<br>" + cont + "² = " + quadrado;
}
document.getElementById("teste").innerHTML = texto;