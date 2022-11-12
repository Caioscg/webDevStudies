const random = (number, Math) =>
    Math.floor(Math.random() * number);

// usando recursividade na função fatorial
const factorial = x => {

    if (x === 0) {
        return 1;  // factorial = 1
    }

    return x * factorial(x - 1);
}