import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service'
import { Assessment } from '../interfaces/assessment';

@Component({
  selector: 'app-assessmenthiffi',
  templateUrl: './assessmenthiffi.page.html',
  styleUrls: ['./assessmenthiffi.page.scss'],
})
export class AssessmenthiffiPage implements OnInit {
  respuestas = new Array();
  res: number;
  Opciones;
  resActual: Assessment;

  constructor(private firebaseService: FirebaseService) {
    this.resActual = {} as Assessment;
   }

  ngOnInit() {
  }

  async IntegrarRespuesta(){
    this.respuestas.push(2,3,1,1)
    this.respuestas.push(this.res);
    this.resActual.Respuestas = this.respuestas;
    this.firebaseService.insertarRespuestas(this.resActual).then(() => {
      console.log('Respuestas guardadas correctamente');
    }, (error) =>{
      console.error(error);
    });
  }
  
  checkValue(event){
    console.log(event.detail.value);
    this.res = Number(event.detail.value);
    return this.res;
  }

}
