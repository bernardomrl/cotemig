// QUESTAO 8
funcionarios = [
    {
        nome: 'Han Solo',
        departamento: 'Financeiro',
        salario: 5000
    },
    {
        nome: 'Luke',
        departamento: 'Financeiro',
        salario: 15000
    },
    {
        nome: 'Ben',
        departamento: 'Marketing',
        salario: 2000
    },
    {
        nome: 'Leia',
        departamento: 'Marketing',
        salario: 10000
    },
    {
        nome: 'Rey',
        departamento: 'Financeiro',
        salario: 2500
    }
]
financeiro = funcionarios.filter(funcionario => funcionario.departamento === 'Financeiro').map(funcionario => ({
    nome: funcionario.nome,
    salario: funcionario.salario
}))

let total = 0

for (let i = 0; i < financeiro.length; i++) {
    financeiro[i].salario *= 1.5
    total += financeiro[i].salario
}

console.log(`O total dos salários do departamento Financeiro, depois do aumento : ${total}`)