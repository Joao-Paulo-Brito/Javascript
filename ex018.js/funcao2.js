/*
function soma(n1, n2){
    return n1 + n2
}

// 2 e 2 são os parametros para n1 e n2
console.log(soma(2, 2))
*/
// n1 e n2 iguais a 0 significa que caso o usuário não dê os parâmetros, automaticamente n1 e n2 valem 0
function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(2))