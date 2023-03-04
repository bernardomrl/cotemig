/* Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
    // código aqui
}
//entrada de dados var anosEstudo = ….;
experiencia(anosEstudo);
// De 0-1 ano: Junior
// De 1-3 anos: Pleno
// De 3-6 anos: Senior
// De 7 acima: Mestre Jedi */
anos = parseInt(prompt('Digite quantos anos de experiência você tem: '))
function experiencia(anos) {
    if (anos >= 0 && anos <= 1) {
        return 'Junior'
    } else if (anos > 1 && anos <= 3) {
        return 'Pleno'
    } else if (anos > 3 && anos <= 6) {
        return 'Senior'
    } else if (anos > 7) {
        return 'Mestre Jedi'
    } else {
        return 'Inválido'
    }
}
console.log(experiencia(anos))