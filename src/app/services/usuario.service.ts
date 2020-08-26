import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../models/interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  isLoggeado:boolean=false;

  public loginUsuario(usuario:IUsuario){
    return this.http.post(environment.API_URL+'usuario/login',usuario);
  }
}
