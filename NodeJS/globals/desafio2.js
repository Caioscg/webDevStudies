const função = require('./desafio1')
const name = função('--name')
const greeting = função('--greeting')
console.log(`Olá ${name} ${greeting} ?`)
// node desafio2 --greeting "tudo bem com você" --name "Caio Gonzaga"  -> esse é o terminal