//Manipulando Strings e Arrays

/*Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços,
coloque _ */

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") // Criei meu array que transforma de string para array .split()
let phraseWithUnderscore = myArray.join("_") //Criei mais uma variavel e o método .join junta coisas dentro dos (Eu coloco oque quero que separe as frases)

console.log(phraseWithUnderscore.toUpperCase())