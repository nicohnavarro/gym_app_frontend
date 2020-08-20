import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Responsable } from '../models/responsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(private http:HttpClient) { }

  public getAllResponsables():Observable<any>{
    return this.http.get<any>(environment.API_URL+'responsable/getAll');
  }

  public getResponsableById(id:number){
    return this.http.get<any>(environment.API_URL+`responsable/${id}`)
  }

  public addResponsable(responsable:Responsable){
    return this.http.post(environment.API_URL+'/addResponsable',responsable)
  }

  public deleteResponsable(id:number){
    return this.http.delete(environment.API_URL+'responsable/delete/'+id);
  }
}
