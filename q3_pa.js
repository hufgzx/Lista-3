const prompt = require('prompt-sync')();

function main(){
    
    var A = Number(prompt("Valor inicial da PA: "))
    var maximo = Number(prompt("Número máximo da PA: "))
    var r = Number(prompt("Razão da PA: "))
    var resp = 0

    for(i=A; resp<maximo; i++){
        resp = A+(i-1)*r
        console.log(resp)
    }
}
main();