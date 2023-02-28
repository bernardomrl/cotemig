/* Escreva uma função que verifique se o vetor de passado possui a habilidade “Javascript” e retorna
um booleano true/false caso exista ou não.
function temHabilidade(habilidade)
{
// código aqui
}
var habilidade = ['Javascript', 'ReactJS', 'React Native', 'Angular'];
temHabilidade(habilidade); // true ou false
Dica: para verificar se um vetor contém um valor, utilize o método indexOf. */

habilidade = ['Javascript', 'ReactJS', 'React Native', 'Angular']
function temHabilidade(habilidade) {
    if (habilidade.indexOf('Javascript') !== -1) {
        return true
    } else {
        return false
    }
}
console.log(temHabilidade(habilidade))