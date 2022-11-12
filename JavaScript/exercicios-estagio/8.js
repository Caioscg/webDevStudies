function escolheTaxi(tf1,vqr1,tf2,vqr2) {
	let km, empresaX, empresaY
	if (tf1 === tf2 && vqr1 === vqr2) return "Tanto faz"
	
	else if (tf1 >= tf2 && vqr1 >= vqr2) return "Empresa 2"
	
	else if (tf2 >= tf1 && vqr2 >= vqr1) return "Empresa 1"
	
	else {
		km = (tf2-tf1)/(vqr1-vqr2)
		if (tf1+(vqr1*(km-0.1)) > tf2+(vqr2*(km-0.1))) {
            empresaX = 2
            empresaY = 1
        }
        else {
            empresaX = 1
            empresaY = 2
        }

		if (km%1 === 0) return `Empresa ${empresaX} quando a distância < ${km.toFixed(1)}, Tanto faz quando a distância = ${km.toFixed(1)}, Empresa ${empresaY} quando a distância > ${km.toFixed(1)}`
		
        else return `Empresa ${empresaX} quando a distância < ${km.toFixed(2)}, Tanto faz quando a distância = ${km.toFixed(2)}, Empresa ${empresaY} quando a distância > ${km.toFixed(2)}`
	}
}
console.log(escolheTaxi("2.5","1.0","5.0","0.75"))