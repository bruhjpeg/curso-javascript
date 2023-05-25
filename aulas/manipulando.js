//Manipulando Strings e Números

//Transformando letras minúsculas em maiúsculas e vice e versa

//toUpperCase() or toLowerCase()
// let word = 'Programar é muito bacana!'
// console.log(word.toLowerCase())
//------------------------------------------------------------

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

// let phrase = 'Eu quero viver o amor!'
// let myArray = phrase.split(' ')
// let outraVariável = myArray.join('-')
// console.log(outraVariável)
//---------------------------------------------------------

//Verificar se o texto contém a palavra Amor

// let phrase = 'Eu quero viver o amor!'
// console.log(phrase.includes('amor'))
//---------------------------------------------------------

//Manipulando Arrays

//Criar Array com construtor

// let myArray = ['a', 'b', 'c']
// console.log(myArray)

//criar o mesmo array com construtor (NEW) sempre lembrar

// let myArray = new Array('a', 'b', 'c')

// let myArray = new Array(10)
//criará um array com 10 posições vazias
//------------------------------------------------------

//Contar elementos de um array

// console.log(['a', //string
// {type: 'array'}, //object
// function() {return 'alo'}, //function
// ].length)

//também podemos usar o length para contar os elementos

//---------------------------------------------------------------

//transformando uma cadeia de caracteres em elementos de um array

// let word = 'Bruna'
// console.log(Array.from(word))

//------------------------------------------------------------

// let tecnology = ['html', 'css', 'js']

// // adicionar um item no fim do array
// tecnology.push('nodejs')
// //-------------------------------------
// // adicionar item no começo do array
// tecnology.unshift('sql')
// //-------------------------------------
//remover item do fim do array
// tecnology.pop()
//-------------------------------------
//remover item do começo do array
// tecnology.shift()
//-------------------------------------
// pegar somente alguns elementos dos array
// console.log(tecnology.slice(1,3))
//-------------------------------------
//remover 1 ou mais items em qualquer posição do array
  // tecnology.splice(0, 1)
//-------------------------------------
//encontrar a posição de um elemento no array

// let positionArray = tecnology.indexOf('sql')
// console.log(positionArray)
// tecnology.splice(positionArray, 1)
// console.log(tecnology)




 







