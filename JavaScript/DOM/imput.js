//getElementById() -> element

const element = document.getElementById('blog-title')
console.log(element)


//getElementByClassName() -> HTML collection

const elemento = document.getElementsByClassName('one')
console.log(elemento)


//getElementByTagName() -> HTML colection

const X = document.getElementsByTagName("meta")
console.log(X)


//querySelector() -> element

const Y = document.querySelector('div')
console.log(Y)


//querySelectorAll() -> NodeList

const elements = document.querySelectorAll('.one')
console.log(elements)

elements.forEach(el => console.log(el))