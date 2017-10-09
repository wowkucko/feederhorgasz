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
   
    /*this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res=> {
      
      let facebookadatok={
        nev: res.user.displayName,
        email: res.user.email,
        profilkep: res.user.photoURL
      }
      
      this.navCtrl.push(TabsPage,facebookadatok);*/
      const provider = new firebase.auth.FacebookAuthProvider();
      
        firebase.auth().signInWithRedirect(provider).then( () => {
          firebase.auth().getRedirectResult().then( res => {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
            let facebookadatok={
              nev: res.user.displayName,
              email: res.user.email,
              profilkep: res.user.photoURL
            }
            this.navCtrl.push(TabsPage,facebookadatok);

            //var token = result.credential.accessToken;
            // The signed-in user info.
           // var user = result.user;
           // console.log(token, user);
          }).catch(function(error) {
            // Handle Errors here.
            console.log(error.message);
          });
        });
      
    
  }
  IonViewDidLeave(){
    
  }


  /*logoutWithFacebook(){
    this.fire.auth.signOut();
  }*/
}
