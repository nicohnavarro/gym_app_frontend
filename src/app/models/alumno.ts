import { Persona } from './persona';
import { Niveles } from '../common/niveles.enum';
import { Categorias } from '../common/categorias.enum';

export class Alumno extends Persona {
    id:number;
    fecha_nacimiento:Date;
    nro_socio:number;
    edad:number;
    responsable_id?:number;
    certificado_medico:string;
    nivel_id:Niveles;
    categoria_id:Categorias;
    dias_practica:string;
    cuota:boolean;
}
