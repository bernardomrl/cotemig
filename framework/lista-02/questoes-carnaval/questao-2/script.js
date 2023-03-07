// QUESTAO 2 - CARNAVAL
quesito = ["criatividade", "originalidade", "elegancia", "acabamento", "conservacao"]
notas = []

for (i = 0; i < 5; i++) {
    nota = parseInt(prompt(`Digite uma nota (DE 5 a 10) para o quesito ${quesito[i]}.`))
    while (nota < 5 || nota > 10 || isNaN(nota)) {
        nota = parseInt(prompt(`NOTA INVALIDA\rDigite uma nota (DE 5 a 10) para o quesito ${quesito[i]}.`))
    }
    notas.push(nota)
}

notas.sort((a, b) => a - b)
notas.pop()
notas.shift()
for (i = 0; i < notas.length; i++) {
    soma = notas[i] + soma
}

console.log("Nota final : " + soma)