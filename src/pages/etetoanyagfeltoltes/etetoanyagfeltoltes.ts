import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the EtetoanyagfeltoltesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etetoanyagfeltoltes',
  templateUrl: 'etetoanyagfeltoltes.html',
})
export class EtetoanyagfeltoltesPage {
  tipus:string
  nev:string
  szin:string
  leiras:string
  kiszereles:number
  allag:string
  marka:string

  constructor(public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
  }

  etetoanyagfeltolt() {
    
    this.firebasedb.list("/etetoanyagok/")
    .push({
      tipus:this.tipus,
      nev:this.nev,
      marka:this.marka,
      szin:this.szin,
      leiras:this.leiras,
      kiszereles:this.kiszereles,
      keplink:"",
      approved:0,
      allag:this.allag
    });
}

}
