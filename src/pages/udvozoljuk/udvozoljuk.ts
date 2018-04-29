import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
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


  

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,private platform: Platform) {
  }



  loginWithFacebook(){
   
      const provider = new firebase.auth.FacebookAuthProvider();
      
        firebase.auth().signInWithRedirect(provider).then( () => {
          firebase.auth().getRedirectResult().then( res => {

            let facebookadatok={
              nev: res.user.displayName,
              email: res.user.email,
              profilkep: res.user.providerData[0].photoURL
            }
            this.navCtrl.push(TabsPage,facebookadatok);

          }).catch(function(error) {

            console.log(error.message);
          });
        });
      
    //this.registerapp();
  }
  loginWithGoogle(){
    
       const provider = new firebase.auth.GoogleAuthProvider();
       
         firebase.auth().signInWithRedirect(provider).then( () => {
           firebase.auth().getRedirectResult().then( res => {
             let facebookadatok={
               nev: res.user.displayName,
               email: res.user.email,
               profilkep: res.user.providerData[0].photoURL
             }
             this.navCtrl.push(TabsPage,facebookadatok);

           }).catch(function(error) {
             console.log(error.message);
           });
         });
       
     
   }

   registerapp(){
    
   }

}