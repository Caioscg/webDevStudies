let vetor = [1, "caio", true, 2, 3, fallen = {nome: "Gabriel", idade: 33}, 4]
vetor.pop()
console.log(vetor) // 1, "caio", true, 2, 3, fallen = {nome: "Gabriel", idade: 33}
vetor.push("quatro")
console.log(vetor) // 1, "caio", true, 2, 3, fallen = {nome: "Gabriel", idade: 33}, "quatro"

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6); // todas palavras com mais de 6 letras
console.log(result); //['exuberant', 'destruction', 'present'];

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10); // só o primeiro elemento maior que 12
console.log(found);  // 12

const pilotos = ["Verstappen", "Hamilton", "Senna", "Perez"]
const senna = pilotos.find(piloto => piloto === "Senna")
console.log(senna)  // 'Senna'