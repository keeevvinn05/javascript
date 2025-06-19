document.getElementById('calcular-imc').addEventListener('click', function() {
  const alturaCm = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const alturaM = alturaCm / 100;
  const imc = peso / (alturaM * alturaM);

  let categoria = '';
  if (imc < 18.5) {
    categoria = 'bajo de peso';
  } else if (imc < 25) {
    categoria = 'normal';
  } else if (imc < 30) {
    categoria = 'sobrepeso';
  } else {
    categoria = 'obesidad mórbida';
  }

  document.getElementById('imc-result').textContent = 'IMC: ' + imc.toFixed(2) + ' - ' + categoria;
});
