const timeOut = 3000 // 3000 milissegundos = 3s
const finished = () => console.log("done!")


let timer = setTimeout(finished, timeOut) // após 3s executa o finished
console.log("Mostrar")
clearTimeout(timer)  // cancela o timer