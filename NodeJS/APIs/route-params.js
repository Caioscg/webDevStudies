const express = require('express')

const app = express()

app.listen('3000')  //TODO: colocar localhost:3000 no navegador


app.route("/:variavel").get( (req, res) => res.send(req.params.variavel) )  //* o que o usuario escrever dps do / aparece na tela

app.route("/identidade/:nome").get( (req, res) => res.send(req.params.nome))  //* o nome que escrever dps do /identidade aparece
