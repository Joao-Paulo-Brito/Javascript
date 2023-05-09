// Função
function carregar(){
    // Variáveis
    var agora = new Date()
    var hora = agora.getHours()
    var resposta = window.document.getElementById('res')
    var img = window.document.querySelector('foto')
    resposta.innerText = `Agora são ${hora} horas`

    // Condições
    if(hora < 12){
        alert("Bom dia!")
        img.src = 'Manhã.png'
    }else if(hora < 18){
        alert("Boa tarde!")
        img.src = 'tarde.png'
    }else{
        alert("Boa noite!")
        img.src = 'img/noite.png'
    }
}