//funcion auxiliar que lee y convierte el valor de un input"texto" en un numero

function leerNumero(id){
//obtiene el elemento por su id y extrae su valor como texto

const val = parseFloat(document.getElementById(id).value);
//si el valor no es un numero valido, devuelve null, sino el numero convertido

return isNaN(val) ? null : val;
//verifica si `val`no es un numero para esto usa isNaN, si es asi devuelve un null (para indicar valor invalido)
//si val si es un numero valido devuelve tal cual
//sigifica operador ternario (?:) if...else
}

//1. calcula el perimetro de unn rectangulo
function calcularPerimetro(){
  //lee la base y altura usando la funcion auxiliar
  const b = leerNumero('baseRect');
  const h = leerNumero('alturaRect');
  //si cualquiera de los dos es un null(valor invalido) mostrara esta alerta

  if (b === null || h === null) return  alert('porfaor ingresa valores validos');
  //formula del perimetro; 2 * (base + altura)
  
  const p = 2 * (b + h);
//escribe el resultado en el <p> con id ="resPerimetro"

document.getElementById('resPerimetro').textContent = `perimetro: ${p}`;
} 


//convertir grados celsius a fahrenheit

function convertirFahrenheit(){
  //lee el valor en celsius
  const c = leerNumero('celsius');
  //valida el numero
  if (c === null) return alert('por favor ingrese un valor valido.');
  //formula : (c * 9/5) +32
  const f = (c * 9/5) + 32;
  //mostrar la conversion redondeando a dos decimales
  document.getElementById('resFahrenheit').textContent =
    `${c.toFixed(2)} °C = ${f.toFixed(2)} °F`;
}



function calcularArea(){
  
  const b = leerNumero('basetri');
  const h = leerNumero('alturatri');
  //si cualquiera de los dos es un null(valor invalido) mostrara esta alerta

  if (b === null || h === null) return  alert('porfaor ingresa valores validos');
  //formula del perimetro; 2 * (base + altura)
  
  const p = (b * h) /2;
//escribe el resultado en el <p> con id ="resPerimetro"

document.getElementById('resArea').textContent = `area: ${p}`;
} 

function pedirNumero(id) {
    const valor = document.getElementById(id).value;
    const numero = parseFloat(valor);
    return isNaN(numero) ? null : numero;
  }

  function calcularCircunferencia() {
    const radio = leerNumero('radiocirc');
    if (radio === null || radio <= 0) {
      alert('Por favor ingresa un valor válido para el radio.');
      return;
    }

    const circunferencia = 2 * Math.PI * radio;
    document.getElementById('rescircunferencia').textContent = `Circunferencia: ${circunferencia.toFixed(2)}`;
  }


  

  function calcularPrecioDescuento() {
    const precio = leerNumero('precio');
    const descuento = leerNumero('descuento');

    if (precio === null || precio < 0) {
      alert('Por favor ingresa un precio válido.');
      return;
    }

    if (descuento === null || descuento < 0 || descuento > 100) {
      alert('Por favor ingresa un descuento válido entre 0 y 100.');
      return;
    }

    const precioFinal = precio - (precio * descuento / 100);
    document.getElementById('resprecio').textContent = `Precio final: $${precioFinal.toFixed(2)}`;
  }