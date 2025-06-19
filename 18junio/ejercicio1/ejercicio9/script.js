document.getElementById('btnGuess').addEventListener('click', ()=>{
let intento;
//hacemos al menos un prompt y repetimos hasta que sea 'hola'




do{
  intento = prompt('ingresa la palabra:');
}while(intento !== 'mejillon')


  document.getElementById('out5').textContent = 'Correcto'

   document.getElementById('imgCorrect').style.display = 'block'





});