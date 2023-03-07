// QUESTAO 7
const produtos = [
    { nome: 'Arroz', preco: 9.99 },
    { nome: 'Feijão', preco: 15.50 },
    { nome: 'Macarrão', preco: 7.25 },
    { nome: 'Carne', preco: 25.00 },
    { nome: 'Leite', preco: 3.99 },
    { nome: 'Pão', preco: 12.75 },
    { nome: 'Azeite', preco: 19.99 },
    { nome: 'Café', preco: 8.50 },
    { nome: 'Biscoito', preco: 10.00 },
    { nome: 'Queijo', preco: 5.49 }
]
desconto = produtos.map(p => ({
    nome: p.nome,
    preco: Math.round(((p.preco - (p.preco * 0.10)) + Number.EPSILON) * 100) / 100
}))

console.log("Produtos sem desconto aplicado : ")
console.log(produtos)
console.log("Produtos com desconto aplicado : ")
console.log(desconto)