fetch('https://api.github.com/users/Caioscg')
.then( response => response.json())    // encadeamento, procura dentro do outro then, que passa pro proximo
.then( data => fetch(data.repos_url))
.then( res => res.json())
.then( d => console.log(d))
.catch( err => console.log(err))  // se der erro em alguma parte o catch informa
// codigo so funciona no codesandbox, nao sei porque