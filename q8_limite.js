const prompt = require('prompt-sync')();

function main(){

    var n = Number(prompt("Valor para N: "))
    var lim_inf = Number(prompt("Limite inferior: "))
    var lim_sup = Number(prompt("Limite superior: "))

    var resp = 0

    for(let i=0;i<lim_sup;i++){
        resp = i * n
    
        if(resp>lim_inf && resp<lim_sup){
            console.log(resp)
        }
    }
}
main();