/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo
array:
  * receitas: []
  * despesas: []
  
  Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está 
  com saldo positivo ou negativo, seguido do valor do saldo;
*/

const object = {
  receitas : [1200,2000],
  despesas : [200, 5000]
}

function calculate(array) {
  let total = 0;
  for(let value of array) {
    total += value
  }
  return total;
}

function calculateBalance() {
  const calculateIncomes = calculate(object.receitas)
  const calculateExpenses = calculate(object.despesas)

  const total = calculateIncomes - calculateExpenses;
  let message = "negativo"
  if(total >= 0) {
    message = "positivo"
  }
  console.log(`Seu saldo é ${message}: ${total.toFixed(2)}`)
}

calculateBalance()