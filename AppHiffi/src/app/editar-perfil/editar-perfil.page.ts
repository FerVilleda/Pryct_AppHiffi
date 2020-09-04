import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { HUsuario } from '../interfaces/husuario';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  usuarioActual : HUsuario;

  constructor( private firebaseService: FirebaseService) {
    //Crear usuario vacio
    this.usuarioActual = {} as HUsuario;
   }
   clicBotonGuardar(){
     this.firebaseService.insertar(this.usuarioActual).then(() => {
       console.log('Datos de usurio guardado correctamente');
       this.usuarioActual = {} as HUsuario;
     }, (error) =>{
       console.error(error);
     });  
   }

  ngOnInit() {
  }

}
