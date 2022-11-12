const { randomUUID } = require("crypto")

const sayMyName = () => console.log('Caio')
const runFunction = fn => fn()  // função que recebe uma função como parametro e a executa

runFunction(sayMyName)
runFunction(() => console.log('Freedom'))

console.log(runFunction(Math.random))