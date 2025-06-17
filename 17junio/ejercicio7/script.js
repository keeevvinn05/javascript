

const entrada1 = prompt("ingresa la circunferencia:");








const radio = Number(entrada1);




const circunferencia = 2 * radio * (Math.PI)


alert(`la longitud de una circunferencia: ${circunferencia.toFixed(2)}`);


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
