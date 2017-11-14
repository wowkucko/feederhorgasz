import { BeallitasokPage } from '../beallitasok/beallitasok';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TofeltoltesPage } from '../tofeltoltes/tofeltoltes';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(private modal: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  openToFeltoltes(){
    const tofeltolt=this.modal.create(TofeltoltesPage);
    tofeltolt.present();
  }
  openBeallitasok(){
    this.navCtrl.push(BeallitasokPage);
  }

}
