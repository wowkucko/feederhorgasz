import { TabsPage } from '../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the BeallitasokPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beallitasok',
  templateUrl: 'beallitasok.html',
})
export class BeallitasokPage {
 
  city: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {
    
      this.storage.get('hely').then((val)=>{
        if(val!=null){
          let hely=JSON.parse(val);
          this.city=hely.city;

        } else{
          this.city='Budapest';
        }
      });
  }
  mentesForm(){
    let hely={
      city: this.city
    }
    this.storage.set('hely', JSON.stringify(hely));
    this.navCtrl.push(TabsPage);
  }

}
