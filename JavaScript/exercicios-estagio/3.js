function calculaNumeroDaSenha(senha) {
    let i = 0
    let j = 0
    let contador = 0
    let binarioFinal = []
    let aux
    let resposta = 0
    for (j=0; j<=9; j++) {
      for (i = 0; i<=9; i++) {
        aux = Array.from(senha[i])
        if (aux[j] === "1") contador++ 
      }
      if (contador >=5) {
        binarioFinal.push(1)
      }
      else binarioFinal.push(0)
      contador = 0
    }
    console.log(binarioFinal)
    for (i = 0; i< binarioFinal.length; i++) {
      resposta += binarioFinal[i]*Math.pow(2, binarioFinal.length-i-1)
    }
    return resposta
  }
  console.log(calculaNumeroDaSenha(["0110100000","1001011111","1110001010","0111010101","0011100110","1010011001","1101100100","1011010100","1001100111","1000011000"]))