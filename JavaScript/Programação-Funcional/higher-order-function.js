// Exemplo com .map() JS
const numbers = [2, 4, 8, 16]

const square = n => n * n

const squaredNumber = numbers.map(square)
console.log(squaredNumber)  // [4, 16, 64, 256]

// Exemplo de um retorno de função (currying)
const pause = wait => fn => setTimeout(fn, wait)
// função que retorna uma função que retorna outra função que tem uma função como parametro

pause(1000)( () => console.log('waiting 1s')) // depois de 1s executa o console.log (fn)

const wait200 = pause(200)
const wait2000 = pause(2000)

wait200(() => console.log('waiting 200ms'))  // dps de 200ms
wait2000(() => console.log('waiting 2s'))   // dps de 2s

