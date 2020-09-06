import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { PagoService } from 'src/app/services/pago.service';
import { Niveles } from 'src/app/common/niveles.enum';
import { Pago } from 'src/app/models/pago';
import { barChart } from 'src/app/helpers/barChartOptions';
import { donutChart } from 'src/app/helpers/donutChartOptions';

@Component({
  selector: 'app-reporte-pagos',
  templateUrl: './reporte-pagos.component.html',
  styleUrls: ['./reporte-pagos.component.css']
})
export class ReportePagosComponent implements OnInit {


  niveles = [0, 1, 2, 3];
  data = [];
  categorias: string[] = [];
  meses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  barChartHelper;
  barChartPagos;
  donutChartHelper;
  donutChartPagos;
  pagosXNivel = [];

  constructor(private pagoSvc: PagoService) { }

  ngOnInit(): void {
    this.pagoSvc.getAllPagos().subscribe(pagos => {
      this.pagosXNivel = this.niveles.map(nivel => {
        return { 'nivel': Niveles[nivel], 'pagos': this.calcularPagosPorNivel(nivel, pagos) }
      })
      this.categorias = this.niveles.map(aux => Niveles[aux]);
      let dataPago = this.pagosXNivel.map(nivel => {
        // let color: string = this.setColorBars(nivel.pagos.cantidad_pagos)
        // let color :string = this.setColorDonut(nivel.nivel);
        let color :string = this.getRandomColor()
        return { 'y': nivel.pagos.cantidad_pagos, 'color': color }
      });
      let dataNivel = this.pagosXNivel.map(nivel => {
        // let color = this.setColorDonut(nivel.nivel)
        let color :string = this.getRandomColor()
        return {'name':nivel.nivel,'y':nivel.pagos.total,'color':color}
      })
      let totalFinal= dataNivel.map(data =>{
        return data.y;
      }).reduce((sum=0,monto)=> sum+monto);

      this.barChartHelper = new barChart(dataPago, this.categorias, 'Cantidad de Pagos por Niveles','container-pagos');
      this.barChartPagos = new Chart(this.barChartHelper.opciones);
      this.donutChartHelper = new donutChart(dataNivel,'$ '+totalFinal,'container-pagos');
      this.donutChartPagos = new Chart(this.donutChartHelper.opciones);
    })
  }

  setColorBars(num: number) {
    if (num > 20)
      return '#ffffff'
    else if (num > 10)
      return '#393e46'
    else if (num > 5)
      return '#00adb5'
    else
      return '#506ef9'
  }

  
  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setColorDonut(nivel: string) {
    switch (nivel) {
      case 'ESCUELITA':
        return '#ffffff';
      case 'ESCUELA':
        return '#393e46';
      case 'PREEQUIPO':
        return '#00adb5';
      case 'EQUIPO':
        return '#506ef9';
      default:
        break;
    }

  }

  calcularPagosPorNivel(nivel: number, pagos: Pago[]) {
    let lista = pagos.filter(pago => {
      if (pago.nivel_id == nivel)
        return true;
    })
    if (lista.length > 0) {
      let total = lista.map((pago) => { return pago.monto }).reduce((sum = 0, monto) => sum + monto);
      return { 'total': total, 'cantidad_pagos': lista.length };
    }
    else {
      return { 'total': 0, 'cantidad_pagos': 0 }
    }
  }

  calcularPagosPorMes(mes: number, pagos: Pago[]) {
    let lista = pagos.filter(pago => {
      if (new Date(pago.fecha).getMonth() == mes)
        return true;
    })
    return lista.length;
  }



}
