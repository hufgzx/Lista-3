const prompt = require('prompt-sync')();

function main(){

    var soma = 0
    var resposta = 0
    var n = Number(prompt("Informe o valor de N: "))

    for(let i=1;i!=n;i++){
        soma = soma + (1/i)
        resposta = soma
    }
    console.log(resposta)
}
main();