function verificar(){
    // Variáveis
   var data = new Date()
   var ano = data.getFullYear()
   var ano_de_nascimento = document.getElementById('txtano')
   var resultado = document.querySelector('div#result')

   // Validação da idade
   if(ano_de_nascimento.value == '' || ano_de_nascimento.value == '0'){
     window.alert("Erro, tente novamente!")
   }if(ano_de_nascimento.value <= '1900' && ano_de_nascimento.value > '0'){
     window.alert("Você é um fantasma ?")
     return 0  
   }if(ano_de_nascimento.value >= ano){
     window.alert(`Olá futurista! bem vindo a ${ano}`)
   }else{
     // Variáveis
     var sexo = document.getElementsByName('radsex')
     var secreto = document.getElementsByName('radsec')
     var idade = ano - Number(ano_de_nascimento.value)
     var gênero = ''
     var img = document.createElement("img")
     var src = document.getElementById('foto')

     // Validação do gênero
     resultado.style.textAlign = 'center'
     // Masculino
     if(sexo[0].checked){          
          // Bebê
          if(idade >=0 && idade <= 4){
               img.src = 'img/menino-bebê.jpg'
               gênero = 'bebê'
          }else
          // Criança
          if(idade > 4 && idade <=12){
               img.src = 'img/menino.jpg'
               gênero = 'menino'
          }else 
          // Jovem
          if(idade > 12 && idade <= 17){
               img.src = 'img/homem-jovem.jpg'
               gênero = 'jovem'
          }else 
          // Adulto
          if(idade > 17 && idade <= 59){
               img.src = 'img/homem-adulto.jpg'
               gênero = 'homem'
          }else
          // Idoso
          if(idade > 60){
               img.src = 'img/homem-idoso.jpg'
               gênero = 'idoso'
          }

          // Resultado
          resultado.innerHTML = `Você é um ${gênero} com ${idade} anos de idade`
          src.innerHTML = ''
          src.appendChild(img)
     // Feminino
     }else if(sexo[1].checked){
          // Bebê
          if(idade >=0 && idade <= 4){
               img.src = 'img/menina-bebê.jpg'
               gênero = 'bebê'
          }else
          // Criança
          if(idade > 4 && idade <=12){
               img.src = 'img/menina.jpg'
               gênero = 'menina'
          }else 
          // Jovem
          if(idade > 12 && idade <= 17){
              // Jovem ou Secreto
               if (idade == 17 && secreto[0].checked) {
                    img.src = 'img/sammy.jpg';
                    gênero = 'princesa💖';
               } else {
                    img.src = 'img/mulher-jovem.jpg';
                    gênero = 'jovem';
               }
          }else 
          // Adulto
          if(idade > 17 && idade <= 59){
               img.src = 'img/mulher-adulta.jpg'
               gênero = 'mulher'
          }else
          // Idoso
          if(idade > 60){
               img.src = 'img/mulher-idosa.jpg'
               gênero = 'idosa'
          }
          // Resultado
          resultado.innerHTML = `Você é uma ${gênero} com ${idade} anos de idade`
          src.innerHTML = ''
          src.appendChild(img)
     }
   }
   if(secreto[0].checked){
     var papel_de_parede = document.getElementById('papel-de-parede')
     var formulário = document.getElementById('res')
     secreto[0].checked = false
     papel_de_parede.style.backgroundImage = "url('img/coração.jpg')"
     formulário.style.backgroundColor = '#F5A7E4'
   }else {
     var papel_de_parede = document.getElementById('papel-de-parede');
     var formulário = document.getElementById('res');
     // Remover os comandos específicos aqui
     papel_de_parede.style.backgroundImage = "url('img/background.jpg')"
     formulário.style.backgroundColor = 'white'
   }
}