// Vetor global
var vet = []

function adicionar(){
    // Variáveis
    var numero = document.getElementById('number').value
    var tab = document.getElementById('tab')
    var item = document.createElement('option')

    // Validação
    if(numero.length == 0){
        window.alert('Digite um número');
    }else if(numero < 1 || numero > 100){
        item.text = 'Errado, digite um número entre 1 e 100'
        tab.appendChild(item)
    }else{
        while(tab.lastChild.textContent === 'Errado, digite um número entre 1 e 100'){
            tab.removeChild(tab.lastChild)
        }
        vet.push(numero)
        item.text = `Número ${numero} adicionado`
        tab.appendChild(item)
    }
}

function finalizar(){
    // Variáveis
    var resposta = document.getElementById('res');
    var frase = document.createElement('p');

    // Apagar conteúdo depois de clicar
    resposta.innerHTML = ''

    // Tamanho do vetor
    if(vet.length == 1){
        /*text Content é todo o texto que será exibido dentro do elemento p no Html*/
        frase.textContent = `Ao todo, existe apenas ${vet.length} número`;
        resposta.appendChild(frase);
    } else {
        frase.textContent = `Ao todo existem ${vet.length} números`;
        resposta.appendChild(frase);
    }
}