import { Component, OnInit, ViewChild } from '@angular/core';
import { Responsable } from 'src/app/models/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-responsable-listado',
  templateUrl: './responsable-listado.component.html',
  styleUrls: ['./responsable-listado.component.css']
})
export class ResponsableListadoComponent implements OnInit {

  responsables:Array<Responsable>;
  cargando:boolean=true;
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'dni',   
    'correo',
    'telefono',
    'editar'
  ];
  dataSource = new MatTableDataSource<Responsable>(this.responsables);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private responsableSvc:ResponsableService) { 
    this.responsables=new Array<Responsable>();
  }

  ngOnInit(): void {
    this.responsableSvc.getAllResponsables().subscribe(data => {
      this.responsables = data;
      this.dataSource.data= this.responsables;
      this.dataSource.paginator = this.paginator;
      setTimeout(() => {
        this.cargando=false;
      }, 2000);
     })
  }


}
