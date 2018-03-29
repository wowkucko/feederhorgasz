import { StatisztikakPage } from './../statisztikak/statisztikak';
import { IdojarasPage } from './../idojaras/idojaras';
import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController,LoadingController } from 'ionic-angular';
import { TerkepPage } from './../terkep/terkep';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ItemPage } from './../item/item';
import { IdomeroPage } from './../idomero/idomero'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url: string = 'https://feederhorgasz.000webhostapp.com/wp-json/acf/v3/posts?_embed?'; 
  items:any;
  
  
  constructor(public loadingCtrl: LoadingController,public navParams: NavParams,public navCtrl: NavController, private http:Http, public actionSheetCtrl: ActionSheetController) {
    
  }

   hirfolyambetolt(){
    return new Promise((resolve) => {
    this.http.get( this.url ) 
    .map(res => res.json()) 
    .subscribe(data => 
        {  
          this.items = data;
          
         
         
        }); 
        
        resolve(true);
      });
      
   }
  ionViewWillEnter() {
    this.hirfolyamLoading();
    
  }
  hirfolyamLoading(){
    let loader = this.loadingCtrl.create({content: "Hírfolyam betöltése..."});
    loader.present();
    this.hirfolyambetolt().then((x) => {
        if (x) loader.dismiss();
    });
  }

  itemKlikk(item){

    this.navCtrl.push(ItemPage,{hiradatok:item,facebookadatok:this.navParams.data});
  }

  openTerkep() {
    this.navCtrl.push(TerkepPage);
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Mit szeretnél?',
      buttons: [
        {
          text: 'Időmérő',
          icon: 'timer',
          handler: () => {
            this.navCtrl.push(IdomeroPage);
          }
        },{
          text: 'Időjárás',
          icon: 'sunny',
          handler: () => {
            this.navCtrl.push(IdojarasPage);
          }
        },{
          text: 'Tó Térkép',
          icon: 'map',
          handler: () => {
            this.navCtrl.push(TerkepPage);
          }
        },
        {
          text: 'Statisztikák',
          icon: 'stats',
          handler: () => {
            this.navCtrl.push(StatisztikakPage);
          }
        }
      ]
    });
    actionSheet.present();
  }

}
