const prompt = require('prompt-sync')();

function main(){
    var N = Number(prompt("Valor para N: "))
    var resul = 0
    
    for(let i=0;i<N;i++){
        resul = resul + i
    }
    console.log(resul-1)
}
main();