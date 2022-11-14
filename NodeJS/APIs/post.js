//TODO:   crar o server no terminal (node post.js) e ver a informação no Insomnia (criar no json)
const express = require('express')

const app = express()

app.listen('3000')  //TODO: colocar localhost:3000 no navegador


//*  middleware (conteúdo da requisição)
app.use(express.json())   //*  transforma em json

app.route("/").post( (req, res) => res.send(req.body))
