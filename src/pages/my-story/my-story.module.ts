import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyStoryPage } from './my-story';

@NgModule({
  declarations: [
    MyStoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MyStoryPage),
  ],
})
export class MyStoryPageModule {}
