// QUESTAO 3
habilidade = ["Javascript", "ReactJS", "React Native", "Angular"]

function temHabilidade(habilidade) {
    let js = habilidade.indexOf("Javascript", 0)
    if (js >= 0) {
        return true
    } else {
        return false
    }
}

console.log(temHabilidade(habilidade))