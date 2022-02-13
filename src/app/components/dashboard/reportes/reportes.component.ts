import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Salario, tSalario } from 'src/app/interfaces/usuarios';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  listSalario: Salario[] = []

  chartOptions: any = {
    chart:
    {
      backgroundColor: {
        linearGradient: [500, 500, 500, 500],
        stops: [
          [0, 'rgb(255, 255, 255)'],
        ]
      },
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: []
    },
    credits: {
      enabled: false
    },
    series: [{
      name: '',
      data: []
    }]
  };



  constructor(private _empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.salarioEmpleado();
  }

  salarioEmpleado(){
    this._empleadoService.getSalario().subscribe((data) => {  
      this.listSalario = data
      this.listSalario.map((salario: any) => {
        return new Salario(salario._id, salario._nombre, salario._salario)
      })
      const dataSeries = this.listSalario.map((x: Salario) => x._salario)
      const dataCategorias = this.listSalario.map((x: Salario) => x._nombre)
      
      this.chartOptions.title["text"] = "Salario de empleados"
      this.chartOptions.series[0]["data"] = dataSeries
      this.chartOptions.xAxis["categories"] = dataCategorias
      this.chartOptions.series["name"] = "Empleados"

      Highcharts.chart("salario", this.chartOptions)
    })
  }
}