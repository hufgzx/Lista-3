const prompt = require('prompt-sync')();

function main(){
    
    var numero = Number(prompt("Número que será caculado o fatorial: "))
    var resp = numero
    var x = numero

    for(let i=numero;i!=0;i--){
        x--

        if(x!=0){
            resp = resp*x
        }
    }
    console.log("O fatorial de",numero,"é:",resp)
}
main();