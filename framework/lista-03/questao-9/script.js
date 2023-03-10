// QUESTAO 9
function verifica(arr) { // function verifica, verifica o maior numero de cada array dentro.
    var resul = arr.map(num => {
        var maior = 0
        for (let i = 0; i < num.length; i++) { // estrutura de repeticao para cada numero verificar qual é o maior
            if (num[i] > maior) {
                maior = num[i] // se o numero do indice atual for maior que o maior numero registrado, o maior numero será igual a ele
            }
        }
        return maior // retorna a variavel maior
    })
    return resul // retorna a varivel resul
}

console.log(verifica([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])) // [5, 27, 39, 1001]