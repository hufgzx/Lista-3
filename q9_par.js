const prompt = require('prompt-sync')();

function main(){

    var lim_inf = Number(prompt("Limite inferior: "))
    var lim_sup = Number(prompt("Limite superior: "))

    for(let i=1;i<lim_sup;i++){
        resp = i*2
        
        if(resp>lim_inf && resp<lim_sup){
            console.log(resp)
        }
    }
}
main();