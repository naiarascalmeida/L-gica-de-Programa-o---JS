var grausC = 10;

var texto = "";

for (grausC; grausC <= 200; grausC++) {
    if (grausC % 10 == 0) {
        var grausF = (9 * grausC + 260) / 5;
        texto += grausC + "° Celsius, equivalem a " + grausF + "° Fahrenheit. <br>";
    }
}
document.getElementById("teste").innerHTML = texto;