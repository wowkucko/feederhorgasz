import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events} from 'ionic-angular';
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
  
 



  constructor(private event:Events,private modal: ModalController, public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
    console.log('Passed params', navParams.data);
    
    this.firebasedb.list("/fogasok/").subscribe(_data => {
      
      this.fogasadatok = _data.filter(item => item.useremail == this.navParams.get("facebookemail"));
      

    })
  }

  ionViewDidLoad() {
    
  }
  openFeltoltes(){
    ;
    
    const feltolt=this.modal.create(FogasfeltoltesPage,this.navParams.data);
    feltolt.present();
  }


}