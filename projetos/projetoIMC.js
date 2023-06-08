// variables

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// variáveis que excluimos.
// const modalWrapper = document.querySelector(".modal-wrapper");
// const modalMessage = document.querySelector(".modal .title span");
// const modalBtnClose = document.querySelector(".modal .close");

// Estrutura de dados com as responsabilidades separadas.
// objeto que vai orquestrar:

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal .close"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

// função criada e atribuída como valor:
// só vai ser executada quando eu clicar no botão de submit.
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

// evento para quando clicar para fechar o popup

Modal.buttonClose.onclick = () => {
  Modal.close();
};

// Cálculo do IMC
function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
