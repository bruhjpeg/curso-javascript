let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10");

const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

while (Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:");
  xAttempts++;
}

if (xAttempts === 1) {
  alert(`Parabéns! Você adivinhou o número em ${xAttempts} tentativa`);
} else {
  alert(`Parabéns! Você adivinhou o número em ${xAttempts} tentativas`);
}
