import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
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
}
