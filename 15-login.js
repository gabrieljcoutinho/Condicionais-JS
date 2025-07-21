const usuario = 'admin'

// const mensagem = (usuario === 'admin' ) ? 'Login sucedido' : 'Usuario invalido'
const mensagem = (usuario === 'admin' || usuario === 'Admin') ? 'Login sucedido' : 'Usuario invalido'

console.log(mensagem)