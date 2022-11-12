function calculaPorcentagemSorteio(assinante,minutosAssistidos) {
	let i
	let totalHoras = 0
    let horas = []
	let chance =  []
    let resposta = []
	for (i = 0; i < assinante.length; i++) {
		horas[i] = minutosAssistidos[i]/60
        if (horas[i]%1 != 0) horas[i] = Math.ceil(horas[i])
		if (assinante[i] === true)  horas[i] *= 2
        totalHoras += horas[i]
	}
	if (totalHoras%1 != 0) totalHoras = Math.ceil(totalHoras)
	for (i = 0; i < assinante.length; i++) {
		chance[i] = (horas[i]*100)/totalHoras
		if (chance[i]%1 != 0) {
			resposta[i] = Math.round(chance[i])
		}
        else resposta[i] = chance[i]

	}
	return resposta
}
console.log(calculaPorcentagemSorteio([true,false],[60,120]))