/* Crie um array de objetos contendo dados sobre 10 pessoas(nome, idade, RG), utilize o
método filter para retornar apenas as idades de quem tem + de 18 anos.
    Exemplo
// array de números
const numeros = [1, 2, 3, 4];
// array com objetos
const objetos = [
    {
        nome: 'Harry Potter',
        idade: 15
    },
    {
        nome: 'Gandalf',
        idade: 1706
    },
    {
        nome: 'Jon Snow',
        idade: 28
    },
];
// função que filtra os valores menores que 2, ou seja, apenas os maiores vão para o novo array
// Lembre-se que o filter retorna um novo array
let novoArrayA = numeros.filter(numero => numero > 2);
console.log(novoArray); // => [3, 4]
// função que filtra o array objeto pelo nome
// Lembre-se que o filter retorna um novo array
let novoArrayB = objetos.filter(objeto => objeto.nome === 'Gandalf');
console.log(novoArray) // => [ { nome: 'gandalf' } ] */
const pessoas = [
    { nome: 'João', idade: 25, rg: '123456789' },
    { nome: 'Maria', idade: 17, rg: '987654321' },
    { nome: 'Pedro', idade: 20, rg: '456789123' },
    { nome: 'Ana', idade: 18, rg: '789123456' },
    { nome: 'José', idade: 30, rg: '321654987' },
    { nome: 'Mariana', idade: 16, rg: '654987321' },
    { nome: 'Lucas', idade: 22, rg: '789456123' },
    { nome: 'Juliana', idade: 19, rg: '456123789' },
    { nome: 'Fernando', idade: 26, rg: '321789654' },
    { nome: 'Carla', idade: 15, rg: '987321654' }
];

const adultos = pessoas.filter(pessoas => pessoas.idade > 18)
const adultosIdade = adultos.map(pessoas => pessoas.idade)
console.log(adultosIdade)