import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
isLoggeado:boolean;
  constructor(private usuarioSvc:UsuarioService,private router:Router) { 
    this.isLoggeado = this.usuarioSvc.isLoggeado;
  }

  ngOnInit(): void {
  }

  logOut(){
    this.usuarioSvc.isLoggeado=false;
    this.isLoggeado=false;
    this.router.navigate(['/login']);
  }

}
