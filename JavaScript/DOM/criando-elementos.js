const div = document.createElement('div');
div.innerText = "Olá pessoal!"

const body = document.querySelector('body')
body.prepend(div) //adiciona antes dos outros elementos do body
body.append(div) //adiciona depois dos outros elementos do body

const script = body.querySelector('script')
body.insertBefore(div, script)  //adiciona o div antes do script

//truque para 'insertAfter' -que não existe
//quero adiciona o div depois do header
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)
//adc o div antes do prx irmao do header, ou seja, dps do header