function contar(){
    // Variáveis
    inicio = documnet.querySelector('div#numinicio')
    fim = document.querySelector('div#numfim')
    passo = document.querySelector('div#numpasso')
    resultado = document.querySelector('div#res')

    // Contagem
    /*
    teste lógico no ínicio
    While(){
        
    }

    teste lógico no final
    do{

    }while()
    */

    while(inicio < fim){
        inicio = inicio + passo
        // Resultado
        resultado.innettext = ` ${inicio} `
    }
}