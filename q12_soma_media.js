const prompt = require('prompt-sync')();

function main(){

    var media = 0
    var soma = 0
    var numero = 0
    var n = Number(prompt("Número de elementos(N): "))

    for(let i=1;i<N+1;i++){
        numero = Number(prompt(`Informe o número ${i} da lista: `))
        soma = soma + numero
    }
    media = soma/n
    
    console.log("Soma:",soma,"\nMédia:",media)
}
main();