// QUESTAO 3
array = []

for (i = 0; i < 10; i++) {
    array.push(parseInt(prompt(`Digite o número para colocar na posição [${i}] do vetor.`)))
}

console.log(`Array normal : ${array.join(", ")}`)

array = array.map(function (n) {
    return n * 2
})

console.log(`Array dobrada : ${array.join(", ")}`)