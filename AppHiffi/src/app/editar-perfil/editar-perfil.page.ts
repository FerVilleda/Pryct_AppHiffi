import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { HUsuario } from '../interfaces/husuario';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  usuarioActual : HUsuario;
  lblUserName: string;
  lblUserEmpName: string;
  lblUserPuesto: string;

  constructor( private firebaseService: FirebaseService, public router: Router, public menuCtrl: MenuController) {
    //Crear usuario vacio
    this.usuarioActual = {} as HUsuario;

   }
   clicBotonGuardar(){ 
     this.firebaseService.insertar(this.usuarioActual).then(() => {
       console.log('Datos de usurio guardado correctamente');
       this.router.navigate(['/perfil'])
       this.usuarioActual = {} as HUsuario;
     }, (error) =>{
       console.error(error);
     });  
   }

  async ngOnInit() {
    const userData = await this.ObtenerPerfil();
    if (userData != null) {
      this.MostrarDatos(userData);
    }else{
      console.log("El usuario aun no tiene datos de perfil")
    }
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(true);
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
