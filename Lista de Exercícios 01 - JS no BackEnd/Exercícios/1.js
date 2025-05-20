//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

function verificaNumero(){
    rl.question("Digite um número de 1 a 10\n", (entrada) => {
        if(isNaN(Number(entrada))){
            console.log("O digitado não é um número");
            verificaNumero();
        }else{
            const num = parseInt(entrada);
            if(num%2 === 0){
                console.log(`${num} é par!`);
            }else{
                console.log(`${num} é ímpar!`);
            }
            rl.close();
        };
    });
};

verificaNumero();