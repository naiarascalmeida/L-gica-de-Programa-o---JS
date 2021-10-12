var AV1 = +(prompt("Digite a primeira avaliação do aluno(a): "));
var AV2 = +(prompt("Digite a segunda avaliação do aluno(a): "));
var media = (AV1 + AV2) / 2;

if (media >= 6) {
    alert("A média do aluno(a) foi: " + media + ". Logo, foi APROVADO(A).");
} else {
    alert("A média do aluno(a) foi: " + media + ". Logo, foi REPROVADO(A).");
}