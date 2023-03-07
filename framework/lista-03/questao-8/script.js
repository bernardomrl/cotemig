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
console.log(funcionarios)
funcionarios = funcionarios.filter(funcionario => funcionario.departamento === 'Financeiro').map(funcionario => ({
    nome: funcionario.nome,
    departamento: funcionario.departamento,
    salario: (funcionario.salario * 0.5) + funcionario.salario
}))
soma = funcionarios.reduce((s, funcionario) => s + funcionario.salario, 0)
console.log(funcionarios)
console.log('Soma dos salarios do departamento financeiro : ' + soma)