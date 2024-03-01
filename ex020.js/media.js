function media(){
    // Variáveis
    var resposta = document.getElementById('resposta')
    var item = document.createElement('p')
    var media = 0
    var desempenho = 'f'
    let usuario = document.getElementById('usuario')
    let item2 = document.createElement('p')

    // Entrada de dados
    var nome = window.prompt("Digite o seu nome: ").trim()

    // Apagar dados anteriores
    resposta.innerHTML = ''

    // Validação
    if(!isNaN(nome) || nome.valueOf == null){  // ! = not
        window.alert('Erro, digite um nome adequado')
        item.innerHTML = 'Aperte o botão acima para calcular a sua média'
        resposta.appendChild(item)
    }else{

        // Nota 1
        while(isNaN(nota1) || nota1 == null || nota1 < 0 || nota1 > 10){
            var nota1 = Number(window.prompt(`Qual foi a nota da sua primeira avaliação, ${nome} ?`))
            if(isNaN(nota1) || nota1 == null || nota1 < 0 || nota1 > 10){
                window.alert('Erro, digite uma nota adequada')
            } 
        }

        // Nota 2
        while(isNaN(nota2) || nota2 == null || nota2 < 0 || nota2 > 10){
            var nota2 = Number(window.prompt(`Qual foi a nota da sua segunda avaliação ?`))
            if(isNaN(nota2) || nota2 == null || nota2 < 0 || nota2 > 10){
                window.alert('Erro. digite uma nota adequada')
            }
        }

        // Cálculo da média
        media = (nota1 + nota2)/2

        // Resultado
        if(media > 6 && media <= 10){
            desempenho = 'APROVADO'
        }else if(media < 7 && media >= 0){
            desempenho = 'REPROVADO'
        }

        // Saída de dados
        item2.innerHTML = `Desempenho de ${nome}:<br><br>`
        usuario.appendChild(item2)

        resposta.style.border = "2px solid white"
        item.innerHTML = `Nota da sua primeira avaliação: ${nota1}<br>`+
                         `Nota da sua segunda avaliação: ${nota2}<br>`+
                         `Sua média: ${media}<br>`+
                         `Você foi ${desempenho}`
        resposta.appendChild(item)

    }
    
}