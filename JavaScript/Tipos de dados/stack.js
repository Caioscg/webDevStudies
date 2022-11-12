// Passo 1: Modelando
class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop() {
        if (this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }

    size() {
        return this.data.length
    }
}

// Passo 2: Utilizando
const stack = new Stack()

// adicionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures')) //learning, data, structures

console.log(stack.peek())  //structures
console.log(stack.size())  // 3


// remover
stack.pop() // remove o structures

console.log(stack.pop())  // data e remove o data
console.log(stack.peek())  //learning(unico que sobrou)