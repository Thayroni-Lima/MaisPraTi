/*

13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let contador = 0;

function tirarMedia(){
    console.log("Digite o 1° número:");

    rl.on('line', (input) => {
        let nmr = parseFloat(input);
        console.log(nmr);
        
        if (nmr == 0 && contador == 0) {
            console.log("O primeiro número não pode ser zero. Reiniciando...\n");
            tirarMedia();
        }
        else if (nmr != 0) {
            console.log(`Digite o ${contador + 2}° número`);
            soma += parseFloat(input);
            contador++;
        }
        else {
            console.log(`A média é ${(soma/contador).toFixed(2)}`);
            rl.close();
        }
    })
}

tirarMedia();