function checaNumeroEscondido(numero,numeroOculto) {
	let auxNumero = []
    let auxNumeroOculto = []
    let lengthN
    let lengthNO
    let diferenca
    let i, j, contador = 0
    auxNumero = Array.from(String(numero))
    auxNumeroOculto = Array.from(String(numeroOculto))
    lengthN = auxNumero.length
    lengthNO = auxNumeroOculto.length
    diferenca = lengthN - lengthNO
    for (i = 0; i < lengthN; i++) {
        for (j = 0; j <= i; j++) {
            if (auxNumero[i] === auxNumeroOculto[j]) {
                contador++
                break
            }
        }
    }
    if (contador === lengthNO) return true
    else return false
}
console.log(checaNumeroEscondido(12345,235))