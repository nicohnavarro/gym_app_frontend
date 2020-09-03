import { Options } from 'highcharts';

export class donutChart {

    opciones: Options;
    data = [
        { name: 'a', y: 1, color: '#ffffff' },
        { name: 'b', y: 2, color: '#393e46' },
        { name: 'c', y: 3, color: '#00adb5' },
        { name: 'd', y: 4, color: '#506ef9' }
    ]


    constructor(data,total: string,render) {
this.data=data;
        this.opciones = {
            chart: {
                type: 'pie',
                plotShadow: false,
                renderTo:render
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    innerSize: '99%',
                    borderWidth: 40,
                    borderColor: null,
                    slicedOffset: 20,
                    dataLabels: {
                        connectorWidth: 0
                    }
                }
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: total
            },
            legend: {
                enabled: false,
            },
            series: [
                {
                    type: 'pie',
                    data: this.data
                }
            ]
        }

    }
}