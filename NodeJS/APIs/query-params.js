const express = require('express')

const app = express()

app.listen('3000')  //TODO: colocar localhost:3000 no navegador


app.route("/").get( (req, res) => res.send(req.query) )

//! colocar localhost:3000/?nome=Caio Gonzaga (posso intercalar infos com o &. ex.: ?nome=Caio&cidade=Goiânia)
//? expected output:  "nome": "Caio Gonzaga"