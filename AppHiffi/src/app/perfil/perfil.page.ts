import { Component, OnInit } from '@angular/core';
import { HUsuario } from '../interfaces/husuario';
import { FirebaseService } from '../services/firebase.service'
import { database } from 'firebase';
import { userInfo } from 'os';
import { ResultadoshiffiPage } from '../resultadoshiffi/resultadoshiffi.page';
import { stringify } from 'querystring';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
  lblUserName: string;
  lblUserEmpName: string;
  lblUserPuesto: string;
  

  constructor(private firebaseService: FirebaseService) { }

  async ngOnInit() {
    const userData = await this.ObtenerPerfil();
    this.MostrarDatos(userData);
  }

  async ionViewDidEnter() {
    const userData = await this.ObtenerPerfil();
    this.MostrarDatos(userData);
    //this.createGenerateChart();
  }

  ObtenerPerfil(){
      return this.firebaseService.getUserProfileData().then(function(resultado){
      var data: HUsuario;
      data = resultado;
      return data;
      })
  }

  MostrarDatos(data:HUsuario){
    this.lblUserName = data.nombre
    this.lblUserEmpName = data.nombreEmpresa;
    this.lblUserPuesto = data.puesto;
  }


 
}
