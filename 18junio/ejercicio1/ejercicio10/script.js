document.getElementById('calPrecio').addEventListener('click' , function(){
const km = parseFloat(document.getElementById ('km').value);
//obtiene km como numero
//parseFloat = decimales
const tarifaBase =3;
const costeKM =2.5;
const total = tarifaBase + (costeKM * km)
document.getElementById('taxi-result').textContent = 'precio:' + total.toFixed(2) + '€';

});
  