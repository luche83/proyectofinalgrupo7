const $ = id => document.getElementById(id);

window.onload = function(){

    $('title').addEventListener('focus', function(e) {
        $('msgError-title').innerHTML = "Escriba el nombre del producto"
    })
    
    $('title').addEventListener('blur', function(e) {
        $('msgError-title').innerHTML = ""
    })
    
    $('price').addEventListener('focus', function(e) {
        $('msgError-price').innerHTML = "Elegir un buen precio"
    })
    
    $('price').addEventListener('blur', function(e) {
        $('msgError-price').innerHTML = ""
    })
    
    $('discount').addEventListener('focus', function(e) {
        $('msgError-discount').innerHTML = "Pon un descuento adecuado"
    })
    
    $('discount').addEventListener('blur', function(e) {
        $('msgError-discount').innerHTML = ""
    }) 

    $('amount').addEventListener('focus', function(e) {
        $('msgError-amount').innerHTML = "Coloque la cantidad disponible"
    })
    
    $('amount').addEventListener('blur', function(e) {
        $('msgError-amount').innerHTML = ""
    })
    
    $('amountmin').addEventListener('focus', function(e) {
        $('msgError-amountmin').innerHTML = "Coloque la cantidad minima disponible"
    })
    
    $('amountmin').addEventListener('blur', function(e) {
        $('msgError-amountmin').innerHTML = ""
    })
    
    $('description').addEventListener('focus', function(e) {
        $('msgError-description').innerHTML = "Es necesaria una descripción"
    })
    
    $('description').addEventListener('blur', function(e) {
        $('msgError-description').innerHTML = ""
    }) 

}

