// Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra
// C = (F - 32) * 5/9
// F = C * 9/5 + 32

// Minha solução
let temp = '50F';

function convertTemperature(temperature) {
  const lastPosition = temp.substr(-1).toUpperCase();
  const value = temperature.slice(0, -1)
  let convertion;

  if (lastPosition === 'C') {
    convertion = Number(value * 9/5 + 32);
  } else if (lastPosition === 'F') {
    convertion = Number((value - 32) * 5/9);
  } else {
    console.log('Option invalid');
  }
  console.log(`A temperatura digitado foi: ${temp}\nApós a conversão ficou ${convertion}`)
}

convertTemperature(temp)

// Solução do curso
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C');
  const fahrenheitExists = degree.toUpperCase().includes('F');

  //Fluxo de erro
  if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado');
  }

  // Fluxo ideal F -> C
  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
  let degreeSign = 'C'

  // Fluxo Celsius
  if(celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => celsius * 9/5 + 32
    degreeSign = 'F'
  }
  
  return formula(updateDegree) + degreeSign
}

try {
  console.log(transformDegree('50F'))
  // transformDegree('100X') // Dispara erro
  console.log(transformDegree('50C'))
} catch (error) {
  console.log(error.message);
}