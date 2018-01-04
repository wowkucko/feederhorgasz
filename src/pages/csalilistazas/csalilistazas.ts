import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the CsalilistazasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-csalilistazas',
  templateUrl: 'csalilistazas.html',
})
export class CsalilistazasPage {
  bojlicsalik= []
  pelletcsalik=[]
  mucsalik=[]
  elocsalik=[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase) {
    this.firebasedb.list("/csalik/").subscribe(_data => {
      this.bojlicsalik = _data.filter(item =>
        item.approved == "1" && item.tipus == "Bojli"
      );

      this.pelletcsalik = _data.filter(item =>
        item.approved == "1" && item.tipus == "Pellet"
      );
      this.mucsalik = _data.filter(item =>
        item.approved == "1" && item.tipus == "Mű"
      );
      this.elocsalik = _data.filter(item =>
        item.approved == "1" && item.tipus == "Élő"
      );
    })
  }

  ionViewDidLoad() {

  }

}
