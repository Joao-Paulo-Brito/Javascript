// Vetor global
var vet = []

function adicionar(){
    // Variáveis
    var resposta = document.getElementById('res');
    var numero = Number(document.getElementById('number').value)
    var tab = document.getElementById('tab')
    var item = document.createElement('option')

    resposta.innerHTML = ''

    // Validação
    if(numero === 0){
        window.alert('Digite um número');
    }else if(numero < 1 || numero > 100){
        item.text = 'Errado, digite um número entre 1 e 100'
        tab.appendChild(item)
    }else{
        // Remover aviso de erro
        while(tab.lastChild.textContent === 'Errado, digite um número entre 1 e 100'){
            tab.removeChild(tab.lastChild)
        }

        // Adicionando valores
        vet.push(numero)
        item.text = `Número ${numero} adicionado`
        tab.appendChild(item)
    }
}

function finalizar(){
    // Variáveis
    var resposta = document.getElementById('res');
    var frase = document.createElement('p');

    // Variáveis para os valores do vetor
    var tamanho = vet.length
    var maior = Math.max(...vet)
    let menor = Math.min(...vet)
    let soma = vet.reduce((total, numero) => total + parseInt(numero), 0)
    // Reduce tem a mesma função do for, para somar os valores do vetor, estabelecendo duas variáveis que vão ser somandas, o "total" que é o valor anterior dentro do vetor que será iterado com o "numero", que é o valor atual dentro do vetor, sendo que o "total" inicia com valor 0
    /* É a mesma coisa de:
        var soma = 0;
        for(contador=0;contador<vet.lengh;contador++){
            vet[contador] += soma
        }
    */
   var media = soma/tamanho

    // Apagar conteúdo depois de clicar
    resposta.innerHTML = ''

    // Validação
    if(vet.length == 0){
        window.alert('Digite um número');
    }else{
        // Tamanho do vetor
        if(vet.length == 1){
            /*text Content é todo o texto que será exibido dentro do elemento p no Html*/
            frase.innerHTML = `Ao todo, existe apenas ${tamanho} número<br>` +
                            `Maior valor do vetor: ${maior}<br>` +
                            `Menor valor do vetor: ${menor}<br>` +
                            `A soma de todos os valores é: ${soma}<br>` +
                            `A média dos valores do vetor é: ${media}`;
            resposta.appendChild(frase);
        } else {
            // Saída de dados
            frase.innerHTML = `Ao todo, existem ${tamanho} números<br>` +
                            `Maior valor do vetor: ${maior}<br>` +
                            `Menor valor do vetor: ${menor}<br>` +
                            `A soma de todos os valores é: ${soma}<br>` +
                            `A média dos valores do vetor é: ${media}`;
            resposta.appendChild(frase);
        }
    }
}

function apagar(){
    // Variáveis
    var resposta = document.getElementById('res');
    var numero = Number(document.getElementById('number').value)
    var tab = document.getElementById('tab')

    // Validação
    if(numero === 0){
        window.alert("Digite um número")
    }else{
        // Deletar texto
        tab.innerHTML = ''
        resposta.innerHTML = ''

        // Apagando os elementos do vetor
        vet = []
    }

}