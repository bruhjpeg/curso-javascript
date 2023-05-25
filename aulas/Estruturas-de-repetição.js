// for (let age = 10; age > 0; age--) {
//   if (age === 5) {
//     break;
//     continue
//   }
//   console.log(age);
// }

// let age = 37373484387;
// while (age >= 10) {
//   console.log(age);
//   age /= 50;
// }

// let name = "Bruna";
// let names = ["Camille, Luciane, Luciano"];

// for (let nomes of names) {
//     console.log(nomes)
// }

let person = {
  name: "Bruna",
  age: 23,
  profission: "Programmer",
  live: "Brazil",
};

for (let pessoa in person) {
  console.log(pessoa);
  console.log(person[pessoa])
}
