/*
    *Scope
        escopo ou Scope determina a visibilidade de alguma variavel no js, nem sempre as variaveis estao visiveis para o codigo no js
    
    *BLOCK STATEMENT (Declaração de bloco)
    -----------------------------------------------------------------
    //vamos iniciar um bloco
    {
        //Aqui dentro é um bloco e posso colocar qualquer código
    } // Aqui fechamos o bloco
    {
*/

//Exemplo de criacao de block
{
    let y = 0
    console.log(y)
}

//var é global e poderá funcionar fora de um escopo de bloco
// Var é global pois é tudo oque está rodando na minha aplicação e local pois é aquilo que está dentro das {}
//hosting ele pega a var de dentro do escopo coloca antes do primeiro console.log e atribui valor undefined para o x, este e o comportamento da var
console.log('> existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)