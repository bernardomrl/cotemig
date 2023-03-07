// QUESTAO 1
array1 = [] // aqui declara a array 1 pra usar dps, pq como vou dar push, tem q declarar antes
array2 = [] // mesma coisa aq

for (i = 0; i < 5; i++) { // for para repetir o contador ate 5 pq ai vai fazer as arrays terem 5 valores dentro
    array1.push(parseInt(prompt("Digite o numero do primeiro vetor: "))) // push é para inserir valores na array que ja foi iniciada antes, quando vc usa o push vc insere o valor na ultima casa vazia, se vc inicou a array sem nenhum valor, o primeiro push vai ser colocado no 0, o segundo no 1, e assim por diante.
    array2.push(parseInt(prompt("Digite o numero do segundo vetor: "))) // parseInt é pra transformar o numero em inteiro, e prompt pra receber os valores pelo prompt do console do navegador
}

array = array1.concat(array2) // isso e pra concatenar as duas arrays com os valores inseridos pelo usuario em outra variavel (juntar os dois valores em um so, ex: array1 = [1,3,5,7,9] array2 = [2,4,6,8,10], array concatenada = [1,3,5,7,9,2,4,6,8,10]) lembrando q nao vai em ordem crescrente, eles so vao juntar uma com a outra
array.sort((a, b) => a - b) // o array.sort é justamente para ordernar as variveis, basicamente 'sortir' elas (esse (a,b) => a - b) é pra deixar elas em ordem crescrente.
array.pop() // o pop() serve pra remover o primero valor da array, ex array = [1,2,3,4], array.pop() vai fazer com que a array seja array = [2,3,4]
array.shift() // o shift é basicamente a mesma coisa de cima mas retira o ultimo numero, entao seria array = [1,2,3,4], array.shift() vai fazer com que a array seja array = [1,2,3]
console.log(array) // isso aq n sei se vc sabe mas é para mostrar algo dentro do console do navegador(F12), pode ser uma variavel ou um texto dentro das ""


// se ler direitin acho q da pra entender, senao pd me perguntar no wpp, as outras questoes tb