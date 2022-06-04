
    function semRetorno(){
        //console.log("Chamando Função")
}

semRetorno()

//----------------------------------------------------

function comRetorno(){
    return 100
}

//console.log("Soma = ", comRetorno() + 10)

//--------------------------------------------------------+

function soma(x, y){
    return x + y
}
console.log("Soma =", soma(36,40))

//---------------------------------------------------------

var arrowFunction = () => {
    return "Flecha"
}
console.log(arrowFunction())

//-------------------------------------------------------------

var arrowFunctionSemRetorno = () => {
    console.log("Sem retorno")
}
arrowFunctionSemRetorno()

//--------------------------------------------------------------

var arrowComParametro = (param1, param2) => {
    return param1 + param2
}
console.log("Soma =", arrowComParametro(36, 40))