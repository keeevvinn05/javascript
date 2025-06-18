//while (conocemos el numero de interaciones)
// let contador = 1;
// while (contador <= 10){
//   console.log(contador);
//   contador++;


// do...while (si no conocemos cuantas veces iteraccionamos)
let num;
do{
  num = Number(prompt("ingresa un numero mayor   que 10:"));
}while (num <= 10);
console.log("gracias! ingresaste: ", num);