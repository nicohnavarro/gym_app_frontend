import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';

export interface DialogData {
  alumnoDetalle;
}

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit {

  alumnoDetalle;
  constructor(public dialogRef: MatDialogRef<AlumnoDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data);
    this.alumnoDetalle=this.data.alumnoDetalle;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  guardarAlumno(){

  }

}
