import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message: string;
  clicked: number;

  constructor(public navCtrl: NavController) {
    this.clicked = 0;
  }

  setMessage(){
    this.clicked ++;
  }
}
