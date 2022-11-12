let aceitar = true
console.log('pedir uber')
const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('Carro chegou - pedido aceito')   
    }
    else {
        return reject('motorista cancelou - pedido negado') 
    }
})

console.log('aguardando...')                    // pending

promessa
    .then(result => console.log(result))        // fulfilled
    .catch(erro => console.log(erro))           // rejected
    .finally(() => console.log('finalizado'))   // settled