import { Component, OnInit } from '@angular/core';
import { HUsuario } from '../interfaces/husuario';
import { FirebaseService } from '../services/firebase.service'

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

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  consultando(){
    this.firebaseService.getTasks(document)
  }
}
