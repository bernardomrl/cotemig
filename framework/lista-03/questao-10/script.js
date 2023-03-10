// QUESTAO 10
arrayMista = []
input = ''

while (input !== 'EXIT') {
    input = prompt(`Digite o número que deseja adicionar a array\rDigite EXIT para sair.`)
    input !== 'EXIT' ? arrayMista.push(Number(input)) : null
}

const neg = arrayMista.filter(numero => numero < 0)

console.log(`Elementos negativos : ${neg}, quantidade encontradas: ${neg.length}`)