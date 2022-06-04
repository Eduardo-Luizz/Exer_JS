//Variáveis e tipos de dados
//declaration
var name
//assigment or atribuição de valores
name = "Eduardo Luiz"
//que tipo de dado foi colocado na variável e mostrando o valor da variavel
console.log(name)
console.log(typeof name)

//Está é uma maneira de atribuir os valores
    //let age = 20
    //let isHuman = true

//Está é outra chamada de agrupamento de declaraçoes
    //let age, isHuman
    //age = 20
    //isHuman = true

let age, isHuman
age = 20
isHuman = true
//Múltiplos argumentos na funcao
console.log(name, age, isHuman)
//Escrita de um texto X + valor das variáveis Ou seja CONCATENAR VALORES
console.log('o '+ name + ' tem ' + age + ' anos.')
//Interpolando valores com template literals or template strings
console.log(`o ${name} tem ${age} anos.`)