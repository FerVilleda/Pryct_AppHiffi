import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {
  user: User = new User();
  constructor( private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  //Register
  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    if (user) {
      console.log('Se ha creado el usuario exitosamente');
      this.router.navigateByUrl('/graciasxunirte');
    }
  }

}
