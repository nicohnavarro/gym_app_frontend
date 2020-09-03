import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { Asistencia } from 'src/app/models/asistencia';
import { Meses } from 'src/app/common/meses.enum';
import { Chart } from 'highcharts';
import { barChart } from 'src/app/helpers/barChartOptions';
import { donutChart } from 'src/app/helpers/donutChartOptions';
import { Niveles } from 'src/app/common/niveles.enum';



@Component({
  selector: 'app-reporte-asistencias',
  templateUrl: './reporte-asistencias.component.html',
  styleUrls: ['./reporte-asistencias.component.css']
})
export class ReporteAsistenciasComponent implements OnInit {

  meses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  Meses = Meses;
  asistenciasXMes = [];
  barChartHelper;
  barChartAsist;
  donutChartHelper;
  donutChartAsist;
  categorias:string[]=[];
  nivel:Niveles;
  niveles = [0, 1, 2, 3];

  constructor(private asistenciaSvc: AsistenciaService) { 
    this.asistenciaSvc.getAllAsistencias().subscribe(asistencias => {
      this.asistenciasXMes = this.meses.map(mes => {
        return { 'mes': this.Meses[mes], 'cantidad': this.calcularAsistenciasPorMes(+mes, asistencias) };
      });
      this.categorias= this.meses.map(aux=> Meses[aux]);
      let dataAsistencias = this.asistenciasXMes.map(mes=>{
        let color:string =this.getRandomColor();
        return {'y':mes.cantidad,'color':color};
      });

      let dataNivel = this.niveles.map(nivel=>{
        let cantidadPorNivel = this.calcularAsistenciasPorNivel(nivel,asistencias);
        return {'name':Niveles[nivel],'y':cantidadPorNivel,'color':this.getRandomColor()}
      })
      let dataAsistenciaTotal = this.asistenciasXMes.map(aux =>{
        return aux.cantidad
      }).reduce((sum=0,cant)=>sum+cant);

      this.barChartHelper = new barChart(dataAsistencias, this.categorias, 'Cantidad de Asistencias Mensuales','container');
      this.barChartAsist = new Chart(this.barChartHelper.opciones);

      this.donutChartHelper = new donutChart(dataNivel,dataAsistenciaTotal.toString(),'container-asistencias');
      this.donutChartAsist = new Chart(this.donutChartHelper.opciones);
      
    });
  }

  ngOnInit(): void {
    
  }

  calcularAsistenciasPorMes(mes: number, asistencias: Asistencia[]) {
    let lista = asistencias.filter(asistencia => {
      if (new Date(asistencia.fecha).getMonth() == mes)
        return true;
    })
    return lista.length;
  }

  calcularAsistenciasPorNivel(nivel:number,asistencias: Asistencia[]){
    let lista = asistencias.filter(asistencia => {
      if (asistencia.nivel_id== nivel)
        return true;
    })
    return lista.length;
  }
  

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


}
