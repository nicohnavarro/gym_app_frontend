import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Alumno } from '../models/alumno';
import { IAlumno } from '../models/interfaces/Alumno';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  public getAllAlumnos():Observable<any>{
    return this.http.get<any>('http://localhost:8080/getAllAlumnos');
  }

  public getAlumnoById(id:number){
    return this.http.get<any>(`/alumno/${id}`)
  }

  public addAlumno(alumno:Alumno){
    console.log(alumno);
    this.http.post('http://localhost:8080/addAlumno',alumno)
    .subscribe(data =>{
      console.log(data);
    },err =>{console.log(err);})
  }

  
}
