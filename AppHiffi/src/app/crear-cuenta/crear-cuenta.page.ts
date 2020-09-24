import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {
  user: User = new User();
  constructor( private authSvc: AuthService, private router: Router, private menuCtrl: MenuController, public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Algo salió mal',
      subHeader: 'Verifica tus datos',
      message: 'El e-mail no cumple con el formato o la contraseña es demasido corta, debe tener al menos 6 caracteres.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {  
  }

  //Register
  async onRegister(){

    const user = await this.authSvc.onRegister(this.user);
    if (user) {
      console.log('Se ha creado el usuario exitosamente');
      this.router.navigateByUrl('/graciasxunirte');
    }
    else {
      this.presentAlert();
    }
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

}
