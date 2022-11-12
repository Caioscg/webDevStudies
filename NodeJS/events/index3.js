const { EventEmitter } = require('events')

const evento = new EventEmitter()

evento.once("say something", (message) => {   //once so ouve o primeiro evento
    console.log("eu ouvi você, ", message)
})

evento.emit("say something", "Caio")    // caio entra como argumento message na arrow function
evento.emit("say something", "João")
evento.emit("say something", "Camila")