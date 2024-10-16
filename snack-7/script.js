const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];


//for each
let student2
students.forEach((movie) => {
  if (movie.id === 2) {
    student2 = movie
  }
})

console.log(student2);


//find
const studentId2 = students.find((movie) => movie.id === 2)
console.log(studentId2);




// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }