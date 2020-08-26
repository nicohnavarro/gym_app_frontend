import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pago } from '../models/pago';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private http:HttpClient) { }

  public getAllPagos():Observable<any>{
    return this.http.get<any>(environment.API_URL+'pago/getAll');
  }

  public getPagoById(id:number){
    return this.http.get<any>(`pago/${id}`);
  }

  public addPago(pago:Pago){
    return this.http.post(environment.API_URL+'pago/add',pago);
  }
}
