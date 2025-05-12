/*
2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function verificaIdade() {
    rl.question("Digite a idade em anos (0-150)\n", (entrada) => {
        const num = Number(entrada);

        if (isNaN(num)) {
            console.log("O digitado não é um número!");
            return verificaIdade();
        }

        const idade = parseInt(num);

        if (num < 0 || num > 150) {
            console.log(`${idade} anos é uma idade não convencional.\n`);
            return verificaIdade();
        }

        if (0 <= idade && idade < 14) {
            console.log(`${idade} anos é a idade de uma **criança**!`);
        } else if (14 <= idade && idade < 19) {
            console.log(`${idade} anos é a idade de um **adolescente**!`);
        } else if (19 <= idade && idade < 60) {
            console.log(`${idade} anos é a idade de um **adulto**!`);
        } else if (60 <= idade && idade <= 150) {
            console.log(`${idade} anos é a idade de um **idoso**!`);
        }
        
        rl.close();
    });
}

verificaIdade();
