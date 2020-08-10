import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Niveles } from 'src/app/common/niveles.enum';
import { Categorias } from 'src/app/common/categorias.enum';
import { Alumno } from 'src/app/models/alumno';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imagen1='../../../assets/recetamedica.png';
  imagen1Subir:any;
  esMenor:boolean = false;

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

  obtieneImagen1(e){
    this.imagen1=e.result;
  }
  archivoSubir1(e){
    this.imagen1Subir=e;
  }

  registrarAlumno(){
    console.log(this.calcularEdad(this.fechaNaFormControl.value));
    if(this.calcularEdad(this.fechaNaFormControl.value)<18){
      this.esMenor=true;
    }
    let alumnoJson= {
      nombre:this.nombreFormControl.value,
      apellido:this.apellidoFormControl.value,
      fechaNacimiento:this.fechaNaFormControl.value,
      dni:this.dniFormControl.value,
      correo:this.emailFormControl.value,
      telefono:this.telefonoFormControl.value,
      nroSocio:this.nroSocioFormControl.value,
      esMenor:this.esMenor,
      edad:this.calcularEdad(this.fechaNaFormControl.value),
      tutorNombre:this.nombreRespFormControl.value,
      tutorApellido:this.apellidoRespFormControl.value,
      tutorDni:this.dniRespFormControl.value,
      tutorCorreo:this.emailFormControl.value,
      tutorTelefono:this.telefonoRespFormControl.value,
      certificadoMedico:this.imagen1,
      nivel:"",
      categoria:"",
      diasPractica:"",
      cuota:"",
    }
    console.log(alumnoJson);
    let alumno = new Alumno();
  }

  limpiarCampos(){
    this.nombreFormControl.reset();
    this.apellidoFormControl.reset();
    this.fechaNaFormControl.reset();
    this.dniFormControl.reset();
    this.emailFormControl.reset();
    this.telefonoFormControl.reset();
    this.nroSocioFormControl.reset();
    this.esMenor=false;
    this.nombreRespFormControl.reset();
    this.apellidoRespFormControl.reset();
    this.dniRespFormControl.reset();
    this.emailRespFormControl.reset();
    this.telefonoRespFormControl.reset();
  }

  private  calcularEdad(fecha:Date):number{
    let diferencia = Math.abs(Date.now() - fecha.getTime());
    let edad = Math.floor((diferencia / (1000 * 3600 * 24))/365);
    return edad;
  }

  asignarNivel(alumno){
    if(alumno.edad>=13 && alumno.edad<=18){
      alumno.nivel = Niveles.ESCUELITA;
      alumno.categoria = Categorias.JUVENILES;
      alumno.diasPractica = "Lunes-Miercoles";
    }
    else if(alumno.edad ===11 || alumno.edad ===12){
      alumno.nivel = Niveles.ESCUELITA;
      alumno.categoria = Categorias.INFANTIL;
      alumno.diasPractica = "Lunes-Miercoles";
    }
    else if(alumno.edad ===10 || alumno.edad ===9){
      alumno.nivel = Niveles.ESCUELITA;
      alumno.categoria = Categorias.PREINFANTIL;
      alumno.diasPractica = "Lunes-Miercoles";
    }
    else if(alumno.edad ===8 || alumno.edad ===7){
      alumno.nivel = Niveles.ESCUELITA;
      alumno.categoria = Categorias.MINI;
      alumno.diasPractica = "Martes-Viernes";
    }
    else if(alumno.edad ===6 || alumno.edad ===5){
      alumno.nivel = Niveles.ESCUELITA;
      alumno.categoria = Categorias.PREMINI;
      alumno.diasPractica = "Miercoles-Viernes";
    }
    else if(alumno.edad ===4 || alumno.edad ===3){
      alumno.nivel = Niveles.ESCUELITA;
      alumno.categoria = Categorias.PULGAS;
      alumno.diasPractica = "Miercoles-Viernes";
    }
    else if(alumno.edad > 21){
      alumno.nivel = Niveles.ESCUELA;
      alumno.categoria = Categorias.AVANZADA;
      alumno.diasPractica = "Lunes-Martes-Viernes";
    }
  }

  asignarCuota(alumno){
    switch (alumno.nivel) {
      case Niveles.ESCUELITA:
        alumno.cuota=1000;
      break;

      case Niveles.ESCUELA:
        alumno.cuota=1500;
      break;
      
      case Niveles.PREEQUIPO:
        alumno.cuota=2000;
      break;
      
      case Niveles.EQUIPO:
        alumno.cuota=2500;
      break;

      default:
        break;
    }
  }

}
