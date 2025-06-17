// re-prompt hasta que el numero sea valido
// Funcion auxiliar : pide un numero hasta que la conversion con Number()
// no sea NaN

// Se declara la funcion pedirNumero(mensaje) = prompt(mensaje)
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


    
    // 1) Pedir el primer nùmero (hasta que sea valido)
    const num1 = pedirNumero("Ingrese el primer número");

    // 2) Pedir el segundo numero (hasta que sea valido)
    const num2 = pedirNumero("Ingrese el segundo numero");

    // 3) Calcular la suma

    const suma = num1 + num2;

    // 4) Mostrar mi resultado
    alert(`La suma de ${num1} + ${num2} es : ${suma}`);