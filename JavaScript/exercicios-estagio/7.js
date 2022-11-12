function calculaTotalLeds(altura,largura) {
	return (altura && largura) === 0 ? 0 :(altura+1) * (largura+1)
}
console.log(calculaTotalLeds(2,3))