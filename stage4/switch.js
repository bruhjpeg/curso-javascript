let list = [];

let option;

while (option != 3) {
  option = Number(
    prompt(`Olá, digite um número:
  
1. Cadastrar um item na lista;
2. Mostrar itens cadastrados;
3. Sair do programa;
`)
  );

  switch (option) {
    case 1:
      let item = prompt("Item:");
      list.push(item);
      break;

    case 2:
      if (list.length == 0) {
        alert("Não existe itens cadastrados!");
      } else {
        alert(list);
      }
      break;
    case 3:
      alert("Programa finalizado!");
      break;

    default:
      alert("Opção inválida. Tente novamente");
  }
}
