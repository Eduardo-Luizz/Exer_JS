/* 
    Function() constructor

    *expressão new
    *criar um novo objeto
    *this keyword

*/
//Um modelo de como criar objetos
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const eduardo = new Person("Eduardo")
const ana = new Person("Ana")
console.log(eduardo.walk())
console.log(ana.walk())