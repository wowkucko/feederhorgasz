import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the CsalireszletekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-csalireszletek',
  templateUrl: 'csalireszletek.html',
})
export class CsalireszletekPage {
  public csalireszletek={}
  public facebookadatok={}
  ladabol:boolean

  constructor(public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
    
    if(this.navParams.get("mycsalireszletek")!=null)
    {
      
      
      this.firebasedb.list("/csalik/").subscribe(_data => {
        
        this.csalireszletek = _data.filter(item => item.$key == this.navParams.get("mycsalireszletek").id);
        this.ladabol=true;
        console.log("szeress",this.csalireszletek)
  
      })
    }
    else{
      this.csalireszletek=this.navParams.get("csalireszletek");
      this.facebookadatok=this.navParams.get("facebookadatok");
      this.ladabol=false;
      
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CsalireszletekPage');
  }
  PushTolada(){
    this.firebasedb.list("/mycsali/")
    .push({
      id:this.navParams.get("csalireszletek").$key,
      useremail:this.navParams.get("facebookadatok").facebookemail,
      csalineve:this.navParams.get("csalireszletek").nev
    });
  }
}
