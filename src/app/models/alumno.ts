import { Persona } from './persona';
import { Responsable } from './responsable';
import { Niveles } from '../common/niveles.enum';
import { Categorias } from '../common/categorias.enum';

export class Alumno extends Persona {
    fecha_nacimiento:Date;
    nro_socio:number;
    edad:number;
    responsable_id?:number;
    certificado_medico:string;
    nivel_id:Niveles;
    categoria_id:Categorias;
    dias_practica:string;
}
