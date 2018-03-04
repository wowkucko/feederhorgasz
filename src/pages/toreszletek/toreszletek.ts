import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
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
  public facebookadatok={}
  ladabol:boolean

  constructor(public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
    if(this.navParams.get("mytoreszletek")!=null)
    {
      
      
      this.firebasedb.list("/tavak/").subscribe(_data => {
        
        this.toreszletek = _data.filter(item => item.$key == this.navParams.get("mytoreszletek").id);
        this.ladabol=true;
  
      })
    }
    else if(this.navParams.get("terkepreszletek")!=null){
      this.firebasedb.list("/tavak/").subscribe(_data => {
        
        this.toreszletek=_data.filter(item=>item.nev==this.navParams.get("terkepreszletek").title);
        this.ladabol=true;
  
      })


    }
    else if(this.navParams.get("tosnapreszletek")!=null){
      
        
        this.toreszletek = this.navParams.get("tosnapreszletek");
        this.ladabol=true;

      console.log("huha",this.toreszletek);
    }
    else{
      this.toreszletek=this.navParams.get("toreszletek");
      this.facebookadatok=this.navParams.get("facebookadatok");
      this.ladabol=false;
      
    }
  }


  PushTolada(){
    this.firebasedb.list("/mytavak/")
    .push({
      id:this.navParams.get("toreszletek").$key,
      useremail:this.navParams.get("facebookadatok").facebookemail,
      toneve:this.navParams.get("toreszletek").nev
    });
  }

}
