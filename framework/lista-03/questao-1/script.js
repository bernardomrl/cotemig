// QUESTAO 1
array1 = []
array2 = []

for (i = 0; i < 5; i++) {
    array1.push(parseInt(prompt("Digite o numero do primeiro vetor: ")))
    array2.push(parseInt(prompt("Digite o numero do segundo vetor: ")))
}

array = array1.concat(array2)
array.sort((a, b) => a - b)
array.pop()
array.shift()
console.log(array)