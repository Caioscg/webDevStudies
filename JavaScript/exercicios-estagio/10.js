function shuffleMusicas(musicasTocadas) {
	let maior = -1, maiorAtual = -1
	let posicaoMaior, posicaoMenor
	let menor = 1000, menorAtual = 1000
	let i = 0, k, j
	let intercalado = []
	while (i < musicasTocadas.length) {
		maiorAtual = 0
		menorAtual = 1000
		for (k = 0; k < musicasTocadas.length; k++) {
			if (musicasTocadas[k] > maiorAtual && k !== posicaoMaior) {
				maiorAtual = musicasTocadas[k]
				maior = k
			}
		}
		posicaoMaior = maior
		intercalado.push(maiorAtual)
		delete musicasTocadas[maior]
		i++
		if (intercalado.length === musicasTocadas.length) break
		for (j = 0; j < musicasTocadas.length; j++) {
			if (musicasTocadas[j] < menorAtual && j !== posicaoMenor) {
				menorAtual = musicasTocadas[j]
				menor = j
			}
		}
		posicaoMenor = menor
		intercalado.push(menorAtual)
		delete musicasTocadas[menor]
		i++
		if (intercalado.length === musicasTocadas.length) break
	}
	return intercalado
}
console.log(shuffleMusicas([2,10,5,3]))