// QUESTAO 2
endereco = {
    rua: "Itajubá",
    numero: "230",
    bairro: "Floresta",
    cidade: "Belo Horizonte",
    uf: "MG"
}

function end(endereco) {
    return `O usuário mora em ${endereco.cidade}/ ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua}, nº ${endereco.numero}.`
}

console.log(end(endereco))