import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/common/categorias.enum';
import { Niveles } from 'src/app/common/niveles.enum';
import { FormControl } from '@angular/forms';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { IResponseEntity } from 'src/app/models/interfaces/responseEntity';

@Component({
  selector: 'app-por-nivel-cat',
  templateUrl: './por-nivel-cat.component.html',
  styleUrls: ['./por-nivel-cat.component.css']
})
export class PorNivelCatComponent implements OnInit {

  niveles = Niveles;
  asistencias:Asistencia[]=[];
  categorias = Categorias;
  categoriaFormControl = new FormControl();
  nivelFormControl = new FormControl();
  alumnos: [];
  cargando: boolean = false;
  displayedColumns: string[] = [
    'dni',
    'apellido',
    'nroSocio',
    'presente'
  ];
  dataSource = new MatTableDataSource<Alumno>(this.alumnos);
  constructor(private alumnoSvc: AlumnoService, private _snackBar: MatSnackBar,private asistenciaSvc:AsistenciaService) { }

  ngOnInit(): void {
  }

  onOptionsSelected() {
  }

  onChange(presente:boolean,element:Alumno) {

    let asistencia = new Asistencia();
    asistencia.alumno_id=element.id;
    asistencia.categoria_id=element.categoria_id;
    asistencia.nivel_id =element.nivel_id;
    asistencia.fecha=new Date();
    if(presente){
      this.asistencias.push(asistencia);
      console.log(this.asistencias);
    }
    else{
      let filtrado = this.asistencias.filter((asistencia)=>{
        if(asistencia.alumno_id != element.id)
        return true;
      });
      this.asistencias = filtrado;
      console.log(this.asistencias);
    }
  }

  buscarAlumnos() {
    try{
      this.cargando = true;
      let nivel: number = this.nivelFormControl.value;
      let cat: number = this.categoriaFormControl.value;
      if (nivel > 0) { cat = 6; }
      else if(cat ==null){throw new Error("La categoria no puede estar vacia!")}
      this.alumnoSvc.getControlAlumnos(nivel, cat).subscribe(data => {
        this.cargando = false;
        if (data.length != 0) {
          this.alumnos = data;
          this.dataSource.data = data;
        }
        else {
          this.alumnos = null;
          this.dataSource.data = data;
          this.openSnackBar("No hay alumnos registrados :(", "X");
        }
      })
    }catch(err){
      this.cargando=false;
      this.openSnackBar(err.message,"X");
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  guardarAsistencia(){
    console.log(this.asistencias);
    this.asistencias.forEach(asistencia => {
      this.asistenciaSvc.addAsistencia(asistencia).subscribe(data=>{
        let response = data as IResponseEntity;
          this.openSnackBar(response.message, 'X');
        }, err => { this.openSnackBar(err, 'X'); });      
    });
  }
}
