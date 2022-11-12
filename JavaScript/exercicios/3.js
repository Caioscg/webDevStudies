//transforma uma string para number de C pra F e vice-versa
let degrees = "86z"
let number1, number2
let option
const Celsius = degrees.toUpperCase().includes("C")
const Fahrenheit = degrees.toUpperCase().includes("F")

if(!Celsius && !Fahrenheit) {
    console.log("Grau não identidicado")
}
if(Celsius == true) {
    number1 = Number(degrees.toUpperCase().replace("C", ""))
    number2 = number1 * 9/5 + 32
    console.log(number2 + "F")
}
else {
    number1 = Number(degrees.toUpperCase().replace("F", ""))
    number2 = (number1 - 32) * 5/9
    console.log(number2 + "C")
}
