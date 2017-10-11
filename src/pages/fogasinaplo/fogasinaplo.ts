import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { FogasfeltoltesPage } from '../fogasfeltoltes/fogasfeltoltes';
import { AngularFireDatabase } from 'angularfire2/database';

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
  fogasadatok = []
  



  constructor(private modal: ModalController, public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
    
    
    this.firebasedb.list("/fogasok/").subscribe(_data => {
      this.fogasadatok = _data;
    })
  }

  ionViewDidLoad() {
    
  }
  openFeltoltes(){
    let facebookadatok= this.navParams.get('data');
    
    const feltolt=this.modal.create(FogasfeltoltesPage,facebookadatok);
    feltolt.present();
  }

 

}
