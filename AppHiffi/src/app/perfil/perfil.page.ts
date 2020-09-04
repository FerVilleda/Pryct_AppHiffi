import { Component, OnInit } from '@angular/core';
import { HUsuario } from '../interfaces/husuario';
import { FirebaseService } from '../services/firebase.service'
import { database } from 'firebase';
import { userInfo } from 'os';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  document: any = {
    id: "",
    data: {} as HUsuario
  };
  info: HUsuario;
  UserData: HUsuario;
  

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.info = this.hacerConsulta(this.UserData); 
  }

  hacerConsulta(data:HUsuario){
      this.firebaseService.getUserProfileData().then(function(resultado){
      console.log(resultado.nombre);
      data = resultado;
    })
    return data;
  } 


  Pruebas(){
    this.firebaseService.getUserProfileData().then(function(resultado){
    console.log(resultado.nombre);
  })
} 
}
