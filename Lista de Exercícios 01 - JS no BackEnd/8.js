/*

8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.

*/

const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

function ordena(){
    rl.question("Digite o número 1:\n", (nmr1) => {
        rl.question("Digite o número 2:\n", (nmr2) => {
            
            let nmrs = [parseFloat(nmr1), parseFloat(nmr2)];

            if (nmrs[0] > nmrs[1]){
                nmrs.reverse();
            }

            console.log(nmrs);

            rl.close();
        })
    })
}

console.log('Vamos começar o programa!');
ordena();