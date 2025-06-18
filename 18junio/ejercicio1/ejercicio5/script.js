//al hacer click en el boton...
document.getElementById('btnCheck').addEventListener('click', () => {
  // leemos y convertimos el valor del input
  const n = Number(document.getElementById('num').value);
  const out = document.getElementById('out1');

//si el n es mayor que 0 -> positivo; si es menor -> negativo; sino -> cero


if (n > 0){
  out.textContent = 'el numero es POSITIVO';
}else if (n < 0){
  out.textContent = 'el numero es NEGATIVO';
}else {
  out.textContent = 'el numero es CERO';
}
});
