let list = [];
let option;

while (option != 3) {
  option = Number(
    prompt(`Olá usuário! Digite o número da opção desejada.

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa
`)
  );

  if (option == 1) {
    let item = prompt("Item:");
    list.push(item);
  } else if (option == 2) {
    if (list.length == 0) {
      alert("Não existe itens cadastrados");
    } else {
      alert(list);
    }
  } else{
    alert('Programa finalizado')
  }
}

