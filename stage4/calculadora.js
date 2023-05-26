let result;

alert("Olá, escolha dois números!");
let number1 = Number(prompt("Escolha um número"));
let number2 = Number(prompt("Escolha outro número"));

alert("Agora, escolha o operador");

let operator = prompt("+, -, *, /, %");

calculate();

function calculate() {
  switch (operator) {
    case "+":
      result = number1 + number2;
      alert(`A soma de ${number1} com ${number2} é: ${result}`);
      break;
    case "-":
      result = number1 - number2;
      alert(`A subtração de ${number1} por ${number2} é:${result}`);
      break;
    case "*":
      result = number1 * number2;
      alert(`A multiplicação de ${number1} com ${number2} é: ${result}`);
      break;
    case "/":
      result = number1 / number2;
      alert(`A divisão de ${number1} por ${number2} é: ${result}`);
      break;
    case "%":
      result = number1 % number2;
      alert(`O resto da divisão entre ${number1} com ${number2} é: ${result}`);
      break;
    default:
      alert("Não encontrado no sistema.");
  }
}

alert("Gostou da nossa calculadora? Deixe seu Feedback! Obrigada.");

let avaliaçao = prompt("Feedback:");

avalia();

function avalia() {
  if (avaliaçao == "adorei") {
    alert("Ficamos felizes com seu feedback");
  } else {
    alert("Obrigada pelo deu feedback, iremos melhorar!");
    console.log("Melhorias a fazer na aplicação");
  }
}
 