import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyStoryAddPage } from '../my-story-add/my-story-add'

/**
 * Generated class for the MyStoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-story',
  templateUrl: 'my-story.html',
})
export class MyStoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  addStory(){
    this.navCtrl.push(MyStoryAddPage);
  }
}
