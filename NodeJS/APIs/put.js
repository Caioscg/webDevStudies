//TODO:   crar o server no terminal (node put.js) e ver a atualização no Insomnia (atualizar no json)
const express = require('express')

const app = express()

app.listen('3000')  //TODO: colocar localhost:3000 no navegador

//middleware
app.use(express.json())

let author = "Caio"

app.route("/").get((req, res) => res.send(author)) //! para ver o author antigo

app.route("/").put( (req, res) => {
    author = req.body.author
    res.send(author)
})

console.log("rodando")
