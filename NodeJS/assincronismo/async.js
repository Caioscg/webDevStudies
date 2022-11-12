const promessa = new Promise( function( resolve, reject) {

    return resolve("ok")

})

async function start() {        // função assíncrona
    try {   // tenta fazer isso
        const result = await promessa  // a espera pela promessa
        console.log(result)
    } catch(e) {   
        // se nao der
        console.log(e)
    } finally {
        console.log("rodar sempre")
    }
}

start()   // nesse caso ele consegue rodar, e o output é:
          // ok
          // rodar sempre