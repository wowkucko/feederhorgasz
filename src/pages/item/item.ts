import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  public hiradatok={};
  myDate: String = new Date().toISOString();
  bejegyzesszovege:string;
  kommentek=[];
  kommenteloneve:string;
  kommenteloavatar:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase) {
    this.hiradatok=this.navParams.get("hiradatok");
    
    this.firebasedb.list("/cikkmegjegyzesek/").subscribe(_data => {
      
      this.kommentek = _data.filter(item => item.bejegyzesid == this.navParams.get("hiradatok").id);
      

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

  kommentelkuld(){
    this.firebasedb.list("/cikkmegjegyzesek/")
    .push({
      kommenteloneve:this.navParams.get("facebookadatok").facebooknev,
      kommenteloavatar:this.navParams.get("facebookadatok").facebookprofilkep,
      kommentido:this.myDate,
      bejegyzesid:this.navParams.get("hiradatok").id,
      bejegyzesszovege:this.bejegyzesszovege

      

    });
  }

}
