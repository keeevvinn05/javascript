
//envia mensaje entrda 1
const entrada1 = prompt("ingresa la base:");



// envia mensaje entrada 2
const entrada2 = prompt("ingresa la altura:");



// NUMBER transforma entrada 1 a NUMBER y asigna a const base
const base = Number(entrada1);
// NUMBER transforma entrada 2 a NUMBER y asigna a const altura
const altura = Number(entrada2);


// calucula el area del triangulo
const triangulo = (base * altura) /2;


alert(`el area de un triangulo: ${triangulo.toFixed(2)}`);


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
