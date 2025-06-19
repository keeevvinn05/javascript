//1. crear la funcion calcular descuento
function calcularDescuento(precio, descuentoPct){
const ahorro = precio * (descuentoPct/100);
const total = precio - ahorro;
return {ahorro, total};
}

//2. evento de aplicar descuuento

document.getElementById('btnAplicar').addEventListener('click', () => {
//3. leemos valores
    const precio = parseFloat(document.getElementById('precio').value) || 0;
    const pct = parseFloat(document.getElementById('porcentaje').value) || 0;


//4.calculamos y mostramos
    const {ahorro, total} = calcularDescuento(precio, pct);
    document.getElementById('ahorro').textContent = ahorro.toFixed(2);
    document.getElementById('final').textContent = total.toFixed(2);
});