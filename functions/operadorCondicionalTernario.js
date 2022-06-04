// Operator condicional (Ternário)

//Dependendo da condição, nós receberemos valores diferentes

//Condição então valor 1 se não valor 2
//condition ? value1 : value2

//Exemplos
//Café da manhã top

let pao = false
let queijo = true

const niceBreakFast = pao && queijo ? "Café top" : "Café ruim" //Se tiver pao e queijo true os dois cafe top senao cafe ruim
console.log(niceBreakFast)

//Carro novo e classico

let fusca = false
let ferrari = false

const niceGarage = fusca || ferrari ? "Ao menos um destes dois caros eu possuo" : "O meu sonho é ter um carro na garagem"
console.log(niceGarage)

//Maior de 18

let age = 50
const canDrive = age >= 18 ? "Can drive, be careful " : "Can't you drive, go home!"
console.log(canDrive)