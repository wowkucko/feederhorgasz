import { ToreszletekPage } from '../toreszletek/toreszletek';
import { HelyekProvider } from '../../providers/helyek/helyek';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the TerkeplistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terkeplista',
  templateUrl: 'terkeplista.html',
})
export class TerkeplistaPage {
  constructor(public navCtrl: NavController, public locations: HelyekProvider) {

  }
  
   ionViewDidLoad() {
     
   }
   openReszletek(location){
    this.navCtrl.push(ToreszletekPage, {
      terkepreszletek: location
    });
   }
  
 }
