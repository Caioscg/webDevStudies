function menorStringMaior(name) {
	let i, aux = [], contador = 0, auxiliar1, maiusculo = 0
	
	if (name === "") return "sem resposta"

	for (i = 0; i < name.length; i++) {
		if (name[i] == "a" || name[i] == "A") aux[i] = name[i].replace(/a/gi, 1)
		else if (name[i] == "b" || name[i] == "B") aux[i] = name[i].replace(/b/gi, 2)
		else if (name[i] == "c" || name[i] == "C") aux[i] = name[i].replace(/c/gi, 3)
		else if (name[i] == "d" || name[i] == "D") aux[i] = name[i].replace(/d/gi, 4)
		else if (name[i] == "e" || name[i] == "E") aux[i] = name[i].replace(/e/gi, 5)
		else if (name[i] == "f" || name[i] == "F") aux[i] = name[i].replace(/f/gi, 6)
		else if (name[i] == "g" || name[i] == "G") aux[i] = name[i].replace(/g/gi, 7)
		else if (name[i] == "h" || name[i] == "H") aux[i] = name[i].replace(/h/gi, 8)
		else if (name[i] == "i" || name[i] == "I") aux[i] = name[i].replace(/i/gi, 9)
		else if (name[i] == "j" || name[i] == "J") aux[i] = name[i].replace(/j/gi, 10)
		else if (name[i] == "k" || name[i] == "K") aux[i] = name[i].replace(/k/gi, 11)
		else if (name[i] == "l" || name[i] == "L") aux[i] = name[i].replace(/l/gi, 12)
		else if (name[i] == "m" || name[i] == "M") aux[i] = name[i].replace(/m/gi, 13)
		else if (name[i] == "n" || name[i] == "N") aux[i] = name[i].replace(/n/gi, 14)
		else if (name[i] == "o" || name[i] == "O") aux[i] = name[i].replace(/o/gi, 15)
		else if (name[i] == "p" || name[i] == "P") aux[i] = name[i].replace(/p/gi, 16)
		else if (name[i] == "q" || name[i] == "Q") aux[i] = name[i].replace(/q/gi, 17)
		else if (name[i] == "r" || name[i] == "R") aux[i] = name[i].replace(/r/gi, 18)
		else if (name[i] == "s" || name[i] == "S") aux[i] = name[i].replace(/s/gi, 19)
		else if (name[i] == "t" || name[i] == "T") aux[i] = name[i].replace(/t/gi, 20)
		else if (name[i] == "u" || name[i] == "U") aux[i] = name[i].replace(/u/gi, 21)
		else if (name[i] == "v" || name[i] == "V") aux[i] = name[i].replace(/v/gi, 22)
		else if (name[i] == "w" || name[i] == "W") aux[i] = name[i].replace(/w/gi, 23)
		else if (name[i] == "x" || name[i] == "X") aux[i] = name[i].replace(/x/gi, 24)
		else if (name[i] == "y" || name[i] == "Y") aux[i] = name[i].replace(/y/gi, 25)
		else if (name[i] == "z" || name[i] == "Z") aux[i] = name[i].replace(/z/gi, 26)
		if (name[i] == "A") maiusculo++
		if (name[i] == "B") maiusculo++
		if (name[i] == "C") maiusculo++
		if (name[i] == "D") maiusculo++
		if (name[i] == "E") maiusculo++
		if (name[i] == "F") maiusculo++
		if (name[i] == "G") maiusculo++
		if (name[i] == "H") maiusculo++
		if (name[i] == "I") maiusculo++
		if (name[i] == "J") maiusculo++
		if (name[i] == "K") maiusculo++
		if (name[i] == "L") maiusculo++
		if (name[i] == "M") maiusculo++
		if (name[i] == "N") maiusculo++
		if (name[i] == "O") maiusculo++
		if (name[i] == "P") maiusculo++
		if (name[i] == "Q") maiusculo++
		if (name[i] == "R") maiusculo++
		if (name[i] == "S") maiusculo++
		if (name[i] == "T") maiusculo++
		if (name[i] == "U") maiusculo++
		if (name[i] == "V") maiusculo++
		if (name[i] == "W") maiusculo++
		if (name[i] == "X") maiusculo++
		if (name[i] == "Y") maiusculo++
		if (name[i] == "Z") maiusculo++
		console.log(aux)
	}

	for (i = aux.length-1; i > 0; i--) {
		if (Number(aux[i])<=Number(aux[i-1])) contador++;
		if (contador === aux.length-1) return "sem resposta"
	}
	if (Number(aux[name.length-1])>Number(aux[name.length-2])) {
		auxiliar1 = aux[name.length-1]
		aux[name.length-1] = aux[name.length-2]
		aux[name.length-2] = auxiliar1

		aux = String(backToLetters(aux)).replace(/,/gi, "")
		if (maiusculo > 0) return upperCaseFirst(aux)
		return aux
	}
	else if (Number(aux[name.length-2])>Number(aux[name.length-3])) {
		auxiliar1 = aux[name.length-2]
		aux[name.length-2] = aux[name.length-3]
		aux[name.length-3] = auxiliar1

		aux = String(backToLetters(aux)).replace(/,/gi, "")
		if (maiusculo > 0) return upperCaseFirst(aux)
		return aux
	}
	else {
		auxiliar1 = aux[name.length-1]
		aux[name.length-1] = aux[name.length-4]
		aux[name.length-4] = auxiliar1
		auxiliar1 = aux[name.length-3]
		aux[name.length-3] = aux[name.length-4]
		aux[name.length-4] = auxiliar1

		aux = String(backToLetters(aux)).replace(/,/gi, "")
		if (maiusculo > 0) return upperCaseFirst(aux)
		return aux
	}
}
function backToLetters(aux) {
	let resposta = []
	for (i = 0; i < aux.length; i++) {
		if (aux[i] == "1") resposta[i] = aux[i].replace(/1/gi, "a")
		else if (aux[i] == "2") resposta[i] = aux[i].replace(/2/gi, "b")
		else if (aux[i] == "3") resposta[i] = aux[i].replace(/3/gi, "c")
		else if (aux[i] == "4") resposta[i] = aux[i].replace(/4/gi, "d")
		else if (aux[i] == "5") resposta[i] = aux[i].replace(/5/gi, "e")
		else if (aux[i] == "6") resposta[i] = aux[i].replace(/6/gi, "f")
		else if (aux[i] == "7") resposta[i] = aux[i].replace(/7/gi, "g")
		else if (aux[i] == "8") resposta[i] = aux[i].replace(/8/gi, "h")
		else if (aux[i] == "9") resposta[i] = aux[i].replace(/9/gi, "i")
		else if (aux[i] == "10") resposta[i] = aux[i].replace(/10/gi, "j")
		else if (aux[i] == "11") resposta[i] = aux[i].replace(/11/gi, "k")
		else if (aux[i] == "12") resposta[i] = aux[i].replace(/12/gi, "l")
		else if (aux[i] == "13") resposta[i] = aux[i].replace(/13/gi, "m")
		else if (aux[i] == "14") resposta[i] = aux[i].replace(/14/gi, "n")
		else if (aux[i] == "15") resposta[i] = aux[i].replace(/15/gi, "o")
		else if (aux[i] == "16") resposta[i] = aux[i].replace(/16/gi, "p")
		else if (aux[i] == "17") resposta[i] = aux[i].replace(/17/gi, "q")
		else if (aux[i] == "18") resposta[i] = aux[i].replace(/18/gi, "r")
		else if (aux[i] == "19") resposta[i] = aux[i].replace(/19/gi, "s")
		else if (aux[i] == "20") resposta[i] = aux[i].replace(/20/gi, "t")
		else if (aux[i] == "21") resposta[i] = aux[i].replace(/21/gi, "u")
		else if (aux[i] == "22") resposta[i] = aux[i].replace(/22/gi, "v")
		else if (aux[i] == "23") resposta[i] = aux[i].replace(/23/gi, "w")
		else if (aux[i] == "24") resposta[i] = aux[i].replace(/24/gi, "x")
		else if (aux[i] == "25") resposta[i] = aux[i].replace(/25/gi, "y")
		else if (aux[i] == "26") resposta[i] = aux[i].replace(/26/gi, "z")
	}
	return resposta
}
function upperCaseFirst(aux) {
	return aux.charAt(0).toUpperCase() + aux.slice(1)
}

console.log(menorStringMaior("Qualified"))