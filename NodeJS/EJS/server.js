const express = require('express')
const app = express()

app.set("view engine", "ejs")   // estou falando que a ferramenta p/ renderizar html é o ejs

app.get("/", function(req, res) {    // criando uma rota  - a barra('/') sozinha significa o site na essência -> página Home
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ]         // escrevendo essas coisas aqui, estou escrevendo direto no back-end o que vai aparecer na aba Home

    const subtitle = "Uma linguagem de modelagem para criação de página HTML em JS"
    res.render("pages/home", { // a resposta é renderizar o index (o site) -- espera que o index esteja dentro de uma pasta views(sempre tem q ter a pasta views)
        qualities: items,   // assim ao usar o qualities no index eu passo toda a mensagem acima para a página Home
        subtitle: subtitle  // são os elementos q estão dentro do res.render que eu chamo no ejs  
    }) 
})

app.get("/sobre", function(req, res) { // quando eu colocar o site.com/sobre vai renderizar o arquivo about -> página About
    const about = "Este é o meu primeiro teste criando com EJS"
    res.render("pages/about", {
        about: about
    })
})

app.listen(8080)   // quando chamar a porta 8080 vai executar tudo que está aqui (localhost:8080)
                   // para o localhost:8080 dar certo tem q estar rodando o arquivo no terminal
console.log("Rodando")