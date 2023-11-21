const $ = (id) => document.getElementById(id);

window.onload = function () {
  $("title").addEventListener("blur", function (e) {
    switch (true) {

      case !this.value.trim():
        $("msgError-title").innerHTML = "El nombre es obligatorio";
        break;

      default:
        $("msgError-title").innerHTML = null;
        break;
    }
  });

  $("price").addEventListener("blur", function (e) {
    switch (true) {
        
      case !this.value.trim():
        $("msgError-price").innerHTML = "El precio es obligatorio";
        break;

      default:
        $("msgError-price").innerHTML = null;
        break;
    }
  });

  $("amount").addEventListener("blur", function (e) {
    switch (true) {
        
      case !this.value.trim():
        $("msgError-amount").innerHTML = "La cantidad es obligatorio";
        break;

      default:
        $("msgError-amount").innerHTML = null;
        break;
    }
  });

  $("amountmin").addEventListener("blur", function (e) {
    switch (true) {
        
      case !this.value.trim():
        $("msgError-amountmin").innerHTML = "La cantidad minima es obligatorio";
        break;

      default:
        $("msgError-amountmin").innerHTML = null;
        break;
    }
  });

  $("description").addEventListener("blur", function (e) {
    switch (true) {
        
      case !this.value.trim():
        $("msgError-description").innerHTML = "La descripción es obligatorio";
        break;

        case this.value.trim().length < 20 :
            $('msgError-description').innerHTML = "Minimo 20 caracteres";
            break;

      default:
        $("msgError-description").innerHTML = null;
        break;
    }
  });
};
