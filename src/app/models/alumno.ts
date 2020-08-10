import { Persona } from './persona';
import { Responsable } from './responsable';
import { Niveles } from '../common/niveles.enum';
import { Categorias } from '../common/categorias.enum';

export class Alumno extends Persona {
    fechaNacimiento:Date;
    nroSocio:number;
    esMenor:boolean;
    edad:number;
    responsable:Responsable;
    certificadoMedico:string;
    nivel:Niveles;
    categoria:Categorias;
    cuota:number
    diasPractica:string;
}
