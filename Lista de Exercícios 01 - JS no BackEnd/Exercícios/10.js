/*

10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

*/

const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

rl.question('Digite o número:\n', (nmr) =>{
    for (let i = 10; i > 0; i--){
        console.log(`${nmr} - ${i}`);
    }

    rl.close();
})
