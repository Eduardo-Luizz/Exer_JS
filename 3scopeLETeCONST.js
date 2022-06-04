//Cons e let são locais e só funcionam no escopo onde foi criada
let z = 8;
{
    let z = 0
    console.log('> existe z ', z)
}
console.log('> existe z depois do bloco? ', z)

//Se eu fizer assim ele busca o y em qualquer escopo
let y = 8;
{
    y = 0 // aqui eu atualizei o valor de y
    console.log('> existe y ', y)
}
console.log('> existe x depois do bloco? ', y)

//Com a const eu posso criar cons diferente mas nunca atualizar
const x = 11;
{
    {
        {
            {
                {
                    const f = 10
                    console.log('existe f? ', f)
                }
            }
        }
    }
}
console.log('existe x depois do bloco? ', x)