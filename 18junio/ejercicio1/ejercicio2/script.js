//2. switch

const diaNum = Number(prompt("dia de la semana(1-7:"));
let nombreDia;
switch (diaNum) {
  case 1:
    nombreDia = "Lunes";
    break;
    case 2:
      nombreDia = "martes";
      break;
      case 3: 
      nombreDia = "miercoles";
      break;
      case 4:
        nombreDia = "jueves";
        break;
        case 5:
    nombreDia = "viernes";
    break;
    case 6:
    nombreDia = "sabado";
    break;
    case 7:
    nombreDia = "domingo";
    break;
    default:
      nombreDia: "numero de dia invalido"
}
console.log(nombreDia);
