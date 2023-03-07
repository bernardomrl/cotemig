// QUESTAO 4
anos = parseInt(prompt("Digite o total de anos de estudo: "))

function experiencia(anos) {
    if (anos >= 0 && anos <= 1) {
        return `Junior (${anos})`;
    } else if (anos > 1 && anos <= 3) {
        return `Pleno (${anos})`;
    } else if (anos > 3 && anos <= 6) {
        return `Senior (${anos})`;
    } else if (anos > 6) {
        return `Mestre Jedi (${anos})`;
    } else {
        return "Valor inválido. Insira um número maior ou igual a zero.";
    }
}

console.log(experiencia(anos))