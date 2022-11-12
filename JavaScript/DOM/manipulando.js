const element = document.querySelector('h1')
element.textContent += " Olá Devs"

element.innerText = "hello"

element.innerHTML = "posso adicionar <small> elementos do html </small>"

console.log(element)

const valor = document.querySelector('input')
valor.value = "conteudo"

const header = document.querySelector('header')
header.setAttribute('id', 'heaDer')

const headerID = document.querySelector('#heaDer')
console.log(headerID.getAttribute('id'))  //heaDer

console.log(headerID.getAttribute('class')) //bg

header.removeAttribute('id')

header.setAttribute('class', 'bg header')

console.log(headerID.getAttribute('class')) // bg header

