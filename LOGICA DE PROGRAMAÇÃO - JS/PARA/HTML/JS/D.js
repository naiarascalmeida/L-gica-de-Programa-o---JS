var somatorio = 0;
var pares = 0;
var texto = "";

for (let cont = 1; cont <= 300; cont++) {
    if (cont % 2 == 0) {
        texto += cont + "... ";
        somatorio += cont;
        texto2 = "a somatória dos números pares de 1 á 300 é: " + somatorio + ".";
    }
}
document.getElementById("teste").innerHTML = texto;
document.getElementById("teste1").innerHTML = texto2;