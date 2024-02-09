// Cálculo de fatorial
function fatorial(n){
    let fat = 1
    for(cont = n; cont > 1; cont++){
        fat *= cont
    }

    return fat
}

// 5! = 120
console.log(fatorial(5))