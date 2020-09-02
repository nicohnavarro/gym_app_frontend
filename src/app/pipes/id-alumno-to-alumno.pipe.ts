import { Pipe, PipeTransform } from '@angular/core';
import { AlumnoService } from '../services/alumno.service';
import { IResponseEntity } from '../models/interfaces/responseEntity';
import { Alumno } from '../models/alumno';

@Pipe({
  name: 'idAlumnoToAlumno'
})
export class IdAlumnoToAlumnoPipe implements PipeTransform {

  constructor(private alumnoSvc: AlumnoService) { }
  transform(idAlumno: number):Promise<string> {
    return this.alumnoSvc.getAlumnoById(idAlumno).toPromise().then(resolve =>{
      return resolve.entity.apellido;
    }).catch(err=>{
      return "No existe el alumno...";
    })
  }

}
