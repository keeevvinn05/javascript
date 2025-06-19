document.getElementById('btnFruit').addEventListener('click', () => {
  const o = Number(document.getElementById('opt').value);
  let fruta;
  //segun el numero asignamos una fruta
  let imgSrc='';

switch(o){
  case 1:
    fruta = 'manzana';
    imgSrc ='manzana.jpg';
    break
    case 2: 
    fruta = 'banana';
    imgSrc = 'banana.jpg';
    break
    case 3: 
    fruta = 'naranja';
    imgSrc = 'naranja.jpg';
    break
    default:
      fruta = 'tu opcion es igual a mi abuela, no existe';
      imgSrc ='dedo.jpg';
      break
}

document.getElementById('out2').textContent = fruta;
document.getElementById('fruitImages').src=imgSrc;

});
