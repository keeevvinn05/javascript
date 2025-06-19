document.getElementById('btnCont').addEventListener('click', ()=>{
let num = Number(document.getElementById('start').value);
const ul = document.getElementById('out4');
//limpia el contenido anterior de la lista para no duplicar resultados
ul.innerHTML = '';
while (num >= 1){
  //crea un nuevo elemento li (item de lista)
  const li = document.createElement('li')
  //le asigna como contenido el numero actual
  li.textContent = num;
  ul.appendChild(li);
  //agrega la etiqueta li como hijo del ul, es deir lo muestra en la lista
  num--;
  //decrementa el numero en 1 (cuenta regresiva)

}







});