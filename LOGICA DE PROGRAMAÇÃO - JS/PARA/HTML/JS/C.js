var texto = "";
var somatorio = 0;

for (let cont = 1; cont <= 50; cont++) {
    somatorio += cont;
}
document.getElementById("teste").innerHTML = somatorio;