// Exemplo em JS
const cart = {
    quantity: 2,
    total: 200
}

// bad way
cart.quantity = 3

// good way
const newCart = {...cart, quantity: 3}   // ... faz herdar as caracteristicas

console.log(newCart.total)

// Exemplo em ReactJS
const [amount, setAmout] = useState(0)

// bad way
amount = 2

// good way
setAmout(2)