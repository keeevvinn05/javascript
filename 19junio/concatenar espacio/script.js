function concatenar (espacio, veces){
   let resultado = '';
    for (let i = 0; i < veces;i++){
    resultado += espacio;
    }
    return resultado
    }
 console.log(concatenar('kevin   barroso  ', 999));