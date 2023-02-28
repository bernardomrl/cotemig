/* Crie uma função com o objeto abaixo que retorne o seguinte conteúdo:
O usuário mora em Belo Horizonte/ MG, no bairro Floresta, na rua Itajubá, nº 230.
var endereco = {
rua: '',
numero: '',
bairro: '',
cidade: '',
uf: ''
}; */
endereco = {
    rua: 'Itajubá',
    numero: '230',
    bairro: 'Floresta',
    cidade: 'Belo Horizonte',
    uf: 'MG'
}
function formatEndereco(endereco) {
    return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua}, nº ${endereco.numero}.`
}
console.log(formatEndereco(endereco))