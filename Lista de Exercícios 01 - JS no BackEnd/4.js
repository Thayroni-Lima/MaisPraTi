/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const readline = require('readline');
const rd = readline.createInterface({input: process.stdin, output: process.stdout})

function escolheNmr(){
    rd.question("Digite um número entre 1 e 3\n", (entrada) => {
        const nmr = parseInt(entrada);
        switch (nmr) {
            case 1:
                console.log(`O digitado foi o número um :D`);
                rd.close();
                break;
            
            case 2:
                console.log(`O digitado foi o número dois :P`);
                rd.close();
                break;
    
            case 3:
                console.log(`O digitado foi o número três :o`);
                rd.close();
                break;
        
            default:
                console.log("Nenhuma opção padrão foi inserida");
                return escolheNmr();
        }
    })
}

escolheNmr()