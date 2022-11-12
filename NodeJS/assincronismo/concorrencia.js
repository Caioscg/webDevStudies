import axios from 'axios'

    // agrupamento de promessas acontecendo ao mesmo tempo

Promise.all([
    axios.get("https://api.github.com/users/Caioscg"),
    axios.get("https://api.github.com/users/Caioscg/repos")   // quero que os 2 execute juntos
])
.then( responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
})
.catch( erro => console.log(erro))