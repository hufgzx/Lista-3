const prompt = require('prompt-sync')();

function main(){
    
    var N = Number(prompt("Valor de N: "))
    
    for(let i = 1; i!=N; i++){

        if (i%2 == 0) {
            console.log(i);
        }
    }
    console.log('N =',N)
}
main();