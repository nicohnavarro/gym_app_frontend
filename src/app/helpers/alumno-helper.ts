import { Alumno } from '../models/alumno';
import { Niveles } from '../common/niveles.enum';
import { Categorias } from '../common/categorias.enum';

export class AlumnoHelper {

  public asignarNivel(alumno: Alumno) {
    if (alumno.edad >= 13 && alumno.edad <= 18) {
      alumno.nivel_id = Niveles.ESCUELITA;
      alumno.categoria_id = Categorias.JUVENILES;
    }
    else if (alumno.edad === 11 || alumno.edad === 12) {
      alumno.nivel_id = Niveles.ESCUELITA;
      alumno.categoria_id = Categorias.INFANTIL;
    }
    else if (alumno.edad === 10 || alumno.edad === 9) {
      alumno.nivel_id = Niveles.ESCUELITA;
      alumno.categoria_id = Categorias.PREINFANTIL;
    }
    else if (alumno.edad === 8 || alumno.edad === 7) {
      alumno.nivel_id = Niveles.ESCUELITA;
      alumno.categoria_id = Categorias.MINI;
    }
    else if (alumno.edad === 6 || alumno.edad === 5) {
      alumno.nivel_id = Niveles.ESCUELITA;
      alumno.categoria_id = Categorias.PREMINI;
    }
    else if (alumno.edad === 4 || alumno.edad === 3) {
      alumno.nivel_id = Niveles.ESCUELITA;
      alumno.categoria_id = Categorias.PULGAS;
    }
    else if (alumno.edad > 21) {
      alumno.nivel_id = Niveles.ESCUELA;
      alumno.categoria_id = Categorias.AVANZADA;
    }
    this.setDiasPractica(alumno.nivel_id, alumno.categoria_id, alumno);
  }

  public calcularEdad(fecha: Date): number {
    if (fecha != null) {
      let diferencia = Math.abs(Date.now() - fecha.getTime());
      let edad = Math.floor((diferencia / (1000 * 3600 * 24)) / 365);
      return edad;
    }
    return 0;
  }

  public setDiasPractica(nivel_id, categoria_id, alumno) {
    if (nivel_id == Niveles.ESCUELITA) {
      switch (+categoria_id) {
        case Categorias.PULGAS:
          alumno.dias_practica = "MIERCOLES-VIERNES";
          break;
        case Categorias.PREMINI:
          alumno.dias_practica = "MIERCOLES-VIERNES";
          break;
        case Categorias.MINI:
          alumno.dias_practica = "MARTES-VIERNES";
          break;
        case Categorias.PREINFANTIL:
          alumno.dias_practica = "LUNES-MIERCOLES";
          break;
        case Categorias.INFANTIL:
          alumno.dias_practica = "LUNES-MIERCOLES";
          break;
        case Categorias.JUVENILES:
          alumno.dias_practica = "LUNES-MIERCOLES";
          break;
        default:
          break;
      }
    }
    else if (nivel_id == Niveles.ESCUELA) {
      categoria_id = Categorias.AVANZADA;
      alumno.dias_practica = "LUNES-MARTES-VIERNES";
    }
    else if (nivel_id == Niveles.PREEQUIPO)
      alumno.dias_practica = "LUNES-MIERCOLES-VIERNES";
    else if (nivel_id == Niveles.EQUIPO)
      alumno.dias_practica = "LUNES-MARTES-MIERCOLES-VIERNES";
  }


  public setCuota(alumno: Alumno): number {
    switch (alumno.nivel_id) {
      case 0:
        return 1000;
        break;
      case 1:
        return 1500;
        break;
      case 2:
        return 2000;
        break;
      case 3:
        return 2500;
        break;
      default:
        break;
    }
  }
}