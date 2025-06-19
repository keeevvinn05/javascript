//agrega un evento al boton con id btnSum que se ejecuta al hacer click
document.getElementById('btnSum').addEventListener('click', ()=>{

  //obtiene el valor del input con id 'n3'
  //en la variable n
const n = Number(document.getElementById('n3').value);
//inicializa la variable 'suma' en 0; esta servira como un acumulador
let suma = 0;
//bucle que suma todos los numeros del 1 hasta 'n'
for (let i = 1; i <= n; i++){
  //suma = suma + i (acumula a la suma de los numeros)
  suma += i;
}
document.getElementById('out3').textContent = `resultado: ${suma}`;
});