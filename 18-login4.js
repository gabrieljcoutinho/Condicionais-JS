const acesso = 'Official'

const autorizado = (acesso === 'Official' || acesso === 'Cadastrado') ? 'Aceito' : 'Não aceito'

console.log(autorizado)