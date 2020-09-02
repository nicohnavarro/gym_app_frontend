import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Asistencia } from '../models/asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http: HttpClient) { }

  public getAllAsistencias():Observable<any>{
    return this.http.get<any>(environment.API_URL+'asistencia/getAll');
  }
  public getAsistenciaByDate(date:Date){
    return this.http.get<any>(`${environment.API_URL}asistencia/${date}`);
  }

  public addAsistencia(asistencia:Asistencia){
    return this.http.post(environment.API_URL+'asistencia/add',asistencia);
  }


}
