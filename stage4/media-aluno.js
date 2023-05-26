alert("Olá, bem vindo(a) ao nosso sistema para cálculo de médias bimestrais.");

let aluno = prompt("Digite seu nome completo");
let nota1 = prompt("Digite a primeira nota do seu bimestre");
let nota2 = prompt("Digite a segunda nota do seu bimestre");
let nota3 = prompt("Digite a terceira nota do seu bimestre");

let media = Number((nota1 + nota2 + nota3) / 3);

calculate();

function calculate() {
  if (media >= 6) {
    alert(`${aprovado}`);
  } else {
    alert(`${reprovado}`);
  }
  return calculate;
}

const aprovado = alert(
  `Parabéns ${aluno}! sua média é: ${media} . E você está aprovado.`
);

const reprovado = alert(
  `Infelizmente ${aluno} foi reprovado(a) pois sua média foi ${media}. Boa recuperação!`
);
