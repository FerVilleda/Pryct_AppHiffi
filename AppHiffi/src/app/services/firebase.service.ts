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

  //No funciona, consultar por ID
  public consultarPorID(){
    return new Promise<any>((resolve, reject) =>{
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).snapshotChanges();
    })   
  }

  //No funciona, GetTasks
  getTasks(document){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser){
          this.afs.collection('people').doc(currentUser.uid).snapshotChanges();
        }
      })
    })
  }

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

  uploadImage(imageURI, randomId){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child(randomId);
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          snapshot.ref.getDownloadURL()
          .then(res => resolve(res))
        }, err => {
          reject(err);
        })
      })
    })
  }

}
