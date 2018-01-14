import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the EtetoanyagreszletekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etetoanyagreszletek',
  templateUrl: 'etetoanyagreszletek.html',
})
export class EtetoanyagreszletekPage {
  public etetoanyagreszletek={}
  public facebookadatok={}
  ladabol:boolean

  constructor(public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
    if(this.navParams.get("myetetoanyagreszletek")!=null)
    {
      
      
      this.firebasedb.list("/etetoanyagok/").subscribe(_data => {
        
        this.etetoanyagreszletek = _data.filter(item => item.$key == this.navParams.get("etetoanyagreszletek").id);
        this.ladabol=true;
  
      })
    }
    else{
      this.etetoanyagreszletek=this.navParams.get("etetoanyagreszletek");
      this.facebookadatok=this.navParams.get("facebookadatok");
      this.ladabol=false;
      
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtetoanyagreszletekPage');
  }
  PushTolada(){
    console.log("pusholok")
    this.firebasedb.list("/myetetoanyag/")
    .push({
      id:this.navParams.get("etetoanyagreszletek").$key,
      useremail:this.navParams.get("facebookadatok").facebookemail,
      etetoanyagneve:this.navParams.get("etetoanyagreszletek").nev
    });
  }

}
