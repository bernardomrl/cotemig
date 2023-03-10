// QUESTAO 1
array1 = []
array2 = []

for (let i = 0; i < 5; i++) {
    array1.push(parseInt(prompt("QUESTAO 1\rDigite o numero do primeiro vetor: ")))
    array2.push(parseInt(prompt("QUESTAO 1\rDigite o numero do segundo vetor: ")))
    i++
}

array = array1.concat(array2)
array.sort((a, b) => a - b)
array.pop()
array.shift()
console.log(array)

// QUESTAO 2

index = parseInt(prompt("QUESTAO 2\rDigite o número que deseja procurar no array."))

let i = array.indexOf(index, 0)

i >= 0 ? console.log(`${index} existe no array, posição : ${i}`) : console.log(`${index} não existe no array.`)