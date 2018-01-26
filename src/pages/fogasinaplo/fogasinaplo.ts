import { FogasreszletekPage } from '../fogasreszletek/fogasreszletek';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,LoadingController} from 'ionic-angular';
import { FogasfeltoltesPage } from '../fogasfeltoltes/fogasfeltoltes';
import { AngularFireDatabase } from 'angularfire2/database';



/**
 * Generated class for the FogasinaploPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fogasinaplo',
  templateUrl: 'fogasinaplo.html',
})
export class FogasinaploPage {
  sajatfogasadatok = []
  osszesfogasadatok=[]
  displayfogasok:string
  
 



  constructor(public loadingCtrl: LoadingController,private modal: ModalController, public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
    this.displayfogasok="sajat";
    this.sajatchange();
  }

  ionViewDidLoad() {
    this.sajatfogasokLoading();
  }
  osszeschange(){
    this.osszesfogasokLoading();
  }
  sajatchange(){
    this.sajatfogasok();
  }
  openFeltoltes(){
    ;
    
    const feltolt=this.modal.create(FogasfeltoltesPage,this.navParams.data);
    feltolt.present();
  }
  deleteNaplobol(item){
    this.firebasedb.list("/fogasok/").remove(item.$key);
  }
  openFogasReszletek(item){
    this.navCtrl.push(FogasreszletekPage, {
      fogasreszletek: item
    });

  }

  sajatfogasok(){
    return new Promise((resolve) => {
    this.firebasedb.list("/fogasok/").subscribe(_data => {
      
      this.sajatfogasadatok = _data.filter(item => item.useremail == this.navParams.get("facebookemail"));
      resolve(true);
    });
  })
  }
  osszesfogasok(){
    return new Promise((resolve) => {
    this.firebasedb.list("/fogasok/").subscribe(_data => {
      
      this.osszesfogasadatok = _data.filter(item => item.publikus == true);
      resolve(true);
    });
    })
  }

  sajatfogasokLoading() {
    let loader = this.loadingCtrl.create({content: "Kérlek várj..."});
    loader.present();
    this.sajatfogasok().then((x) => {
        if (x) loader.dismiss();
    });
  }
  osszesfogasokLoading(){
    let loader = this.loadingCtrl.create({content: "Kérlek várj..."});
    loader.present();
    this.osszesfogasok().then((x) => {
        if (x) loader.dismiss();
    });
  }

}