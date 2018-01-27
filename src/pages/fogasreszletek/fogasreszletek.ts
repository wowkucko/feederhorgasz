import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FogasreszletekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fogasreszletek',
  templateUrl: 'fogasreszletek.html',
})
export class FogasreszletekPage {
  public fogasreszletek={}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fogasreszletek=this.navParams.get("fogasreszletek");
    
  }



}
