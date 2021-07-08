const prompt = require('prompt-sync')();

function main(){
    
    var A = Number(prompt("Valor inicial da PG: "))
    var maximo = Number(prompt("Número máximo da PG: "))
    var r = Number(prompt("Razão da PG: "))
    var resp = A

    for(let i = 0;i<maximo;i++){
        resp = resp*r

        if(resp<maximo){
            console.log(resp)
        }
    }
}
main();