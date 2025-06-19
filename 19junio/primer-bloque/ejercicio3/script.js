function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function etiquetaIMC(imc) {
  if (imc < 18.5) return 'bajo peso';
  if (imc < 25) return 'normal';
  if (imc < 30) return 'sobrepeso';
  return 'obesidad';
}

document.getElementById('btnCalcular').addEventListener('click', function() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const alturaM = altura / 100;  

  const imc = calcularIMC(peso, alturaM);
  const categoria = etiquetaIMC(imc);

  document.getElementById('imcVal').textContent = imc.toFixed(2);
  document.getElementById('imcEtiqueta').textContent = categoria;
});
