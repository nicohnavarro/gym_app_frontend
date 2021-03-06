import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  public getAllAlumnos():Observable<any>{
    return this.http.get<any>(environment.API_URL+'alumno/getAll');
  }

  public getAlumnoById(id:number){
    return this.http.get<any>(`${environment.API_URL}alumno/${id}`);
  }

  public addAlumno(alumno:Alumno){
    return this.http.post(environment.API_URL+'alumno/add',alumno);
  }

  public deleteAlumno(id:number){
    return this.http.delete(environment.API_URL+'alumno/delete/'+id);
  }

  public modifyAlumno(alumno:Alumno){
    return this.http.put(environment.API_URL+'alumno/modify',alumno);
  }

  public getControlAlumnos(nivel:number,cat:number){
    return this.http.get<any>(`${environment.API_URL}alumno/control/${nivel}/${cat}`);
  }
}
