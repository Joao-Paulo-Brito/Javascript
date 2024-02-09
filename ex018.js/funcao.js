/*Função*/ 
function parimpar(n){
    if(n%2 == 0){
        return `O número ${n} é par`
    }else{
        return `O número ${n} é ímpar`
    }
}

// Chamada da função
var resposta = parimpar(4) // 4 = n
console.log(resposta)

console.log(parimpar(3))