function retornaMenorEMaiorValorDeVendas(tickets) {
    let menor = 1000
    let maior = 0
    let atual
    let i = 0
    let j = 0
    while (i < tickets.length) {
      while (j < tickets[i].length) {
        atual = tickets[i][j]
        if (atual < menor && atual >= 20) menor = atual
        if (atual > maior && atual <= 500) maior = atual
        j++
      }
      j = 0
      i++
    }
    return [menor, maior]
  }
  console.log(retornaMenorEMaiorValorDeVendas([[40,50, 400],[300, 150, 29]]))