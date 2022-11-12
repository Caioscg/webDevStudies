const pais = document.querySelector('header')
console.log(pais.parentElement) // body
console.log(pais.parentNode) //body

const filhos = document.querySelector('body')
console.log(filhos.childNodes) //text, header, text, script
console.log(filhos.children) //header, script

console.log(filhos.firstChild) //text
console.log(filhos.firstElementChild) //header

console.log(filhos.lastChild)  //script
console.log(filhos.lastElementChild) //script

const irmaos = document.querySelector('header')

console.log(irmaos.nextSibling) //text
console.log(irmaos.nextElementSibling) //script

const irmaos2 = document.querySelector('body script')
console.log(irmaos2.previousSibling) //text
console.log(irmaos2.previousElementSibling) //header