alert("Olá, bem vindo(a) ao nosso sistema para cálculo de médias bimestrais.");

let aluno = prompt("Digite seu nome completo");
let nota1 = prompt("Digite a primeira nota do seu bimestre");
let nota2 = prompt("Digite a segunda nota do seu bimestre");
let nota3 = prompt("Digite a terceira nota do seu bimestre");

let n1 = Number(nota1);
let n2 = Number(nota2);
let n3 = Number(nota3);

let media = (n1 + n2 + n3) / 3;
// ou
// let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3

media = media.toFixed(2)

const aprovado = `Parabéns ${aluno}! sua média é: ${media}  e você está aprovado(a)!`;

const reprovado = `Infelizmente ${aluno} foi reprovado(a) pois sua média é ${media}  boa recuperação!`;

result();

function result() {
  if (media >= 6) {
    alert(`${aprovado}`);
  } else {
    alert(`${reprovado}`);
  }
}
