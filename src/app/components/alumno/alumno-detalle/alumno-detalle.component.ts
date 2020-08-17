import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';
import { FormControl, Validators } from '@angular/forms';
import { Niveles } from 'src/app/common/niveles.enum';
import { Categorias } from 'src/app/common/categorias.enum';
import { AlumnoHelper } from 'src/app/helpers/alumno-helper';
import { AlumnoService } from 'src/app/services/alumno.service';
import { IResponseEntity } from 'src/app/models/interfaces/responseEntity';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  diasPractica;
  panelOpenState = false;
  nombreFormControl = new FormControl('');
  apellidoFormControl = new FormControl('');
  fechaNaFormControl = new FormControl('');
  dniFormControl = new FormControl('');
  categoriaFormControl = new FormControl();
  nivelFormControl = new FormControl();
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  telefonoFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
  ]);


  constructor(public dialogRef: MatDialogRef<AlumnoDetalleComponent>,
    private alumnoHelper: AlumnoHelper,
    private alumnoSvc: AlumnoService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.alumnoDetalle = this.data.alumnoDetalle;
    this.setAlumnoDetalle();
    this.diasPractica = this.alumnoDetalle.dias_practica.split("-");
  }

  setAlumnoDetalle() {
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
    this.categoriaFormControl.setValue("" + this.alumnoDetalle.categoria_id);
    this.nivelFormControl.setValue("" + this.alumnoDetalle.nivel_id);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setChangeAlumno() {
    this.alumnoDetalle.correo = this.emailFormControl.value;
    this.alumnoDetalle.telefono = this.telefonoFormControl.value;
    this.alumnoDetalle.nivel_id = +this.nivelFormControl.value;
    this.alumnoDetalle.categoria_id = +this.categoriaFormControl.value;
  }

  onOptionsSelected() {
    this.alumnoHelper.setDiasPractica(this.nivelFormControl.value, this.categoriaFormControl.value, this.alumnoDetalle)
    this.diasPractica = this.alumnoDetalle.dias_practica.split("-");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  guardarAlumno() {
    this.setChangeAlumno();
    this.alumnoSvc.modifyAlumno(this.alumnoDetalle).subscribe(data => {
      let response = data as IResponseEntity;
      this.openSnackBar(response.message, 'X');
      console.log(response);
    }, err => {
      this.openSnackBar(err, 'X');

    });
  }

}
