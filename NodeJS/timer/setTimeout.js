const timeOut = 3000 // 3000 milissegundos = 3s
const finished = () => { console.log("done!") }

setTimeout(finished, timeOut) // após 3s executa o finished  - poderia tmb colocar a função e o timer dentro do setTimeout
console.log("Mostrar")