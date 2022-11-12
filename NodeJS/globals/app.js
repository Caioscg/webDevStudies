const questions = [
    "O que aprendi hoje?",
    "O que me deixou triste hoje?",
    "Como posso melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]
const ask = (i=0) => {
    process.stdout.write(questions[i] + " > ") //escreve na tela como o console.log -> console.log("hi") == process.stdout.write("hi" + "\n")
}

ask()

const answers = []
process.stdin.on("data", data => {  // recebi um dado do standIn do usuário e executa a função data
    answers.push(data.toString().trim()) // trim() remove espaços no começo e no final
    if (answers.length < questions.length) {
        ask (answers.length)
    } else {
        process.exit()  //encerra a função e a execução
    }
    
})
process.on("exit", () => {    // quando ocorrer o process.exit ele executa essa arrow function
    console.log(`
    Fala Caio, beleza?,

    O que você aprendeu hoje foi:
    ${answers[0]}

    O que te deixou triste hoje foi:
    ${answers[1]}

    Amanhã você pode melhorar:
    ${answers[2]}

    O que te deixou feliz hoje foi:
    ${answers[3]}

    Voce ajudou ${answers[4]} pessoa(s) hoje!

    Volte amanhã para novas reflexões!
    `)
})