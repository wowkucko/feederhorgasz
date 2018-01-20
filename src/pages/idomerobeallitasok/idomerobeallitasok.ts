import { IdomeroPage } from '../idomero/idomero';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the IdomerobeallitasokPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-idomerobeallitasok',
  templateUrl: 'idomerobeallitasok.html',
})
export class IdomerobeallitasokPage {
  dobasietap

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
    this.storage.get('idomerouserido').then((val)=>{
      if(val!=null){
        let idomerouserido=val;
        this.dobasietap=idomerouserido;

      } else{
        this.dobasietap=10;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdomerobeallitasokPage');
  }

  
  mentesForm(){
    
    this.storage.set('idomerouserido',parseInt(this.dobasietap));
    this.navCtrl.push(IdomeroPage);
  }
}
