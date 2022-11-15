const express = require('express')

const app = express()

app.listen('3000')  //TODO: colocar localhost:3000 no navegador


//*  rota - metodo - requisição/resposta
app.route("/").get( (req, res) => res.send("hello") )
app.route("/sobre").get( (req, res) => res.send("hello sobre"))
app.route("/").get( (req, res) => res.send(req.body) )

console.log('rodando')