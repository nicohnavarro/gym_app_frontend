import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno-listado',
  templateUrl: './alumno-listado.component.html',
  styleUrls: ['./alumno-listado.component.css'],
  providers: [AlumnoService]
})
export class AlumnoListadoComponent implements OnInit {

  alumnos:Array<Alumno>;
  constructor(private alumnoSvc:AlumnoService) { 
    this.alumnos=new Array<Alumno>();
  }

  ngOnInit(): void {
    this.alumnoSvc.getAllAlumnos().subscribe(data => {
      console.log(data);
    })
  }

}
