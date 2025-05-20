/*

14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o número para obter seu fatorial:\n", (input) =>{
    const nmr = parseInt(input);

    let somatorio = nmr;

    for (let i = nmr; i > 1; i--) {
        somatorio = somatorio * (i - 1);
    }

    console.log(`O fatoria de ${nmr} é ${somatorio}.`);
    rl.close();
})