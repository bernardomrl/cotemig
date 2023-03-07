// QUESTAO 6
const pessoas = [
    {
        nome: "Ana",
        idade: 16,
        rg: "1234567"
    },
    {
        nome: "Bianca",
        idade: 33,
        rg: "2345678"
    },
    {
        nome: "Carlos",
        idade: 17,
        rg: "3456789"
    },
    {
        nome: "Daniel",
        idade: 19,
        rg: "4567890"
    },
    {
        nome: "Eduardo",
        idade: 51,
        rg: "5678901"
    },
    {
        nome: "Fernanda",
        idade: 27,
        rg: "6789012"
    },
    {
        nome: "Gabriel",
        idade: 38,
        rg: "7890123"
    },
    {
        nome: "Helena",
        idade: 46,
        rg: "8901234"
    },
    {
        nome: "Isabela",
        idade: 15,
        rg: "9012345"
    },
    {
        nome: "João",
        idade: 31,
        rg: "0123456"
    }
];

let adultos = pessoas.filter(pessoa => pessoa.idade >= 18).map(pessoa => ({
    nome: pessoa.nome,
    idade: pessoa.idade
}))
adultos.sort((a, b) => a.idade - b.idade)
console.log(adultos)