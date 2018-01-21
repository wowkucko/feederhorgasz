import { EtetoanyagfeltoltesPage } from '../etetoanyagfeltoltes/etetoanyagfeltoltes';
import { EtetoanyagreszletekPage } from '../etetoanyagreszletek/etetoanyagreszletek';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase, private modal: ModalController) {
    this.etetoanyagdisplay="Methodmix";
    this.methodmixchange();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtetoanyaglistazasPage');
  }
  methodmixchange(){
    this.firebasedb.list("/etetoanyagok/").subscribe(_data => {
    this.methodmix = _data.filter(item =>
      item.approved == "1" && item.tipus == "mix");})
  }
  methodpelletchange(){
    this.firebasedb.list("/etetoanyagok/").subscribe(_data => {
      this.methodpellet = _data.filter(item =>
        item.approved == "1" && item.tipus == "pellet");})
  }
  aromachange(){
    this.firebasedb.list("/etetoanyagok/").subscribe(_data => {
      this.aroma = _data.filter(item =>
        item.approved == "1" && item.tipus == "aroma");})
  }
  adalekchange(){
    this.firebasedb.list("/etetoanyagok/").subscribe(_data => {
      this.adalek = _data.filter(item =>
        item.approved == "1" && item.tipus == "adalek");})
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
