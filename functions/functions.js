//Também podemos declarar funcões dentro de variáveis
// Está maneira é chamda de expression ou anonima 
//const sum = function(/*aqui eu coloco os parametros da função*/ number1, number2 ) { 
//    console.log(number1 + number2) // mostro na tela o valor calculado
//}
//sum(/*Aqui dentro eu coloco os valores que a funçao vai substituir no number1 e number 2 */2, 3)

/*const sum = function(number1, number2){
    console.log(number1 + number2)
}
sum(2, 3)
sum(1000, 2000)
sum(5.5, 5.5)
*/

// Toda função retorna alguma coisa
//Desta maneira eu deixei os parametros fora da função e apenas chamei ela quando quis mostrar na tela
const sum = function(number1, number2){
    totalSoma = number1 + number2
    return totalSoma
}

let number1 = 55
let number2 = 55

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)