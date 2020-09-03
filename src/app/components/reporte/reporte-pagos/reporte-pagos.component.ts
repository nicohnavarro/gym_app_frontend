import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { donutChartOptions } from 'src/app/helpers/donutChartOptions';
import { PagoService } from 'src/app/services/pago.service';
import { Niveles } from 'src/app/common/niveles.enum';
import { Pago } from 'src/app/models/pago';
import { areaChartOptions } from 'src/app/helpers/areaChartOptions';
import { barChart} from 'src/app/helpers/barChartOptions';

@Component({
  selector: 'app-reporte-pagos',
  templateUrl: './reporte-pagos.component.html',
  styleUrls: ['./reporte-pagos.component.css']
})
export class ReportePagosComponent implements OnInit {

  donutChart = new Chart(donutChartOptions);
  areaChart = new Chart(areaChartOptions);
  niveles =[0,1,2,3,4];
  data=[];
  categorias=[];
  meses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  barChartHelper = new barChart(this.data,this.categorias,'Pagos');
  barChart = new Chart(this.barChartHelper.opciones);

  constructor(private pagoSvc:PagoService) { }

  ngOnInit(): void {
    this.pagoSvc.getAllPagos().subscribe(pagos=>{
      console.log(pagos);
      console.log(this.calcularPagosPorNivel(1,pagos));

    })
  }

  calcularPagosPorNivel(nivel:number,pagos:Pago[]){
    let lista = pagos.filter(pago =>{
      if(pago.nivel_id == nivel)
        return true;
    })
    let total = lista.map((pago)=>{return pago.monto}).reduce((sum=0,monto) => sum+monto);
    return {'total':total,'cantidad_pagos':lista.length};
  }

  calcularPagosPorMes(mes:number,pagos:Pago[]){
    let lista = pagos.filter(pago => {
      if (new Date(pago.fecha).getMonth() == mes)
        return true;
    })
    return lista.length;
  }



}
