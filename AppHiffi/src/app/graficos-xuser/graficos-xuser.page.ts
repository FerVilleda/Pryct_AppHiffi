import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { FirebaseService } from '../services/firebase.service'
import { Assessment } from '../interfaces/assessment';
//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  respues = new Array();
  act: Assessment;
  constructor(private firebaseService: FirebaseService,  public alertController: AlertController, public router: Router) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Algo salió mal',
      subHeader: 'No encontramos datos',
      message: 'Parece que no has respondido el cuestionario',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigateByUrl("/contenido")
          }
        }, 
        {
          text: 'Cuestionario',
          handler: (cues) => {
            this.router.navigateByUrl("/assessmenthiffi")
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }
  
  openSystem() {
    console.log("hiffibutton")
  }

  obtenRespuestas(){
    return this.firebaseService.obtenerRespuestas().then(function(r){
      var data: Assessment;
      data = r;
      return data;
    })
  }

  async ionViewDidEnter() {
    const act = await this.obtenRespuestas();
    console.log(act);
    if (act != null) {
      this.createBarChart(act.Respuestas);
    }else{
      this.presentAlert();
    }
    
    //this.createGenerateChart();
  }


  createBarChart(datos) {
    this.bars = new Chart(this.barChart.nativeElement,{
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Your responses',
          data: datos,
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

  // createGenerateChart() {
    //this.bars = new Chart(this.generateChart.nativeElement,{
      //type: 'line',
      //data: {
        //labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        //datasets: [{
          //label: 'Your responses',
          //data: [4, 3, 3, 4, 5, 3, 2, 4],
          //backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          //borderColor: 'rgb(39, 69, 204)',// array should have same number of elements as number of dataset
          //borderWidth: 2
       // }]
      //},
      //options: {
        //scales: {
          //yAxes: [{
            //gridLines:{
              //drawBorder: false,
              //color: ['limegreen', 'green', 'yellow', 'pink', 'red']
            //},
            //ticks: {
             // min: 0,
             // max: 5,
             // stepSize: 1  
          //  }
          //}]
       // }
      //}
    //});
  //}

}
