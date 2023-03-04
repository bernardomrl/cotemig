/* Dado o seguinte vetor de objetos:
var usuarios = [{
nome: 'Gabriel',
habilidades: ['Javascript', 'ReactJS', 'Redux']
},
{
nome: 'Lara',
habilidades: ['JAVA', 'PHP', 'Laravel']
}];
Escreva uma função que retorne o seguinte resultado:
O Gabriel possui as habilidades: Javascript, ReactJS, Redux
A Lara possui as habilidades: JAVA, PHP, Laravel
Dica: Para percorrer um vetor você deve utilizar a sintaxe for…of e para unir valores de um array
com um separador utilize o join. */
users = [{
    name: 'Gabriel',
    skills: ['Javascript', 'ReactJs', 'Redux']
},
{
    name: 'Lara',
    skills: ['JAVA', 'PHP', 'Laravel']
}]
function listUsers(users) {
    for (let user of users) {
        console.log(`${user.name} possui as habilidades: ${user.skills.join(', ')}.`)
    }
}
listUsers(users)