// encadeamento de promessas:

import axios from 'axios'
axios
    .get('https://api.github.com/users/Caioscg')   
    .then(response => {
        const user = response.data

        return axios.get(response.data.repos_url)
    })
    .then(repos => console.log(repos.data))   // pega dentro do return
    .catch( error => console.log(error))


    // encadeamento de promessas , usando o promisse


import axios from 'axios'   // mesma coisa, outra sintaze
axios
    .get('https://api.github.com/users/Caioscg')   
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch( error => console.log(error))