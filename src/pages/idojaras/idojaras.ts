import { IdojarasProvider } from '../../providers/idojaras/idojaras';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the IdojarasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-idojaras',
  templateUrl: 'idojaras.html',
})
export class IdojarasPage {
  idojaras:any;
  hely:{
    city:string
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private idojarasProvider:IdojarasProvider,
    private storage:Storage
  ) {

  }

  ionViewWillEnter(){
    this.storage.get('hely').then((val)=>{
      if(val!=null){
        this.hely=JSON.parse(val);
      } else{
        this.hely={
          city:'Budapest'
        }
      }
      this.idojarasProvider.getIdojaras(this.hely.city).subscribe(idojaras=>{
        this.idojaras=idojaras.current_observation;
  
      });
    });

 

  }
  ionViewDidLoad() {
  }

}
