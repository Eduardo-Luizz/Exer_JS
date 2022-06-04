//Object
const person = {
    name: 'Joana',
    age: 30,
    weight: 88.6,
    isAdmin: true
}
//Aqui estou mostrando tudo oque está dentro do objeto person
console.log(person)
//Se eu quiser apenas um item em específico 
console.log(person.name)
//Usando interpolação
console.log(`${person.name} tem ${person.age} anos.`)