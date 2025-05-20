/*

5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.

*/

const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

function calculaIMC(){
    rl.question("Qual seu peso?\n", (peso) => {
        rl.question("Qual sua altura?\n", (altura) => {

            const pesoFloat = parseFloat(peso);
            const alturaFloat = parseFloat(altura);
            const imc = pesoFloat/(alturaFloat*alturaFloat);
        
            if (imc < 18.5) {
                console.log(`Com um IMC de ${imc} você está abaixo do peso normal.`)
            }
            else if (18.5 <= imc && imc < 25) {
                console.log(`Com um IMC de ${imc} você está com o peso normal.`)
            }
            else if (25 <= imc && imc < 30) {
                console.log(`Com um IMC de ${imc} você está com sobrepeso.`)
            }
            else if (30 <= imc) {
                console.log(`Com um IMC de ${imc} você está com obesidade.`)
            }

            rl.close();
        })
    })
}

console.log('Vamos começar o programa!');
calculaIMC();