import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';
import { FormControl, Validators } from '@angular/forms';
import { Niveles } from 'src/app/common/niveles.enum';
import { Categorias } from 'src/app/common/categorias.enum';

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
  niveles = Niveles;
  categorias = Categorias;
  nombreFormControl = new FormControl('');
  apellidoFormControl = new FormControl('');
  fechaNaFormControl = new FormControl('');
  dniFormControl = new FormControl('');
  categoriaFormControl= new FormControl();
  nivelFormControl= new FormControl();
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  telefonoFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
  ]);


  constructor(public dialogRef: MatDialogRef<AlumnoDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data);
    this.alumnoDetalle=this.data.alumnoDetalle;
    this.setAlumnoDetalle();
    console.log(this.categorias);
  }

  setAlumnoDetalle(){
    this.nombreFormControl.setValue(this.alumnoDetalle.nombre);
    this.nombreFormControl.disable();
    this.apellidoFormControl.setValue(this.alumnoDetalle.apellido);
    this.apellidoFormControl.disable();
    this.fechaNaFormControl.setValue(this.alumnoDetalle.fecha_nacimiento);
    this.fechaNaFormControl.disable();
    this.dniFormControl.setValue(this.alumnoDetalle.dni);
    this.dniFormControl.disable();
    this.telefonoFormControl.setValue(this.alumnoDetalle.telefono);
    this.emailFormControl.setValue(this.alumnoDetalle.correo);
    this.categoriaFormControl.setValue(""+this.alumnoDetalle.categoria_id);
    this.nivelFormControl.setValue(""+this.alumnoDetalle.nivel_id);
    console.log(this.categoriaFormControl.value);
    console.log(this.alumnoDetalle.categoria_id)
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  
  guardarAlumno(){

  }

}
