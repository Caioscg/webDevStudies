const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
https.get(API, res => {
    console.log(res.statusCode)  // essa callback demora um pouco pra acontecer, pois tem q entrar no site antes
})
console.log('conectando API')  // aparece antes da callback