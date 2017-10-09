import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { FogasfeltoltesPage } from '../fogasfeltoltes/fogasfeltoltes';



/**
 * Generated class for the FogasinaploPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fogasinaplo',
  templateUrl: 'fogasinaplo.html',
})
export class FogasinaploPage {

  constructor(private modal: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FogasinaploPage');
  }
  openFeltoltes(){
    const feltolt=this.modal.create(FogasfeltoltesPage);
    feltolt.present();
  }

 

}
