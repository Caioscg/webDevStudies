class Parafuso {     // Abbstração, apenas informa como as classes futuras serão criadas
    constructor() {
        if (this.constructor === Parafuso)
            throw new Error('Classe abstrata não pode ser instânciada')
    }
    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() { super() }

    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() { super () }

    get tipo() {
        return 'philips'
    }
}

class Allen extends Parafuso {}

new Parafuso() // 'Classe abstrata não pode ser instânciada' -> tem que ter algum nome o parafuso
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)  // fenda philips
console.log(allen.tipo)  // 'Método "get tipo()" precisa ser implementado'