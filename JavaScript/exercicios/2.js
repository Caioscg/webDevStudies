//programa que calcula se uma familia está com saldo positivo ou negativo
let contas = {
    receitas: [3000, 2500, 1500],
    despesas : [300, 600, 150, 96, 400, 2000, 755, 12, 140]
}

function sum(array) {
    total = 0

    for (let valor of array) {
        total += valor
    }

    return total
}
function balance() {
    let totalReceitas, totalDespesas, diference

    totalReceitas = sum(contas.receitas)
    totalDespesas = sum(contas.despesas)
   
    diference = totalReceitas - totalDespesas
   
    if (totalReceitas > totalDespesas) {
       console.log("Saldo positivo : " + diference + " R$")
    }
    else if (totalDespesas > totalReceitas) {
       console.log("Saldo negativo :" + diference + " R$")
    }
    else console.log("Saldo neutro")
}
balance()