var ativo = true
var mensagem = "Helllo World!"

if (ativo) {
    console.log(mensagem)
} else {
    console.log("nao deu certo")
}

//----------------------------------------

var sinalDeTransito = "vermelho"
var acao = ""

if (sinalDeTransito == "verde") {
    acao = "passar"
} else if (sinalDeTransito == "amarelo") {
    acao = "atencao"
} else {
    acao = "para"
}

console.log(acao)

//________________________________________________

let mesAtual = "Setembro"
let numero = 0

switch(mesAtual) {  // Chaveamento
    case "Julho":
        numero = 7
        break

    case "Setembro":
        numero = 9
        break

    case "Outubro":
        numero = 10
        break

    case "Janeiro":
        numero = 1
        break

    default:
        numero = 0
        break
}

console.log(numero)