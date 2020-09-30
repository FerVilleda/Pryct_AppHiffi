import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {

  constructor( private menuCtrl: MenuController, private iab: InAppBrowser) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(true);
  }

  toggleMenu(){
    this.menuCtrl.toggle("primerMenu");
  }

  openSystem(){
    const browser = this.iab.create('https://hiffi-group-academy.thinkific.com/courses/holistic-strategic-innovation','_system');
  }

  openFramework(){
    const browser = this.iab.create('https://www.hiffigroup.org/framework/','_system');
  }

}
