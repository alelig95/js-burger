// Il primo problema è che dobbiamo far apparire un alert quando non viene scelto nessun nome del Burger;
// Il secondo problema è far apparire un alert se l'utente seleziona meno di due ingredienti;
// Il terzo problema è calcolare il prezzo finale del panino a seconda degli ingredienti scelti;
// Il quarto problema è applicare il 20% di sconto se l'utente digita uno dei coupon ideonei per ricevere lo sconto;
var costoIngrediente = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input');
costoTotale = 0;
var costoTotaleHTML = document.getElementById('price-output');
var listaCoupon = ['1HRPLBNR', '1CSUBNJG', '1DRTBNHP', '1TXCJGTR'];
var inputCoupon = document.getElementsByClassName('coupon')[0];


document.getElementById("pulsante-calcolo").addEventListener("click", function() {

      costoTotale = 0;

      for(var i = 0; i < costoIngrediente.length; i++) {
        if(costoIngrediente[i].checked) {
          costoTotale += parseInt(costoIngrediente[i].value);
        }
      }

      var sconto = (costoTotale * 20) / 100;

      if(inputCoupon.value === listaCoupon[i]) {
        costoTotale = costoTotale - sconto;
      }

      costoTotaleHTML.innerText = costoTotale;
    });
