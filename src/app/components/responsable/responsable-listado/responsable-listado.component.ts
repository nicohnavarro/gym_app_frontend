import { Component, OnInit } from '@angular/core';
import { Responsable } from 'src/app/models/responsable';

import { ResponsableService } from 'src/app/services/responsable.service';
@Component({
  selector: 'app-responsable-listado',
  templateUrl: './responsable-listado.component.html',
  styleUrls: ['./responsable-listado.component.css']
})
export class ResponsableListadoComponent implements OnInit {

  responsables:Array<Responsable>;
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'dni',   
    'correo',
    'telefono',
    'editar',
    'borrar'
  ];
  dataSource;

  constructor(private responsableSvc:ResponsableService) { 
    this.responsables=new Array<Responsable>();
  }

  ngOnInit(): void {
    
  }


}