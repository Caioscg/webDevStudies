// Função impura

// Exemplo 1: está dependendo de dado externo
// que nao foi passado como parâmetro (Math.PI)
function calculateCircumference(radius) {
    return Math.PI * (radius + radius)
}

// Exemplo 2: está alterando um dado externo
let person = {
    name: 'Caio Gonzaga',
    age: 'jovem'
}

function changeName(name) {
    person.name = name
}

// Função pura

// Exemplo 1:
const calculateCircumference = function (pi, radius) {
    return pi * (radius * radius)
}

// com arrow function:
const calculateCircumference = (pi, radius) =>
    pi * (radius + radius)

// Exemplo 2:
const changeName = (person, name) =>
    ({...person, name})   // pega as caracteristicas de person e muda so o name