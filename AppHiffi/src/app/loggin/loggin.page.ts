import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class LogginPage implements OnInit {
  user : User = new User();
  constructor( private router: Router, private authSvc:AuthService) { }

  ngOnInit() {
  }

  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    
    if (user) {
      console.log('Inicio de sesion exitoso');
      this.router.navigateByUrl('/contenido');
    }
  }

}
