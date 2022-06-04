// Trhow - Significa disparar ou lançar

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário") //Vai disparar que o nome é  necessário
    }

    console.log('depois do erro')
}

//try...catch - Try significa tentar catch significa pegar

try {
    sayMyName()
} catch (e) {
    console.log(e)
}
console.log('Apos a funcao de erro')