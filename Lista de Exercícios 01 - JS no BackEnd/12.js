/*

12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('A tabuada de qual número você deseja?\n', (input) => {
    const nmr = parseInt(input);
    
    for (let i = 0; i < 10; i++) {
        console.log(`${nmr} * ${i + 1} = ${nmr*(i + 1)}`);
    }

    rl.close();
})