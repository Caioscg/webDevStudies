// Orientado a Objetos
class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {            // uso da '#' p/ essa função nao ser funcional fora da class
        return this.altura * this.largura
    }
}

let poligono = new Poligono(50, 30)
console.log(poligono)     // altura: 50, largura: 30
console.log(poligono.area) // 1500

// Estrural - sem Orientado a objetos

let A = 50
let L = 30
function calcularArea() {
    return A * L
}
let area = calcularArea()
console.log(area) // 1500