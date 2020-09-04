import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

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

  public consultarPorID(){
    return new Promise<any>((resolve, reject) =>{
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).snapshotChanges();
    })   
  }


  getTasks(document){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser){
          this.afs.collection('people').doc(currentUser.uid).snapshotChanges();
        }
        document.id = currentUser.uid
        
      })
    })
  }

}
