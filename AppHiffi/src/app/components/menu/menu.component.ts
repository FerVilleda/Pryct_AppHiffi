import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private authSvc: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {}

  onLogout(){
    console.log('Sesion cerrada');
    this.afAuth.signOut();
    this.router.navigateByUrl('/loggin');
  }
}
