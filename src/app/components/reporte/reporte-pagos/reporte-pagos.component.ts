import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { donutChartOptions } from 'src/app/helpers/donutChartOptions';

@Component({
  selector: 'app-reporte-pagos',
  templateUrl: './reporte-pagos.component.html',
  styleUrls: ['./reporte-pagos.component.css']
})
export class ReportePagosComponent implements OnInit {

  donutChart = new Chart(donutChartOptions);
  constructor() { }

  ngOnInit(): void {
  }

}
