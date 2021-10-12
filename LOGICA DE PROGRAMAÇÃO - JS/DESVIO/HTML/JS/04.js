var custo_fabrica = parseFloat(prompt("Digite o valor de fabricação do carro: R$"));
var perc_distribuidor = custo_fabrica * 28 / 100;
var perc_impostos = custo_fabrica * 45 / 100;
var valor_final = custo_fabrica + perc_distribuidor + perc_impostos;

alert("Considerando o valor de fabrica sendo: R$" + custo_fabrica + ",00. O percentual do distribuidor sendo 28% será de: R$" + perc_distribuidor + ",00. O percentural de impostos sendo 45% será de: R$" + perc_impostos + ",00. Logo, o valor total do carro será de: R$" + valor_final + ",00.");