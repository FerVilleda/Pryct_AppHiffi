import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class LogginPage implements OnInit {
  user : User = new User();
  constructor( private router: Router, private authSvc:AuthService, public menuCtrl: MenuController, public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Algo salió mal',
      subHeader: 'Verifica tus datos',
      message: 'El e-mail o la contraseña son incorrectos.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    
    if (user) {
      console.log('Inicio de sesion exitoso');
      this.router.navigateByUrl('/contenido');
    }else{
      this.presentAlert();
    }
  }
  
  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

}
