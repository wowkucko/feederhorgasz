import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdomeroPage } from './idomero';

@NgModule({
  declarations: [
    IdomeroPage,
  ],
  imports: [
    IonicPageModule.forChild(IdomeroPage),
  ],
})
export class IdomeroPageModule {}
