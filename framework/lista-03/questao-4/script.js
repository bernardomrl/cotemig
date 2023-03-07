// QUESTAO 4
const produtos = [
    {
        id: 1,
        categoria: 'limpeza',
        name: 'Amaciante'
    },
    {
        id: 2,
        categoria: 'limpeza',
        name: 'Detergente'
    },
    {
        id: 3,
        categoria: 'alimento',
        name: 'ovo'
    },
    {
        id: 4,
        categoria: 'alimento',
        name: 'alface'
    }
]

produto = produtos.map(produto => ({
    id: produto.id
}))

console.log(produto)