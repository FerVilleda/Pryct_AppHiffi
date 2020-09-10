import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { HUsuario } from '../interfaces/husuario';
import { Assessment } from '../interfaces/assessment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) { }

  //Crear DatosDeUsuario's
  public insertar(datos){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).set(datos)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Obtener la informacion de usuario
  getUserProfileData(){
    return new Promise<HUsuario>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser){
          this.afs.doc<HUsuario>('people/' + currentUser.uid).valueChanges()
          .subscribe(snapshots => {
            resolve(snapshots);
          }, err => {
            reject(err)
          })
        }
      })
    });
  }

  //Insertar respuestas en la base de datos
  public insertarRespuestas(datos){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('AssessmentAnswers/').doc(currentUser.uid).set(datos)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  //Obtener las respuestas del usuario para graficar. 
  obtenerRespuestas(){
    return new Promise<Assessment>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser){
          this.afs.doc<Assessment>('AssessmentAnswers/' + currentUser.uid).valueChanges()
          .subscribe(snapshots => {
            resolve(snapshots);
          }, err => {
            reject(err)
          })
        }
      })
    });
  }

}
