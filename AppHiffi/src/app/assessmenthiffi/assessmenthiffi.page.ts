import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FirebaseService } from '../services/firebase.service'
import { Assessment } from '../interfaces/assessment';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-assessmenthiffi',
  templateUrl: './assessmenthiffi.page.html',
  styleUrls: ['./assessmenthiffi.page.scss'],
})
export class AssessmenthiffiPage implements OnInit {
  @ViewChild('slides', {static: true}) slides : IonSlides;

  respuestas = new Array();
  res: number;
  Opciones;
  resActual: Assessment;
 
  buttonName: string;
  disablePrevBtn = false;
  disableNextBtn = false;
  slideIndex = 0; 
  e: any;

  constructor(private firebaseService: FirebaseService) {
    this.resActual = {} as Assessment;
   }

  ngOnInit() {
    this.buttonName = "Siguiente";
    
  }

  async Next(){
    const idx = await this.slideChanged(this.e);
    console.log("Index del slide")
    console.log(idx);
    this.respuestas.push(this.res);
    this.resActual.Respuestas = this.respuestas;
    console.log(this.respuestas);
    this.slides.slideNext();
  }
  
  checkValue(event){
    console.log(event.detail.value);
    this.res = Number(event.detail.value);
    return this.res;
  }


  slideChanged(e: any) {
    return this.slides.getActiveIndex().then((index: number) => {
        //console.log(index);
        if (index > 0) {
          this.disablePrevBtn = false;
        }
        return index
    });
  }

  isLast(){
    this.buttonName = "Finalizar";
  }

  isFirst(){
    this.buttonName = "Siguiente";
    this.disablePrevBtn = true;
  }






  
}
