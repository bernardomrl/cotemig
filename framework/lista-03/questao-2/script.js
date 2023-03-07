// QUESTAO 1
array1 = []
array2 = []

for (i = 0; i < 5; i++) {
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

search = parseInt(prompt("QUESTAO 2\rDigite o número que deseja verificar no vetor: "))
console.log(search)
function searchArray(search) {
    let a = array.indexOf(search, 0)

    if (a >= 0) {
        return `${a} existe no vetor concatenado.`
    } else {
        return `${a} não existe no vetor concatenado.`
    }
}

console.log(searchArray(array))