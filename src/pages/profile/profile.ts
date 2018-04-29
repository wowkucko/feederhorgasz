import { UdvozoljukPage } from '../udvozoljuk/udvozoljuk';
import { BeallitasokPage } from '../beallitasok/beallitasok';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LadaPage } from '../lada/lada';
import firebase from 'firebase';
import { Component } from '@angular/core';


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

  headerImage:any = "./assets/img/lake.jpg";

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private app:App) {
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

 showConfirm() {
  let confirm = this.alertCtrl.create({
    title: 'Kilépés',
    message: 'Biztos, hogy ki szeretnél jelentkezni?',
    buttons: [
      {
        text: 'Mégsem',
        handler: () => {
        }
      },
      {
        text: 'Igen',
        handler: () => {
          this.logout();
        }
      }
    ]
  });
  confirm.present();
}
}

 




