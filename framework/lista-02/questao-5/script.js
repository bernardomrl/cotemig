// QUESTAO 5
const usuarios = [{
    nome: "Gabriel",
    habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
    nome: "Lara",
    habilidades: ["JAVA", "PHP", "Laravel"]
}]

function listarUsuarios(usuarios) {
    for (usuario of usuarios) {
        console.log(`${usuario.nome} possui as habilidades : ${usuario.habilidades.join(", ")}`)
    }
}

listarUsuarios(usuarios)