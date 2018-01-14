import { ToreszletekPage } from './../toreszletek/toreszletek';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the MytoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myto',
  templateUrl: 'myto.html',
})
export class MytoPage {
  mytavak= []
  facebookadatok=[]
  hozzaadas:boolean
  torles:boolean
  constructor(public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
    this.firebasedb.list("/mytavak/").subscribe(_data => {
      this.mytavak = _data.filter(item =>
        item.useremail == this.navParams.get("facebookadatok").facebookemail
      );
    })
    if(this.navParams.get("oldalnev")!=null){
      this.hozzaadas=false;
      this.torles=true;
    }
    else{
      this.hozzaadas=true;
      this.torles=false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytoPage');
  }
  openMytoreszletek(item){
    this.navCtrl.push(ToreszletekPage, {
      mytoreszletek: item
    });
  }

  addFogashoz(item){
    
    this.navCtrl.pop().then(() => {
      this.navParams.get('callback')(item);
    });
  }
  deleteLadabol(item){
    this.firebasedb.list("/mytavak/").remove(item.$key);
  }
}
