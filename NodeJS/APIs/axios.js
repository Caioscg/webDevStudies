const express = require('express');
const axios = require('axios');

const app = express()

app.listen('3000')  //TODO: colocar localhost:3000 no navegador


app.route("/").get( (req, res) => {
    axios.get('https://api.github.com/users/Caioscg')      //* avatar_url é a imagem de perfil da api do github
        .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))  // recebo a imagem no insomnia
        .catch(error => console.log(error))
})