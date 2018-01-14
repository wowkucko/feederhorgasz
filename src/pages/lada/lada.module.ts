import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LadaPage } from './lada';

@NgModule({
  declarations: [
    LadaPage,
  ],
  imports: [
    IonicPageModule.forChild(LadaPage),
  ],
})
export class LadaPageModule {}
