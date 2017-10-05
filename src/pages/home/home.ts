import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TerkepPage } from './../terkep/terkep';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  
  constructor(public navParams: NavParams,public navCtrl: NavController) {
   
    console.log('Passed params', navParams.data);
  }
  ionViewDidLoad() {
    
    
  }
  terkepnyit(){
    this.navCtrl.push(TerkepPage);
   }
  

}
