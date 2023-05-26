let lista = [];

for (let item = 0; item < 10; item++) {
  let items = prompt("Digite o item " + (item + 1));

 lista[item] = items
}

alert(`Sua lista é: ${lista}`)
