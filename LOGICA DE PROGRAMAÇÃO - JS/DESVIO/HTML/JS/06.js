var temp_f = parseFloat(prompt("Digite a temperatura em graus Fahrenheit: "));
let temp_c = ((temp_f - 32) * 5) / 9;

alert("A temperatura em graus Fahrenheit sendo: " + temp_f.toFixed(2) + "°, será em Celsius: " + temp_c.toFixed(2) + "°.");