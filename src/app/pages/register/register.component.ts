import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Niveles } from 'src/app/common/niveles.enum';
import { Categorias } from 'src/app/common/categorias.enum';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Responsable } from 'src/app/models/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IResponseEntity } from 'src/app/models/interfaces/responseEntity';
import { AlumnoHelper } from 'src/app/helpers/alumno-helper';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private alumnoSvc: AlumnoService, private responsableSvc: ResponsableService, private _snackBar: MatSnackBar, private alumnoHelper:AlumnoHelper) { }

  ngOnInit(): void {
  }

  alumno: Alumno = new Alumno();
  responsable: Responsable = new Responsable();
  imagen1 = '../../../assets/recetamedica.png';
  imagen1Subir: any;
  esMenor: boolean = false;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  //#region FormControls
  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);

  apellidoFormControl = new FormControl('', [
    Validators.required,
  ]);

  fechaNaFormControl = new FormControl('', [
    Validators.required,
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  dniFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(8),
  ]);

  telefonoFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
  ]);

  nroSocioFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(4),
    Validators.minLength(4),
  ]);

  nombreRespFormControl = new FormControl('', [
    Validators.required,
  ]);

  apellidoRespFormControl = new FormControl('', [
    Validators.required,
  ]);

  emailRespFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  dniRespFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(8),
  ]);

  telefonoRespFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
  ]);
  //#endregion

  //#region Img
  obtieneImagen1(e) {
    this.imagen1 = e.result;
  }
  archivoSubir1(e) {
    this.imagen1Subir = e;
  }
  //#endregion

  registrarAlumno() {
    if (this.validarCampos()) {
      if (this.alumnoHelper.calcularEdad(this.fechaNaFormControl.value) < 18)
        this.esMenor = true;

      if (this.esMenor) {
        this.cargarResponsable();
        this.responsableSvc.addResponsable(this.responsable).subscribe(data => {
          let response = data as IResponseEntity;
          this.openSnackBar(response.message, 'X');
          this.alumno.responsable_id = response.entity.id;
        }, err => { this.openSnackBar(err, 'X'); });
      }

      this.cargarAlumno();
      this.alumnoSvc.addAlumno(this.alumno).subscribe(data => {
        let response = data as IResponseEntity;
        this.openSnackBar(response.message, 'X');
        this.alumno.responsable_id = response.entity.id;
      }, err => {
        this.openSnackBar(err, 'X');
        //TODO delete responsable 
      });
    }
  }

  private cargarAlumno() {
    this.alumno.nombre = this.nombreFormControl.value;
    this.alumno.apellido = this.apellidoFormControl.value;
    this.alumno.dni = this.dniFormControl.value;
    this.alumno.correo = this.emailFormControl.value;
    this.alumno.telefono = this.telefonoFormControl.value;
    this.alumno.fecha_nacimiento = this.fechaNaFormControl.value;
    this.alumno.nro_socio = this.nroSocioFormControl.value;
    this.alumno.edad = this.alumnoHelper.calcularEdad(this.fechaNaFormControl.value);
    this.alumno.certificado_medico = this.imagen1;
    this.alumnoHelper.asignarNivel(this.alumno);
    
  }

  private cargarResponsable() {
    this.responsable.nombre = this.nombreRespFormControl.value;
    this.responsable.apellido = this.apellidoRespFormControl.value;
    this.responsable.dni = this.dniRespFormControl.value;
    this.responsable.correo = this.emailRespFormControl.value;
    this.responsable.telefono = this.telefonoRespFormControl.value;
  }

  limpiarCampos() {
    this.nombreFormControl.reset();
    this.apellidoFormControl.reset();
    this.fechaNaFormControl.reset();
    this.dniFormControl.reset();
    this.emailFormControl.reset();
    this.telefonoFormControl.reset();
    this.nroSocioFormControl.reset();
    this.esMenor = false;
    this.nombreRespFormControl.reset();
    this.apellidoRespFormControl.reset();
    this.dniRespFormControl.reset();
    this.emailRespFormControl.reset();
    this.telefonoRespFormControl.reset();
  }

  private validarCampos() {
    let retorno: boolean = true;
    if (this.nombreFormControl.untouched && this.fechaNaFormControl.untouched) {
      this.openSnackBar("Debe completar todos los campos!", "X");
      retorno = false;
    }
    return retorno;
  }



  asignarCuota(alumno) {
    switch (alumno.nivel) {
      case Niveles.ESCUELITA:
        alumno.cuota = 1000;
        break;

      case Niveles.ESCUELA:
        alumno.cuota = 1500;
        break;

      case Niveles.PREEQUIPO:
        alumno.cuota = 2000;
        break;

      case Niveles.EQUIPO:
        alumno.cuota = 2500;
        break;

      default:
        break;
    }
  }

  necesitaResponsable(value) {
    if (value != null && this.alumnoHelper.calcularEdad(value) >= 18) {
      this.esMenor = false;
    }
    else {
      this.esMenor = true;
    }
  }


}
