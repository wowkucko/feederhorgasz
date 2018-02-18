import { UdvozoljukPage } from '../udvozoljuk/udvozoljuk';
import { BeallitasokPage } from '../beallitasok/beallitasok';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LadaPage } from '../lada/lada';
import firebase from 'firebase';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }


  openBeallitasok(){
    this.navCtrl.push(BeallitasokPage);
  }

  openLada(){
    this.navCtrl.push(LadaPage,this.navParams.data);
  }
 logout(){
  firebase.auth().signOut().then((result)=>{
    this.app.getRootNav().setRoot(UdvozoljukPage);
    }

  )
 }


}
