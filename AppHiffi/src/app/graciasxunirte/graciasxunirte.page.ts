import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-graciasxunirte',
  templateUrl: './graciasxunirte.page.html',
  styleUrls: ['./graciasxunirte.page.scss'],
})
export class GraciasxunirtePage implements OnInit {

  constructor( public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

}
