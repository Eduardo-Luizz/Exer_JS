//Estrutura de repeticao
//For

for(let i = 1; i <= 10; i++) {
    console.log(i)
}

for(let v = 100; v > 0; v--) {
    console.log(v)
}

for(let w = 100; w > 0; w--) { //Posso parar um laço 
    if (w === 50) {
        break;
    }
    console.log(w)
}

for(let s = 10; s > 0; s--) {
    if (s === 5) {
        continue; //ele pula o cinco e continua
    }

    console.log(s)
}

