import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Dias } from 'src/app/common/dias.enum';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Categorias } from 'src/app/common/categorias.enum';
import { Niveles } from 'src/app/common/niveles.enum';

@Component({
  selector: 'app-por-dia',
  templateUrl: './por-dia.component.html',
  styleUrls: ['./por-dia.component.css']
})
export class PorDiaComponent implements OnInit {

  diaFormControl = new FormControl();
  dias = Dias;
  Niveles = Niveles;
  Categorias = Categorias;
  alumnos: [];
  filtrados: boolean = false;
  cargando: boolean = false;
  displayedColumns: string[] = [
    'dni',
    'apellido',
    'nroSocio',
    'nivel',
    'categoria',
    'presente'
  ];
  dataSource = new MatTableDataSource<Alumno>(this.alumnos);
  constructor(private alumnoSvc: AlumnoService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.alumnoSvc.getAllAlumnos().subscribe(data => {
      this.alumnos = data;
    })
  }

  onOptionsSelected() {
  }

  onChange(element) {
  }

  buscarAlumnos() {
    try {
      this.cargando = true;
      let diaSeleccionado: string = Dias[this.diaFormControl.value];
      let filter = this.alumnos.filter((alumno: Alumno) => { return alumno.dias_practica.toUpperCase().includes(diaSeleccionado) });
      this.cargando = false;
      this.dataSource.data = filter;
      this.filtrados = true;
      if (filter.length == 0)
        this.openSnackBar("No hay alumnos registrados :(", "X");
    } catch (err) {
      this.cargando = false;
      this.openSnackBar(err.message, "X");
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
