

var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var soma = 0
var media = 0
var contador = 0

for(let i = 0; i < lista.length; i++){  //maneira de buscar até a quantidade da lista
    if(lista[i] % 2 == 0){             //Descubro se é par
    contador ++
    soma += lista[i]
    }
}

media = soma / contador
console.log(`A média aritmética é: ${media}`)