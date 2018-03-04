import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SzervezoPage } from './szervezo';

@NgModule({
  declarations: [
    SzervezoPage,
  ],
  imports: [
    IonicPageModule.forChild(SzervezoPage),
  ],
})
export class SzervezoPageModule {}
