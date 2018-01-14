import { MyetetoPage } from './../myeteto/myeteto';
import { MycsaliPage } from '../mycsali/mycsali';
import { MytoPage } from '../myto/myto';
import { dateSortValue } from 'ionic-angular/umd/util/datetime-util';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { storage } from 'firebase';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the FogasfeltoltesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-fogasfeltoltes',
  templateUrl: 'fogasfeltoltes.html',
})
export class FogasfeltoltesPage {
  
  picdata: any
  picurl: any
  mypicref: any
  fogasDatuma
  fogasHalfaj   
  fogasCsali
  fogasHelyszin
  fogasEtetoanyag1
  fogasSuly: number
  fogasEgyeb
  kepmegjelenit
  useremail
  callback = data => {
    this.fogasCsali = data.csalineve;
    this.fogasHelyszin=data.toneve;
    this.fogasEtetoanyag1=data.etetoanyagneve;
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private view: ViewController, private firebasedb: AngularFireDatabase) {
    console.log('Passed params', navParams.data);
    
    this.mypicref = firebase.storage().ref('/');
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FogasfeltoltesPage');
  }
  bezarFeltolt() {
    this.view.dismiss();
  }
  fotoKeszit() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true

    }).then(imgdata => {
      this.picdata = imgdata;
      this.kepmegjelenit = "data:image/jpeg;base64," + imgdata;
      
    })
  }
  fotoValaszt(){
    this.camera.getPicture({
     
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM

    }).then(imgdata => {
      this.picdata = imgdata;
      this.kepmegjelenit = "data:image/jpeg;base64," + imgdata;
      
    })
  }
  valasztasLadabolcsali(){
    this.navCtrl.push(MycsaliPage, {
      callback: this.callback,facebookadatok:this.navParams.data
    }
  );
}
valasztasLadabolhelyszin(){
  this.navCtrl.push(MytoPage, {
    callback: this.callback,facebookadatok:this.navParams.data
  }
);
}
valasztasLadaboletetoanyag(){
  this.navCtrl.push(MyetetoPage, {
    callback: this.callback,facebookadatok:this.navParams.data
  }
);
}
  


  async adatfeltolt() {
    const savedPic = await  this.mypicref.child(this.uid()).child('pic.jpg')
      .putString(this.picdata, 'base64', { contentType: 'image/jpg' });
  
      this.firebasedb.list("/fogasok/")
      .push({
        datum:this.fogasDatuma,
        //halfaj:this.fogasHalfaj,
        suly:this.fogasSuly,
        egyeb:this.fogasEgyeb,
        hasznaltcsali:this.fogasCsali,
        keplink: savedPic.downloadURL,
        useremail:this.navParams.get("facebookemail"),
        helyszin:this.fogasHelyszin,
        etetoanyag1:this.fogasEtetoanyag1
      });
  }
  uid() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0; d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    }); return uuid;
  }


}
