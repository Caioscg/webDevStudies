const timeOut = 1000
const loading = () => console.log("loading...")
let interval = setInterval(loading, timeOut)

setTimeout(() => clearInterval(interval), 4000)
setTimeout( () => console.log("\n" + "Play!"), 4100)