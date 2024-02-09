function contar(){
    // Variáveis
    var inicio = parseInt(document.getElementById('numinicio').value)
    var fim = parseInt(document.getElementById('numfim').value)
    var passo = parseInt(document.getElementById('numpasso').value)
    var resultado = document.getElementById('res')
    var contador = 0

    // Apagar a contagem interior
    resultado.innerText = ''

    // Contagem
    /*
    teste lógico no ínicio
    While(){
        
    }

    teste lógico no final
    do{

    }while()
    */

     // Verificar se os campos são válidos
     /*NaN significa "Não é um número", nesse caso, "se a variável não é um número, então faça isso"*/
     if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) { 
        resultado.innerText = 'Por favor, preencha os campos corretamente.';
        return;
    }

    // Iniciando contagem
    if(inicio < fim){
        resultado.innerHTML = 'Contagem progressiva <br>Iniciando a contagem: <br>'
        contador = inicio
        // Contagem progressiva
        while(contador <= fim){
            resultado.innerText += ` ${contador} `
            contador += passo
        }
    }else{
        resultado.innerHTML = 'Contagem regressiva <br>Iniciando a contagem: <br>'
        // Contagem regressiva
        for(contador=inicio;contador>=fim;contador-=passo){
            resultado.innerText += ` ${contador} `
        }
    }
}