/*

7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.

*/

const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question("Quantas maçãs você vai levar?\n", (quantidade) => {
    const qtdd = parseInt(quantidade);
    var taxa, justificativa;

    if (qtdd < 12) {
        taxa = 0.3;
        justificativa = "menor";
    } else {
        taxa = 0.25;
        justificativa = "maior ou igual";
    }

    console.log(`\n--Para a quantidade de ${qtdd} maçãs levadas, o preço total da compra será de R$ ${(qtdd * taxa).toFixed(2)} (${qtdd} x ${taxa}) (taxa de R$ ${taxa} por maçã, pois ${qtdd} é ${justificativa} que 12 unidades)--`);
    rl.close();
    
})