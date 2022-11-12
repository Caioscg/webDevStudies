//função que transforma notas de numeros em letras
function getScore (nota) {
    let A = nota >= 90 && nota <= 100
    let B = nota >= 80 && nota <= 89
    let C = nota >= 70 && nota <= 79
    let D = nota >= 60 && nota <= 69
    let F = nota < 60 && nota >= 0
    let notaFinal

    if (A) {
        notaFinal = "A"
    }
    else if (B) {
        notaFinal = "B"
    }
    else if (C) {
        notaFinal = "C"
    }
    else if (D) {
        notaFinal = "D"
    }
    else if (F) {
        notaFinal = "F"
    } 
    else notaFinal=("Nota inválida")

    return notaFinal
}

console.log(getScore(0))
console.log(getScore(-1))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(55))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(100))
console.log(getScore(101))
