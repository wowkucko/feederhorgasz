import { MyetetoPage } from './../myeteto/myeteto';
import { MycsaliPage } from '../mycsali/mycsali';
import { MytoPage } from '../myto/myto';
import { dateSortValue } from 'ionic-angular/umd/util/datetime-util';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
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
  fogasDatuma: string=new Date().toISOString();
  fogasHalfaj
  fogasKepe:string;
  fogasCsali: string
  fogasHelyszin: string
  fogasEtetoanyag1: string
  fogasEtetoanyag2: string
  fogasEtetoanyag3: string
  fogasEtetoanyag4: string
  fogasSuly: string
  fogasEgyeb
  kepmegjelenit
  useremail
  fogasPublikus: boolean


  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private view: ViewController, private firebasedb: AngularFireDatabase) {    
    this.mypicref = firebase.storage().ref('/');    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FogasfeltoltesPage');
  }
  public ionViewWillEnter() {
    if(this.navParams.get('valasztottCsali')!=null){
      this.fogasCsali = this.navParams.get('valasztottCsali').csalineve|| null;
    }
    if(this.navParams.get('valasztottTo')!=null){
      this.fogasHelyszin = this.navParams.get('valasztottTo').toneve|| null;
    }
    if(this.navParams.get('valasztottEtetoanyag')!=null){
      this.fogasEtetoanyag1 = this.navParams.get('valasztottEtetoanyag').etetoanyagneve|| null;
    }
    
    
    
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
      facebookadatok:this.navParams.data
    }
  );
}
valasztasLadabolhelyszin(){
  this.navCtrl.push(MytoPage, {
    facebookadatok:this.navParams.data
  }
);
}
valasztasLadaboletetoanyag(){
  this.navCtrl.push(MyetetoPage, {
    facebookadatok:this.navParams.data
  }
);
}
  


  async adatfeltolt() {
    if(this.picdata){
    const savedPic = await  this.mypicref.child(this.uid()).child('pic.jpg')
    .putString(this.picdata, 'base64', { contentType: 'image/jpg' });
    this.fogasKepe=savedPic.downloadURL;
  }

    if(!this.fogasEtetoanyag2){this.fogasEtetoanyag2="-"};  
    if(!this.fogasEtetoanyag3){this.fogasEtetoanyag3="-"};   
    if(!this.fogasEtetoanyag4){this.fogasEtetoanyag4="-"};   
    if(!this.picdata){this.fogasKepe="http://babakunyho.eu/img/default-no-image.png"};
    if(!this.fogasSuly){this.fogasSuly="Nincs mérve"};
    if(!this.fogasEgyeb){this.fogasEgyeb=""};


  
      this.firebasedb.list("/fogasok/")
      .push({
        datum:this.fogasDatuma,
        halfaj:this.fogasHalfaj,
        suly:this.fogasSuly,
        egyeb:this.fogasEgyeb,
        hasznaltcsali:this.fogasCsali,
        keplink: this.fogasKepe,
        useremail:this.navParams.get("facebookemail"),
        helyszin:this.fogasHelyszin,
        etetoanyag1:this.fogasEtetoanyag1,
        etetoanyag2:this.fogasEtetoanyag2,
        etetoanyag3:this.fogasEtetoanyag3,
        etetoanyag4:this.fogasEtetoanyag4,
        publikus:this.fogasPublikus
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
