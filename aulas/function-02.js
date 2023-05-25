//funções dentro de variáveis

//função anônima porque não tem um nome
//function expression or function anonymous

// parâmetros (parameters)
// dentro dos parênteses
let total = 0

const sum = function (n1, n2) {
  let total = n1 + n2
  return total
}

let n1 = 34
let n2 = 25

console.log(`O número 1 é ${n1}`)
console.log(`O número 2 é ${n2}`)
console.log(`a soma é ${sum(n1, n2)}`)
