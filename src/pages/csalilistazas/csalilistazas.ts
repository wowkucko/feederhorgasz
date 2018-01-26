import { CsalifeltoltesPage } from '../csalifeltoltes/csalifeltoltes';
import { CsalireszletekPage } from '../csalireszletek/csalireszletek';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,LoadingController } from 'ionic-angular';
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
  csalidisplay:string
  bojlicsalik= []
  pelletcsalik=[]
  mucsalik=[]
  elocsalik=[]

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase, private modal: ModalController) {
    this.csalidisplay="Bojli";
    this.bojliLoading();
  }

  bojlichange(){
    return new Promise((resolve) => {
    this.firebasedb.list("/csalik/").subscribe(_data => {
      
      this.bojlicsalik = _data.filter(item =>
        item.approved == "1" && item.tipus == "Bojli");})
        resolve(true);
      })
  }
  pelletchange(){
    return new Promise((resolve) => {
    this.firebasedb.list("/csalik/").subscribe(_data => {
      
      this.pelletcsalik = _data.filter(item =>
        item.approved == "1" && item.tipus == "Pellet");})
        resolve(true);
      })
  }
  muchange(){
    return new Promise((resolve) => {
    this.firebasedb.list("/csalik/").subscribe(_data => {
      
      this.mucsalik = _data.filter(item =>
        item.approved == "1" && item.tipus == "Mű");})
        resolve(true);
      })
  }
  elochange(){
    return new Promise((resolve) => {
    this.firebasedb.list("/csalik/").subscribe(_data => {
      
      this.elocsalik = _data.filter(item =>
        item.approved == "1" && item.tipus == "Élő");})
        resolve(true);
      })
  }
  openCsalireszletek(item){
    this.navCtrl.push(CsalireszletekPage, {
      csalireszletek: item,facebookadatok: this.navParams.data
    });
  }
  opencsaliFeltoltes(){
    const csalifeltolt=this.modal.create(CsalifeltoltesPage);
    csalifeltolt.present();
  }
  bojliLoading(){
    let loader = this.loadingCtrl.create({content: "Csalik betöltése..."});
    loader.present();
    this.bojlichange().then((x) => {
        if (x) loader.dismiss();
    });
  }
  pelletLoading(){
    let loader = this.loadingCtrl.create({content: "Csalik betöltése..."});
    loader.present();
    this.pelletchange().then((x) => {
        if (x) loader.dismiss();
    });
  }
  muLoading(){
    let loader = this.loadingCtrl.create({content: "Csalik betöltése..."});
    loader.present();
    this.muchange().then((x) => {
        if (x) loader.dismiss();
    });
  }
  eloLoading(){
    let loader = this.loadingCtrl.create({content: "Csalik betöltése..."});
    loader.present();
    this.elochange().then((x) => {
        if (x) loader.dismiss();
    });
  }

}
