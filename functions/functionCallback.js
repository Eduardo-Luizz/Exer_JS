//callback function 
//Significa chamar uma function e depois chamar novamente dentro de outra funcao
function sayMyName(name) { //Aqui ele guardou essa function na memory
    console.log('Antes de executar a function')
    
    name()

    console.log('Depois de executar a function')
}
sayMyName( // aqui executou a function
    () => {
        console.log('Estou em uma callback')//e enviou esta
    }
)