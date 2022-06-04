/* Transformando notas escolares

Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caractere tipo A B C

* de 90 pra cima - A
* de 80 - 89     - B   
* de 70 - 79     - C
* de 60 - 69     - D
* menor que 60   - F

*/
let nota = -4

function getScore(nota) {

    if (nota >= 90 && nota <= 100) {
        console.log('A')
    } else if (nota >= 80 && nota <= 89) {
        console.log('B')
    }else if (nota >= 70 && nota <= 79) {
        console.log('C')
    }else if (nota >= 60 && nota <= 69) {
        console.log('D')
    }else if (nota >= 0 && nota <= 60) {
        console.log('F')
    }else {
        console.log('Nota inválida ! ')
    }    
    return nota;
}

getScore(70)