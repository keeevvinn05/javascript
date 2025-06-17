//1. pedir la primera nota
//prompt() siempre devuelve un string
//let / variable que cambia (condicionales)
//const / variable constante, no cambia
//var / no usar

const entrada1 = prompt("ingresa la primera nota:");

//2.pedir segunda nota


const entrada2 = prompt("ingresa la segunda nota:");

//3.pedir tercera nota


const entrada3 = prompt("ingresa la tercera nota:");

//4. convertimos cada entrada de string a number
//si la conversion falla resultara un NaN

const nota1 = Number(entrada1);
const nota2 = Number(entrada2);
const nota3 = Number(entrada3);

//5. calculamos el promedio
const promedio = (nota1 + nota2 + nota3) /3;

//6. mostramos el resultado con alert()
//utilizar un toFixed(2)
alert(`el promedio de las tres notas es: ${promedio.toFixed(2)}`);
