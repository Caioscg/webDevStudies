const path = require('path') // path é um modulo

console.log(path.basename(__filename))

console.log(require('./exports'))   // "enviando meu módulo"
