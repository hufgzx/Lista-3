const prompt = require('prompt-sync')();

function main(){

    var numero = 0;
    var n = Number(prompt("Número de elementos(N): "))

    console.log("Sequência: ");

    for (let i=1;i<=n;i++) {
        numero = numero+i;
        
        console.log(numero);
    }
}
main();