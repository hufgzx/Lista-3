const prompt = require('prompt-sync')();

function main(){

    var N = Number(prompt("Valor de N: "))

    for(let i = 1; i != N; i++){
    
    console.log(i)
    }
    console.log('N =',N)
}
main();