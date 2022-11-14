//TODO:   crar o server no terminal (node delete.js) e ver no Insomnia (colocar dps do localhost)
const express = require('express')

const app = express()

app.listen('3000')  //TODO: colocar localhost:3000 no navegador


        //* recebe um conteúdo no lugar do identificador
app.route("/:identificador").delete((req,res) => {
    res.send(req.params.identificador)   //TODO: o que você colocar depois do localhost:3000 é pegado aqui
})

console.log('rodando')