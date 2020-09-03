import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { Asistencia } from 'src/app/models/asistencia';
import { Meses } from 'src/app/common/meses.enum';
import * as Highcharts from 'highcharts';



@Component({
  selector: 'app-reporte-asistencias',
  templateUrl: './reporte-asistencias.component.html',
  styleUrls: ['./reporte-asistencias.component.css']
})
export class ReporteAsistenciasComponent implements OnInit {

  meses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  Meses = Meses;
  asistenciasXMes = [];

  constructor(private asistenciaSvc: AsistenciaService) { }

  ngOnInit(): void {
    this.asistenciaSvc.getAllAsistencias().subscribe(asistencias => {
      this.asistenciasXMes = this.meses.map(mes => {
        return { 'name': this.Meses[mes], 'data': [this.calcularAsistenciasPorMes(+mes, asistencias), mes] };
      });
      console.log(this.asistenciasXMes);
      
    });
  }

  calcularAsistenciasPorMes(mes: number, asistencias: Asistencia[]) {
    let lista = asistencias.filter(asistencia => {
      if (new Date(asistencia.fecha).getMonth() == mes)
        return true;
    })
    return lista.length;
  }

  armarChart() {
    
  }

}
