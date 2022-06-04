//Manipulando Arrays

let techs = ["html", "css", "js"]

//adicionar um item no fim
console.log(techs.push("nodejs")) //o método .push adiciona um item no final automaticamente

//adicionar no começo
techs.unshift("sql")

//remover do fim 
techs.pop()

//remover do comeco
techs.shift()

//pegando somente alguns elementos do array
console.log(techs.slice(1, 3)) // o primeiro elemento é de onde quero cortar o segundo ultimo elemento

//remover 1 ou mais itens em qulauqer posicao do array
techs.splice(1, 2)

//encontrar a posicao de um elemento no array
let index = techs.indexOf('css')
console.log(index)

console.log(techs)