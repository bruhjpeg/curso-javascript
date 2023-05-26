alert("Bem vindo(a) a sua calculadora de soma de números!");

let n1 = Number(prompt("Digite um número"));
let n2 = Number(prompt("Digite outro número"));

let resultado = Number(n1 + n2);

alert(`A soma de ${n1} com ${n2} é: ${resultado}`);

let avaliaçao = prompt("Diga-nos se ficou satisfeito com nossa aplicação:");

console.log(avaliaçao);

avalia();

function avalia() {
  if (avaliaçao === "amei", 'adorei', 'gostei') {
    console.log("o cliente gostou dos nossos serviços.");
    alert("Ficamos felizes com sua satisfação!");
  } else {
    console.log("o cliente não gostou, precisamos melhorar!");
    alert(
      "Vamos fazer o possível para melhorar nossa aplicação. Obrigada pelo feedback!"
    );
  }
}
