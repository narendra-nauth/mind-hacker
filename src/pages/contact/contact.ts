import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  subject: string;
  message: string;

  constructor(public navCtrl: NavController) {

  }

  openEmailComposer(){
    console.log("Sending Email");
  }
}
