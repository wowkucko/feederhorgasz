import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytoPage } from './myto';

@NgModule({
  declarations: [
    MytoPage,
  ],
  imports: [
    IonicPageModule.forChild(MytoPage),
  ],
})
export class MytoPageModule {}
