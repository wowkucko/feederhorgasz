import { CsalifeltoltesPage } from '../csalifeltoltes/csalifeltoltes';
import { CsalireszletekPage } from '../csalireszletek/csalireszletek';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase, private modal: ModalController) {
    this.csalidisplay="Bojli";
    this.bojlichange();
  }

  bojlichange(){
    this.firebasedb.list("/csalik/").subscribe(_data => {
      
      this.bojlicsalik = _data.filter(item =>
        item.approved == "1" && item.tipus == "Bojli");})
  }
  pelletchange(){
    this.firebasedb.list("/csalik/").subscribe(_data => {
      
      this.pelletcsalik = _data.filter(item =>
        item.approved == "1" && item.tipus == "Pellet");})
  }
  muchange(){
    this.firebasedb.list("/csalik/").subscribe(_data => {
      
      this.mucsalik = _data.filter(item =>
        item.approved == "1" && item.tipus == "Mű");})
  }
  elochange(){
    this.firebasedb.list("/csalik/").subscribe(_data => {
      
      this.elocsalik = _data.filter(item =>
        item.approved == "1" && item.tipus == "Élő");})
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

}
