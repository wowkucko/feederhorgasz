import { EtetoanyagreszletekPage } from '../etetoanyagreszletek/etetoanyagreszletek';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
    this.firebasedb.list("/etetoanyagok/").subscribe(_data => {
      this.methodmix = _data.filter(item =>
        item.approved == "1" && item.tipus == "mix"
      );

      this.methodpellet = _data.filter(item =>
        item.approved == "1" && item.tipus == "pellet"
      );
      this.aroma = _data.filter(item =>
        item.approved == "1" && item.tipus == "aroma"
      );
      this.adalek = _data.filter(item =>
        item.approved == "1" && item.tipus == "adalek"
      );
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtetoanyaglistazasPage');
  }
  openEtetoanyagreszletek(item){
    this.navCtrl.push(EtetoanyagreszletekPage, {
      etetoanyagreszletek: item,facebookadatok: this.navParams.data
    });
  }

}
