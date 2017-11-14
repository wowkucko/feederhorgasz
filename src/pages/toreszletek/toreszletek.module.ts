import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToreszletekPage } from './toreszletek';

@NgModule({
  declarations: [
    ToreszletekPage,
  ],
  imports: [
    IonicPageModule.forChild(ToreszletekPage),
  ],
})
export class ToreszletekPageModule {}
