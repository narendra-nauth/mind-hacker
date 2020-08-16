import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CounselingPage } from './counseling';

@NgModule({
  declarations: [
    CounselingPage,
  ],
  imports: [
    IonicPageModule.forChild(CounselingPage),
  ],
})
export class CounselingPageModule {}
