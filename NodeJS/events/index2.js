const { EventEmitter } = require('events')

const evento = new EventEmitter()

evento.on("say something", (message) => {      // ouve o 1 argumento e executa o 2
    console.log("eu ouvi você, ", message)
})

evento.emit("say something", "Caio")    // caio entra como argumento message na arrow function
evento.emit("say something", "João")
evento.emit("say something", "Camila")