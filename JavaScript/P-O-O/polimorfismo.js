class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso = peso
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = 'infantil'
        }
        else if (this.peso <= 65) {
            this.categoria = 'juvenil'
        }
        else {
            this.categoria = 'adulto'
        }
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso)  // so pega o atributo peso, nao pega a categoria
    }

    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = 'pluma'
        }
        else if (this.peso <= 60) {
            this.categoria = 'leve'
        }
        else {
            this.categoria = 'pesado'
        }
    }
}

let Atleta1 = new Atleta()
Atleta1.peso = 60
Atleta1.definirCategoria()   // calcula a categoria
console.log(Atleta1.categoria)


let Lutador1 = new Lutador()
Lutador1.peso = 60
Lutador1.definirCategoria()
console.log(Lutador1.categoria)