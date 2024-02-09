function multiplicar(){
    // Variáveis
    var numero = document.getElementById('number').value
    var tab = document.getElementById('seltab')
    var multiplicador = 1

    if(numero.length == 0){
        window.alert('Digite um número')
    }else{
        // Loop
        for(var multiplicador = 1; multiplicador <= 10; multiplicador++){
            var item = document.createElement('option')
            item.text = `${numero} x ${multiplicador} = ${numero*multiplicador}`
            tab.appendChild(item)
        }
    } 
}