/*

6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.

*/

const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

function verficaTriangulo(alpha, beta, gama){
    if (alpha == 60 && beta == 60) {
        console.log("Com os três ãngulos igual a 60°, esse é um triângulo equilátero.")
        rl.close();
    }
    else if ((alpha == beta) || (alpha == gama) || (beta == gama)) {
        console.log("Com os dois ãngulos iguais, esse é um triângulo isósceles.")
        rl.close();
    } else {
        console.log("Com todos os ãngulos diferentes entre si, esse é um triângulo escaleno.")
        rl.close();
    }
}

function verificaAngulos(){
    rl.question("Digite o ângulo alpha:\n", (alpha) => {
        rl.question("Digite o ângulo beta:\n", (beta) => {
            rl.question("Digite o ângulo gama:\n", (gama) => {

                const alphaFloat = parseFloat(alpha);
                const betaFloat = parseFloat(beta);
                const gamaFloat = parseFloat(gama);
                const somaAngulos = alphaFloat + betaFloat + gamaFloat;

                if (somaAngulos != 180) {
                    console.log(`Com a soma de ${somaAngulos}° entre os ângulos, pode-se afirmar que isso não é um triângulo. Tente novamente`);
                    return verificaAngulos();
                } else {
                    console.log("Isso é um triângulo. Mas, qual?\n")
                    verficaTriangulo(alphaFloat, betaFloat, gamaFloat);
                }

            })
        })
    })
}

console.log('Vamos começar o programa!\n');
verificaAngulos();