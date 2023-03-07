// QUESTAO 1 - CARNAVAL
const preco = 38,
    dias = 5
packs = parseInt(prompt("Digite a quantidade de packs consumidas: "))

function calcLitros(packs, dias) {
    litros = ((packs * 12 * dias) * 0.35).toFixed(0)
    return `${litros} litros consumidos.`
}

function calcPreco(packs, dias, preco) {
    total = (packs * preco * dias)
    return `R$${total} gastos.`
}
console.log(calcLitros(packs, dias))
console.log(calcPreco(packs, dias, preco))
