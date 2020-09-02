import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { donutChartOptions } from 'src/app/helpers/donutChartOptions';
import { PagoService } from 'src/app/services/pago.service';
import { Niveles } from 'src/app/common/niveles.enum';
import { Pago } from 'src/app/models/pago';

@Component({
  selector: 'app-reporte-pagos',
  templateUrl: './reporte-pagos.component.html',
  styleUrls: ['./reporte-pagos.component.css']
})
export class ReportePagosComponent implements OnInit {

  donutChart = new Chart(donutChartOptions);
  nivel =Niveles;
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

}
