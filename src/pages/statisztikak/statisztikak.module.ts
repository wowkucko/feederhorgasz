import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisztikakPage } from './statisztikak';

@NgModule({
  declarations: [
    StatisztikakPage,
  ],
  imports: [
    IonicPageModule.forChild(StatisztikakPage),
  ],
})
export class StatisztikakPageModule {}
