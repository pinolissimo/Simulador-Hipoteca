/*
Open Boot Camp Reto Diario #2
Giuseppe Allocca
*/
resultado();

function resultado() {
  var fijo = 2.5;
  var variable = 1.5;
  var radio1 = document.getElementById("radio-1");
  var radio2 = document.getElementById("radio-2");
  var check1 = radio1.checked;
  var check2 = radio2.checked;
  var el1 = document.getElementById("cantidad");
  var cantidad = Number(parseInt(el1.value));
  var el2 = document.getElementById("cuotas");
  var cuotas = Number(parseInt(el2.value));

  if (check1 == true) {
    var resultado = (((cantidad * fijo / 100) + cantidad) / cuotas).toFixed(2);
    var target = document.getElementById('resultado');
    target.innerHTML = (resultado + " €");
  } else {
    var resultado = (((cantidad * variable / 100) + cantidad) / cuotas).toFixed(2);
    var target = document.getElementById('resultado');
    target.innerHTML = (resultado + " €");
  }
}
