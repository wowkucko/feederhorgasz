import { ToreszletekPage } from '../toreszletek/toreszletek';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the TosnapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tosnap',
  templateUrl: 'tosnap.html',
})
export class TosnapPage {
  tosnapadat=[];
  constructor(public loadingCtrl: LoadingController,private firebasedb: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get("latparams"));
  }

  ionViewWillEnter() {
    this.tosnapLoading();
  }

  tosnapFetch(){
    return new Promise((resolve) => {
        this.firebasedb.list("/tavak/").subscribe(_data => {
          this.tosnapadat = _data.filter(item => item.lat == this.navParams.get("latparams") && item.long == this.navParams.get("lngparams"));
        })
      resolve(true);
    })
  }
  tosnapLoading(){
    let loader = this.loadingCtrl.create({content: "Tóadatok betöltése..."});
    loader.present();
    this.tosnapFetch().then((x) => {
        if (x) loader.dismiss();
    });
  }
  openToreszletek(){
    this.navCtrl.push(ToreszletekPage,{tosnapreszletek:this.tosnapadat});
  }

}
