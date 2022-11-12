//h1 - evento adicionado pelo html / h2 - pelo JS
function print() {
    const element = document.querySelector('h1')
    element.style.color = "red" //se clicar fica vermelho 
    console.log('print') //a cada click ele printa +1
}

const h2 = document.querySelector('h2')
h2.addEventListener("mouseleave", print)

const input = document.querySelector('input')

input.onkeyup = function(event) {  //evento de teclado + tag event
    console.log("rodei")
    console.log(event.key)
    console.log(event.currentTarget.value)
}
