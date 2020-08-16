import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyStoryDetailPage } from './my-story-detail';

@NgModule({
  declarations: [
    MyStoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MyStoryDetailPage),
  ],
})
export class MyStoryDetailPageModule {}
