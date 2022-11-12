const people = ["Rafa", "Diego", "Dani", "Rod"]
const upperCasePeopleThatStartsWithD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase())
// filter, startsWith, map e toUpperCase são funções JS

console.log(upperCasePeopleThatStartsWithD) // ["DIEGO", "DANI"]