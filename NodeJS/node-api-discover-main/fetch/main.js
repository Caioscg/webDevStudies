//TODO: entrar na pasta node-api/node-api e dar um npm start
const  url = "http://localhost:5500/api"

function getUsers() {    // all users (GET)
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))  //* para o html mostrar a estrutura de objetos
        .catch(error => console.error(error))
}

function getUser(id) {   // just one (GET)
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

function addUser() {  // (POST)
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300", //random photo
    city: "Rio do Sul"
}

function updateUser(updatedUser, id) {  // (PUT)
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

const updatedUser = {
    name: "Mayk Brito",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}

function deleteUser(id) {  // (detele)
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

updateUser(updatedUser, 9)

//addUser(newUser)

deleteUser(5)  //! pra excluir tenho que //comentar o chamada da função addUser

getUser(9)

getUsers()