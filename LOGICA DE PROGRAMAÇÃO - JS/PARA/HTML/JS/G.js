var texto = "";
var potencia = 1;

for (let expoente = 0; expoente <= 30; expoente++) {
    texto += "<br>" + "3 elevado ao expoente: " + expoente + " = " + potencia + ".";
    potencia = potencia * 4;
}
document.getElementById("teste").innerHTML = texto;