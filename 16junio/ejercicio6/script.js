let numerocuenta = "12345"
let dinero = 200; 
let saldo = 1000; 
const cuentavalida ="12345";
if(numerocuenta === cuentavalida){
  saldo = saldo + dinero;
  console.log("deposito exitoso. nuevo saldo es :", saldo);
} else {
  console.log("cuenta no valida. regrese dinero:(", dinero)
}



  