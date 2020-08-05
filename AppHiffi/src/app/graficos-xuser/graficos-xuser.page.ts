import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graficos-xuser',
  templateUrl: './graficos-xuser.page.html',
  styleUrls: ['./graficos-xuser.page.scss'],
})
export class GraficosXuserPage implements OnInit {
  @ViewChild('barChart') barChart;
  @ViewChild('generateChart') generateChart;

  bars: any;
  colorArray: any;
  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.createBarChart();
    this.createGenerateChart();
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement,{
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Your responses',
          data: [2, 3, 3, 2, 3, 3, 3, 4],
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(39, 69, 204)',// array should have same number of elements as number of dataset
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          yAxes: [{
            gridLines:{
              drawBorder: false,
              color: ['limegreen', 'green', 'yellow', 'pink', 'red']
            },
            ticks: {
              min: 0,
              max: 5,
              stepSize: 1  
            }
          }]
        }
      }
    });
  }

  createGenerateChart() {
    this.bars = new Chart(this.generateChart.nativeElement,{
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Your responses',
          data: [4, 3, 3, 4, 5, 3, 2, 4],
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(39, 69, 204)',// array should have same number of elements as number of dataset
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          yAxes: [{
            gridLines:{
              drawBorder: false,
              color: ['limegreen', 'green', 'yellow', 'pink', 'red']
            },
            ticks: {
              min: 0,
              max: 5,
              stepSize: 1  
            }
          }]
        }
      }
    });
  }

}
