const patients = [
  {
    nome: "Bruna",
    idade: 23,
    peso: 65.2,
    altura: 1.66,
  },

  {
    nome: "Ecton",
    idade: 27,
    peso: 58.2,
    altura: 1.67,
  },

  {
    nome: "Camille",
    idade: 19,
    peso: 54.2,
    altura: 1.6,
  },
];


// loop para conseguir ver a lista dos pacientes.

//variável de controle:
//array vazio
let patientsName = []
let patientsAge = []
let patientsWeight = []
let patientHeight = []

for(let patient of patients){
   patientsName.push(patient.nome)
   patientsAge.push(patient.idade)
   patientsWeight.push(patient.peso)
   patientHeight.push(patient.altura)
} 

alert(`O (a) paciente ${patientsName[0]}, tem ${patientsAge[0]} anos, pesa ${patientsWeight[0]} e tem ${patientHeight[0]} de altura.`)