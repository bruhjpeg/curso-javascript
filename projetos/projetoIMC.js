// variables

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("height");

// função criada e atribuída como valor:
// só vai ser executada quando eu clicar no botão de submit.
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
};
