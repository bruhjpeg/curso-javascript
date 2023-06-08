// variables

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const modalWrapper = document.querySelector(".modal-wrapper");
const modalMessage = document.querySelector(".modal .title span");
const modalBtnClose = document.querySelector(".modal .close");

// função criada e atribuída como valor:
// só vai ser executada quando eu clicar no botão de submit.
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  modalMessage.innerText = message;

  modalWrapper.classList.add("open");
};

// evento para quando clicar para fechar o popup

modalBtnClose.onclick = () => {
  modalWrapper.classList.remove("open");
};

// Cálculo do IMC
function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
