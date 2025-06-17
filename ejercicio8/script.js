

const entrada1 = prompt("ingresa precio original:");




const entrada2 = prompt("ingresa descuento:");




const original = Number(entrada1);
const descuento = Number(entrada2);



const precio = original+descuento/100;


alert(`el precio final: ${precio.toFixed(2)}`);


function pedirNumero(mensaje){
    // nombrando una variable valor (blanco)
    let valor;
    // generamos un bucle do - while
    do {
        //const entrada recibe de prompt(mensaje)= Lo que usuario ingrese
        const entrada = prompt(mensaje);
        // valor sera igual entrada transformado en numero
        valor = Number(entrada);
        //Si valor no es un numero
        if (Number.isNaN(valor)){
            alert("Entrada no válida. Por favor, ingresa un nùmero.")
        }
      // Mientras valor no sea un numero
    } while (Number.isNaN(valor));
        return valor;
    }