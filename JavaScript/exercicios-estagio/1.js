function ultimaParada(combustivel, consumo, postosDeGasolina) {
    let postoMaior = 0
    let postoAtual
    let contador = 0
    while (contador <= postosDeGasolina.length) {
      postoAtual = postosDeGasolina[contador]
      if (postoAtual <= combustivel * consumo) {
        if (postoAtual > postoMaior) {
          postoMaior = postoAtual
        }
      }
      contador++
    }
    if (postoMaior === 0) return -1
    else return postoMaior
  }
  console.log(ultimaParada(2,8,[2,15,22,11]))