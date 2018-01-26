import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the CsalifeltoltesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-csalifeltoltes',
  templateUrl: 'csalifeltoltes.html',
})
export class CsalifeltoltesPage {
  tipus:string
  nev:string
  meret:number
  szin:string
  leiras:string
  kiszereles:number
  allag:string
  marka:string



  constructor(public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CsalifeltoltesPage');
  }
  csalifeltolt() {
    
    this.firebasedb.list("/csalik/")
    .push({
      tipus:this.tipus,
      nev:this.nev,
      marka:this.marka,
      meret:this.meret,
      szin:this.szin,
      leiras:this.leiras,
      kiszereles:this.kiszereles,
      keplink:"",
      approved:0,
      allag:this.allag
    });
}
}
