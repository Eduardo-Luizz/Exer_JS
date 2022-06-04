/*
    Type conversion (typecasting) vs Type coersion
*/


/* 
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops )
    são eles:
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log( 0 ? "Verdadeiro" : "Falso")

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops )
    são eles: 
    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/
console.log( 3.23 ? "Correct" : "False")
