/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

function verificaNota() {
    rl.question("Digite a Nota (0-10)\n", (entrada) => {
        const num = Number(entrada);

        if (isNaN(num)) {
            console.log("O digitado não é um número!");
            return verificaNota();
        }

        const Nota = parseInt(num);

        if (num < 0 || num > 10) {
            console.log(`${Nota} é uma Nota não convencional.\n`);
            return verificaNota();
        }

        if (0 <= Nota && Nota < 4) {
            console.log(`Nota ${Nota}! Você está **reprovado**`);
        } else if (4 <= Nota && Nota < 7) {
            console.log(`Nota ${Nota}! Você está em **recuperação**`);
        } else if (7 <= Nota && Nota <= 10) {
            console.log(`Nota ${Nota}! Você está **aprovado**`);
        }

        rl.close();
    });
}

verificaNota();
