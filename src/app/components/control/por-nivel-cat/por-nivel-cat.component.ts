import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/common/categorias.enum';
import { Niveles } from 'src/app/common/niveles.enum';
import { FormControl } from '@angular/forms';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-por-nivel-cat',
  templateUrl: './por-nivel-cat.component.html',
  styleUrls: ['./por-nivel-cat.component.css']
})
export class PorNivelCatComponent implements OnInit {

  niveles = Niveles;
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
  constructor(private alumnoSvc: AlumnoService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onOptionsSelected() {
  }

  onChange(element) {
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

}
