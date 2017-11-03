import { Loading } from 'ionic-angular/es2015';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Camera } from '@ionic-native/camera';


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
  megye:string
  weboldal:string
  tipus:string
  halfajtak:string
  szolgaltatasleiras:string
  egyeb:string
  tokepmegjelenit
  tokeplink


  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private view: ViewController, private firebasedb: AngularFireDatabase) {
    this.topicref = firebase.storage().ref('/');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TofeltoltesPage');
  }
  tokepValaszt(){
    this.camera.getPicture({
     
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM

    }).then(imgdata => {
      this.toimgdata = imgdata;
      //this.tokepmegjelenit = "data:image/jpeg;base64," + imgdata;
      
    })
  }
  async adatfeltolt() {
    const savedPic = await  this.topicref.child("tokepek").child('pic.jpg')
      .putString(this.toimgdata, 'base64', { contentType: 'image/jpg' });
  
      this.firebasedb.list("/tavak/")
      .push({
        cim:this.cim,
        nev:this.nev,
        keplink: savedPic.downloadURL,
        vizterulet:this.vizterulet,
        facebookurl:this.facebook,
        megye:this.megye,
        weboldal:this.weboldal,
        tipus:this.tipus,
        halfajtak:this.halfajtak,
        szolgaltasleiras:this.szolgaltatasleiras,
        egyeb:this.egyeb,

      });
  }
}
