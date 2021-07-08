const prompt = require('prompt-sync')();

function main(){
    var j = Number(prompt("Valor de j: "))
    var resp = j

        for(let i=j;i!=0;i--){
            resp = j * i
        console.log(j,"x",i,"=",resp)
        }
    }

main();