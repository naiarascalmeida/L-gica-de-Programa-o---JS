var salario_fixo = parseFloat(prompt("Digite o valor do seu salário fixo: R$"));
var valor_tot_vendas = parseFloat(prompt("Digite o valor total das vendas do funcionário: R$"));
var comis_carro = parseFloat(prompt("Digite a comissão por carro vendido: R$"));
var tot_carro = parseInt(prompt("Digite quantos carros o funcionário vendeu: R$"));
var comis1 = tot_carro * comis_carro;
var comis2 = valor_tot_vendas * 5 / 100;
var salario_total = salario_fixo + comis1 + comis2;

alert("Considerando que seu salário fixo foi de: R$" + salario_fixo + ",00. Tendo como valor total de vendas o valor de R$" + valor_tot_vendas + ",00 e deste receberá 5%, ou seja: R$ " + comis2 + ",00. Também lembrando que vendendo " + tot_carro + " carros com uma comissão de R$" + comis_carro + ",00 por carro vendido. Seu salário do mês será de: R$" + salario_total + ",00.");