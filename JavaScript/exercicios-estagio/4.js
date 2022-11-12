function calculaTopOcorrenciasDeQueries(texto,queries,k) {
    let i
    let j
    let casos
    let contador = []
    let contador2 = []
    let count = 0
    let resposta = []
    for (i = 0; i < queries.length; i++) {
        contador[i] = 0 
        casos = 0
        for (contador[i] = 0; casos != -1; contador[i]++) {
            casos = texto.indexOf(queries[i], casos + 1)
        }
        contador[i]--
        
        for (j=0; j< queries.length; j++) {
            if (contador[i] === contador[j] && i != j) {
                if (texto.indexOf(queries[i] < texto.indexOf(queries[j]))) {
                    contador[i]--
                }
                else contador[j]--
            }
        }
      
    }
    for (i = 0; i < queries.length; i++) {
        for (j = 0; j < queries.length; j++) {
            if (contador[i] >= contador [j]) count++;
        }
        contador2[queries.length - count] = queries[i]
        count = 0
    }
    for (i = 0; i < k; i++) {
        resposta[i] = contador2[i]
    }
    return resposta
  }
  console.log(calculaTopOcorrenciasDeQueries("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",["a","em","i","el"],2))