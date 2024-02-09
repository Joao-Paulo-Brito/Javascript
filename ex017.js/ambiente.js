var num = [4, 1, 3, 2, 5]

console.log(num)

// Método para dicionar um valor na última posição do vetor
num.push(6)
console.log(`Novo vetor: ${num}`)

// Comprimento do vetor
var posicao = num.length
console.log(`\nO vetor tem ${posicao} posições`)

// Vetor em ordem crescente
num.sort()
console.log(`\nVetor em ordem crescente: ${num}`)

// Elementos do vetor, 1 em 1
console.log("\nElementos do vetor printados de 1 em 1:")
for(var cont=0;cont<num.length;cont++){
    console.log(`Posição ${cont}, valor: ${num[cont]}`)
}

// Novo método de utilizar o for
console.log(`\nOutro método de for:`)
for(var cont in num){
    console.log(num[cont])
}

// Procurar valores no vetor, mostrando sua posição ou index
console.log("\nOnde está o valor 4 ?")
var posicao = num.indexOf(4)

if(posicao == -1){
    console.log("O valor não foi encontrado")
}else{
    console.log(`Está na posição ${posicao}`)
}