const { EventEmitter } = require('events')

const evento = new EventEmitter()

evento.on("say something", () => console.log('eu ouvi você')) // ouve o 1 argumento e executa o 2
    
evento.emit("say something")

