import { Options } from 'highcharts';

export class barChart {

  data= [
    { y: 20},
    { y: 14 },
    { y: 25 },
    { y: 40},
    { y: 50, color: '#ffe8df' },
    { y: 46 },
    { y: 30 },
    { y: 60 },
    { y: 100, color: '#fc5185' },
    { y: 90 },
    { y: 60 },
    { y: 70 },
  ];
  categorias=[
    'Ene',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ];
  opciones:Options;

  constructor(data,categorias,title,render){
    this.data = data;
    this.categorias = categorias;
    this.opciones  = {
      chart: {
        type: 'bar',
        renderTo: render,
      },
      credits: {
        enabled: false,
      },
      title: {
        text: title,
      },
      yAxis: {
        visible: false,
        gridLineColor: '#fff',
      },
      legend: {
        enabled: false,
      },
      xAxis: {
        lineColor: '#fff',
        categories: this.categorias,
      },
    
      plotOptions: {
        series: {
          borderRadius: 5,
        } as any,
      },
    
      series: [
        {
          type: 'bar',
          color: '#506ef9',
          data:this.data,
        },
      ],
    };

  }

}

