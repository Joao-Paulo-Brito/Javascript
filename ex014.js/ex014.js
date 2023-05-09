// Função
function carregar(){
    // Variáveis
    var agora = new Date()
    var hora = agora.getHours()
    var resposta = window.document.getElementById('res')

    // Imagem
    var img = document.createElement("img")
    var src = document.getElementById('foto')

    resposta.innerText = `Agora são ${hora} horas`

    // Condições
    if(hora < 12){
        alert("Bom dia!")
        img.src = 'img/Manhã.png'
        src.appendChild(img)
    }else if(hora < 18){
        alert("Boa tarde!")
        img.src = 'img/tarde.png'
        src.appendChild(img)
    }else{
        alert("Boa noite!")
        img.src = "img/noite.png"
        src.appendChild(img)
    }
}