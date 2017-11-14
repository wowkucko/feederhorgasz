import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ToreszletekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toreszletek',
  templateUrl: 'toreszletek.html',
})
export class ToreszletekPage {
  public toreszletek={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toreszletek=this.navParams.get("toreszletek");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToreszletekPage');
  }

}
