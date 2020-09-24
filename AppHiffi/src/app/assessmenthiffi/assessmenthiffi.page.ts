import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FirebaseService } from '../services/firebase.service'
import { Assessment } from '../interfaces/assessment';
import { IonSlides, NumericValueAccessor } from '@ionic/angular';
import { Router } from '@angular/router';

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
  r1; r2; r3; r4; r5; r6; r7;
  
 
  buttonName: string;
  disablePrevBtn = false;
  disableNextBtn = false;
  slideIndex = 0; 
  e: any;

  constructor(private firebaseService: FirebaseService, public router : Router) {
    this.resActual = {} as Assessment;
   }

  ngOnInit() {
    this.buttonName = "Siguiente";
    
  }

  async Next(){
    const idx = await this.slideChanged(this.e);
    if (idx == 6) {
      this.respuestas.push(this.r1,this.r2,this.r3,this.r4,this.r5,this.r6,this.r7);
      console.log(this.respuestas);
      this.resActual.Respuestas = this.respuestas;
      this.firebaseService.insertarRespuestas(this.resActual).then(() => {
        console.log('Respuestas guardadas correctamente');
      }, (error) =>{
        console.error(error);
      });
      this.router.navigateByUrl("/resultadoshiffi");     
    } else {     
      this.slides.slideNext();
    }
  }

  Prev(){
    this.buttonName = "Siguiente";
    this.slides.slidePrev();
  }
  
  async checkValue(event){

    const idx = await this.slideChanged(this.e);
    switch (idx) {
      case 0:
        this.r1 = Number(event.detail.value);
        break;
      case 1:
        this.r2 = Number(event.detail.value);
        break;
      case 2:
        this.r3 = Number(event.detail.value);
        break;
      case 3:
        this.r4 = Number(event.detail.value);
        break;
      case 4:
        this.r5 = Number(event.detail.value);
        break;
      case 5:
          this.r6 = Number(event.detail.value);
          break;
      case 6:
        this.r7 = Number(event.detail.value);
        break;
      default:
        break;
    }
  }


  slideChanged(e: any) {
    return this.slides.getActiveIndex().then((index: number) => {
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
