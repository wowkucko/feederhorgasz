import { TofeltoltesPage } from '../tofeltoltes/tofeltoltes';
import { ToreszletekPage } from '../toreszletek/toreszletek';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the TolistazasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tolistazas',
  templateUrl: 'tolistazas.html',
})
export class TolistazasPage {
  toadatok = []
  megyevalasztas: string
  loadedtolista = []

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase, private modal: ModalController) {

  }

  ionViewWillEnter() {
  this.megyevalasztas = "osszes";
   this.tavakLoading();

  }

  tavakFetch(){
    return new Promise((resolve) => {
    if (this.megyevalasztas == "osszes") {
      this.firebasedb.list("/tavak/").subscribe(_data => {
        this.toadatok = _data.filter(item =>
          item.approved == "1"
        );
        this.loadedtolista = this.toadatok;

      })


    }
    else {
      this.firebasedb.list("/tavak/").subscribe(_data => {
        this.toadatok = _data.filter(item => item.approved == "1" && item.megye == this.megyevalasztas);
        this.loadedtolista = this.toadatok;

      })

    }
    resolve(true);
  })
  }
  tavakLoading(){
    let loader = this.loadingCtrl.create({content: "Tavak betöltése..."});
    loader.present();
    this.tavakFetch().then((x) => {
        if (x) loader.dismiss();
    });
  }

  toreszletNyit(item) {
    this.navCtrl.push(ToreszletekPage, {
      toreszletek: item,facebookadatok: this.navParams.data
    });
  }
  opentoFeltoltes(){
    const tofeltolt=this.modal.create(TofeltoltesPage);
    tofeltolt.present();
  }

  initializeItems() {
    this.toadatok = this.loadedtolista;
  }

  getTavak(searchbar) {

    this.initializeItems();


    var q = searchbar.srcElement.value;



    if (!q) {
      return;
    }

    this.toadatok = this.toadatok.filter((v) => {
      if (v.nev && q) {
        if (v.nev.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });


  }
}
