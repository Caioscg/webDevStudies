const element = document.querySelector('body')

element.classList.add('vermelho', 'verde') //adc os styles
console.log(element.classList)
element.classList.remove('vermelho') //remove o vermelho
element.classList.toggle('vermelho')
/* o toggle funciona como uma interrupitor - se estiver desligado
liga , se nao desliga */