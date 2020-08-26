import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
isLoggeado:boolean;
  constructor(private usuarioSvc:UsuarioService) { 
    this.isLoggeado = this.usuarioSvc.isLoggeado;
  }

  ngOnInit(): void {
  }

}
