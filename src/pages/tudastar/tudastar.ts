import { EtetoanyaglistazasPage } from '../etetoanyaglistazas/etetoanyaglistazas';
import { CsalilistazasPage } from '../csalilistazas/csalilistazas';
import { TolistazasPage } from '../tolistazas/tolistazas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TudastarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tudastar',
  templateUrl: 'tudastar.html',
})
export class TudastarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  openTolistazas(){
    this.navCtrl.push(TolistazasPage,this.navParams.data);
  }
  openCsalik(){
    this.navCtrl.push(CsalilistazasPage,this.navParams.data);
  }
openEtetoanyagok(){
  this.navCtrl.push(EtetoanyaglistazasPage,this.navParams.data);
}
}
