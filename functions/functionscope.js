//function scope

let subject = "Create video"// Criei a variável sujeito

function createThink(subject) { //Esse subject aqui tem um significado que se aplica aqui dentro 
    subject = "Study"           //Caso eu tire o parametro subject de dentro da funcao ele busca um valor para ele fora do escopo 
    return subject
}
console.log(subject) //Aqui o subject condiz com o da variavel criada logo o valor e undefined
console.log(createThink(subject))