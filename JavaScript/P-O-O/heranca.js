// HERANÇA //
class Veiculo {
    rodas = 4;

    mover(direcao) {}
    virar (direcao) {}
}
class Moto extends Veiculo {  // sintaxe extends para informar a herança
    constructor() {
        super() // puxar atributos e métodos do 'pai' -> Veiculo
        this.rodas = 2   // variavel rodas herdada de Veiculo
    }
}