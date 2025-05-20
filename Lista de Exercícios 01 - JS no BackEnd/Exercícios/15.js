/*

15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.

*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(){
    rl.question("Até qual índice da sequência de Fibonacci você quer?\n", (input) => {

        const nmr = parseInt(input);
        let sequencia = [0, 1];
    
        if (nmr <= 0) {
            console.log('Isso não é uma entrada válida. Tentando novamente...\n\n\n');
            return fibonacci();
        }
        else if (nmr <= 2 && nmr > 0) {
            sequencia = sequencia.slice(0, nmr);
        }
        else {
            for (let i = 1; i <= (nmr - 2); i++) {
                sequencia.push(NovoElemento(sequencia));
                console.log(`Adicionado o ${sequencia[sequencia.length - 1]}`);
            }
        }

        visualizarSequencia(sequencia);
    
        rl.close();
    })
}

function NovoElemento (array){
    let ultimoElemento = array.length - 1;
    let penultimoElemento = array.length - 2;

    return array[ultimoElemento] + array[penultimoElemento];
}

function visualizarSequencia(array){
    for(let i = 0; i < array.length; i++){
        console.log(`${i + 1}° = ${array[i]}`)
    }
}

fibonacci();