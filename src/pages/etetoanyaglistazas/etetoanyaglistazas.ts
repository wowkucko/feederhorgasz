import { EtetoanyagfeltoltesPage } from '../etetoanyagfeltoltes/etetoanyagfeltoltes';
import { EtetoanyagreszletekPage } from '../etetoanyagreszletek/etetoanyagreszletek';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the EtetoanyaglistazasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etetoanyaglistazas',
  templateUrl: 'etetoanyaglistazas.html',
})
export class EtetoanyaglistazasPage {
  methodmix= []
  methodpellet=[]
  aroma=[]
  adalek=[]
  etetoanyagdisplay:string

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase, private modal: ModalController) {
    this.etetoanyagdisplay="Methodmix";
    this.methodmixLoading();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtetoanyaglistazasPage');
  }
  methodmixchange(){
    return new Promise((resolve) => {
    this.firebasedb.list("/etetoanyagok/").subscribe(_data => {
    this.methodmix = _data.filter(item =>
      item.approved == "1" && item.tipus == "mix");})
      resolve(true);
    })
  }
  methodpelletchange(){
    return new Promise((resolve) => {
    this.firebasedb.list("/etetoanyagok/").subscribe(_data => {
      this.methodpellet = _data.filter(item =>
        item.approved == "1" && item.tipus == "pellet");})
        resolve(true);
      })
  }
  aromachange(){
    return new Promise((resolve) => {
    this.firebasedb.list("/etetoanyagok/").subscribe(_data => {
      this.aroma = _data.filter(item =>
        item.approved == "1" && item.tipus == "aroma");})
        resolve(true);
      })
  }
  adalekchange(){
    return new Promise((resolve) => {
    this.firebasedb.list("/etetoanyagok/").subscribe(_data => {
      this.adalek = _data.filter(item =>
        item.approved == "1" && item.tipus == "adalek");})
        resolve(true);
      })
  }

  methodmixLoading(){
    let loader = this.loadingCtrl.create({content: "Etetők betöltése..."});
    loader.present();
    this.methodmixchange().then((x) => {
        if (x) loader.dismiss();
    });
  }
  methodpelletLoading(){
    let loader = this.loadingCtrl.create({content: "Etetők betöltése..."});
    loader.present();
    this.methodpelletchange().then((x) => {
        if (x) loader.dismiss();
    });
  }
  aromaLoading(){
    let loader = this.loadingCtrl.create({content: "Etetők betöltése..."});
    loader.present();
    this.aromachange().then((x) => {
        if (x) loader.dismiss();
    });
  }
  adalekLoading(){
    let loader = this.loadingCtrl.create({content: "Etetők betöltése..."});
    loader.present();
    this.adalekchange().then((x) => {
        if (x) loader.dismiss();
    });
  }
  openEtetoanyagreszletek(item){
    this.navCtrl.push(EtetoanyagreszletekPage, {
      etetoanyagreszletek: item,facebookadatok: this.navParams.data
    });
  }

  openetetoanyagFeltoltes(){

    const etetoanyagfeltolt=this.modal.create(EtetoanyagfeltoltesPage);
    etetoanyagfeltolt.present();
  }

}
