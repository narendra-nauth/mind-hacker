import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyStoryAddPage } from './my-story-add';

@NgModule({
  declarations: [
    MyStoryAddPage,
  ],
  imports: [
    IonicPageModule.forChild(MyStoryAddPage),
  ],
})
export class MyStoryAddPageModule {}
