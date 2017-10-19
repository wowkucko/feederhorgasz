import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  public hiradatok={};


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hiradatok=this.navParams.get("hiradatok");
    console.log("clickevent",this.hiradatok)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

}
