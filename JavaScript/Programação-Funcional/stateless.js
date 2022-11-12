let number = 2

// stateful function
function square() {
    return number * number
}

number = square()  // da proxima vez q executar a função os dados já ficam confusos

// stateless function
const square = n => n * n

num = 2
squad = square(num)
console.log(squad) // 4