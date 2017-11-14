import { Loading } from 'ionic-angular/es2015';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the TofeltoltesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tofeltoltes',
  templateUrl: 'tofeltoltes.html',
})
export class TofeltoltesPage {

  cim:any
  nev:string
  topicref:any
  toimgdata:any
  vizterulet:number
  facebook:any
  weboldal:string
  tipus:string
  halfajtak:string
  szolgaltatasleiras:string
  egyeb:string
  megye:string
  tel:string

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private firebasedb: AngularFireDatabase) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TofeltoltesPage');
  }
  adatfeltolt() {
      
      var megyemappa=this.megye;
      this.firebasedb.list("/tavak/")
      .push({
        cim:this.cim,
        nev:this.nev,
        megye:this.megye,
        vizterulet:this.vizterulet,
        facebookurl:this.facebook,
        weboldal:this.weboldal,
        tipus:this.tipus,
        halfajtak:this.halfajtak,
        szolgaltasleiras:this.szolgaltatasleiras,
        egyeb:this.egyeb,
        keplink:"",
        keplink2:"",
        keplink3:"",
        keplink4:"",
        keplink5:"",
        lat:"",
        long:"",
        approved:0,
        tel:""

      });
  }
}
