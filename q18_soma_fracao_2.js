const prompt = require('prompt-sync')();

function main(){

    var soma = 0
    var resposta = 0
    var n = Number(prompt("Informe o valor de N: "))

    for(let i=0;i!=n;i++){
        soma = soma + (i+1)/(n-i)
        resposta = soma
    }
    console.log(resposta)
}
main();