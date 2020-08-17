import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import {Categorias} from 'src/app/common/categorias.enum'
import {Niveles} from 'src/app/common/niveles.enum'
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AlumnoDetalleComponent } from '../alumno-detalle/alumno-detalle.component';
import { AlumnoBorradoComponent } from '../alumno-borrado/alumno-borrado.component';
@Component({
  selector: 'app-alumno-listado',
  templateUrl: './alumno-listado.component.html',
  styleUrls: ['./alumno-listado.component.css'],
  providers: [AlumnoService]
})
export class AlumnoListadoComponent implements OnInit {

  alumnos:Array<Alumno>;
  Niveles = Niveles;
  Categorias = Categorias;
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'dni',   
    'correo',
    'telefono',
    'nroSocio',
    'edad',
    'nivel',
    'categoria',
    'cuota',
    'editar',
    'borrar'
  ];
  dataSource;

  constructor(private alumnoSvc:AlumnoService,public dialog: MatDialog) { 
    this.alumnos=new Array<Alumno>();
  }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(){
    this.alumnoSvc.getAllAlumnos().subscribe(data => {
      this.alumnos = data;
      this.dataSource= this.alumnos;
     })
  }

  openDialog(component,options?): void {
    const dialogRef = this.dialog.open(component, options);

    dialogRef.afterClosed().subscribe(result => {
      this.getAlumnos();
    });
  }

  editarAlumno(alumno){
    this.openDialog(AlumnoDetalleComponent,{
      width: '60%',
      height: 'auto',
      maxHeight: '60%',
      data: {alumnoDetalle:alumno}});
  }

  eliminarAlumno(alumno){
    this.openDialog(AlumnoBorradoComponent,{
      width: '25%',
      data: {alumno:alumno}});
  }

}
