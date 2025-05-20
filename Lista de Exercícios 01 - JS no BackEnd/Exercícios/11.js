/*

11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let contador = 1;

console.log("Digite 5 números:");

function solicitarNumero() {
    rl.question(`Digite o número ${contador}: `, (input) => {
        const numero = parseFloat(input);
        if (isNaN(numero)) {
        console.log("Entrada inválida! Por favor, digite um número.");
        } else {
        soma += numero;
        contador++;
        }

        if (contador <= 5) {
        solicitarNumero();
        } else {
        console.log(`A soma total é: ${soma}`);
        rl.close();
        }
    });
}

solicitarNumero();
