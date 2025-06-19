//1. crear la funcion "obtener tasa"(moneda)

function obtenerTasa(moneda){
  switch (moneda) {
    case 'USD' : return 1.9; // 1EUR =1.09 USD
     case 'GBP' : return 0.85; // 1EUR =0.85 GBP
      case 'JPY' : return 152.34; // 1EUR =152.34 JPY
      default: return 1;
  }
}


//crear otra funcion, convertir: multiplica cantidad x tasa de cambio
function convertir(cantidad, tasa){
  return cantidad * tasa;
}

//guardamos en una const la referencia al boton
const btnConvertir = document.getElementById('btnConvertir');


//tambien guardamos la referencia al span (resulatdo)
const spanResultado = document.getElementById('resultado')

btnConvertir.addEventListener('click', function(){
  //lee la cantidad d eel input y lo parseamos a float
let cantidad = parseFloat(document.getElementById('cantidad').value);
//leemos ña mpneda seleccionada en el select
let moneda = (document.getElementById('moneda').value);

//obtener tasa de moneda

let tasa = obtenerTasa(moneda);
//calculamos el resultado con la funcion convertir
let resultado = convertir(cantidad, tasa);

//formateamos el resultado con dos decimales y mostramos
spanResultado.textContent = resultado.toFixed(2)  + ' ' + moneda;

});