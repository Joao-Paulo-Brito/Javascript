// Variáveis
var agora = new Date()
var hora = agora.getHours()
var resposta = window.document.getElementById('res')

resposta.innerText = `Agora são ${hora} horas`

// Condições
if(hora < 12){
    alert("Bom dia!")
}else if(hora < 18){
    alert("Boa tarde!")
}else{
    alert("Boa noite!")
}