function contarVocales(cadena) {
  const Vocales = 'aeiouAEIOU';
  let contador = 0;
  for (let char of cadena) {
    if (Vocales.includes(char)) contador++;
  }
  return contador;}
    console.log("contraVocales('hola mundo') =", contarVocales('hola mundo'));
  
