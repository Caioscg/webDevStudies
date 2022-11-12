/* 
    o process traz um lista de argumentos, entre eles o argv.
    o argv é um array em que cada posição é uma palavra digitada pelo usuário
    assim, ao executar esse exc, o process.argv[0]=node e process.argv[1]=process.js
    qualquer coisa q o usuário digitar depois disso ocupará uma nova posição na array
    exc: colocar seu nome e sobrenome:
*/
const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome é ${firstName} ${lastName}.`)
// na execução colocar node process Caio Gonzaga

