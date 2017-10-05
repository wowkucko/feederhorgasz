import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';


/**
 * Generated class for the UdvozoljukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-udvozoljuk',
  templateUrl: 'udvozoljuk.html',
})
export class UdvozoljukPage {


  

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UdvozoljukPage');
  }

  loginWithFacebook(){
   
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res=> {
      
      let facebookadatok={
        nev: res.user.displayName,
        email: res.user.email,
        profilkep: res.user.photoURL
      }
      
      this.navCtrl.push(TabsPage,facebookadatok);
      
    })
  }
  IonViewDidLeave(){
    
  }


  /*logoutWithFacebook(){
    this.fire.auth.signOut();
  }*/
}
