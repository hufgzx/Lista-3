const prompt = require('prompt-sync')();

function main(){

    var numero = 0
    var m_numero = 0
    var n = Number(prompt("Número de elementos(N): "))

    for(let i=1;i<n+1;i++){
        numero = Number(prompt(`Informe o número ${i} da lista: `))

        if(numero>m_numero){
            m_numero = numero
        }
    }
    console.log("O maior número é:",m_numero)
}
main();