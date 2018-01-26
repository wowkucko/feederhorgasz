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
  url: string = 'http://feederhorgasz.000webhostapp.com/wp-json/wp/v2/posts?_embed?'; 
  items:any;
  
  
  constructor(public loadingCtrl: LoadingController,public navParams: NavParams,public navCtrl: NavController, private http:Http, public actionSheetCtrl: ActionSheetController) {
   
    console.log('Passed params', navParams.data);
  }
  ionViewDidEnter() { 
    
        
   } 

   hirfolyambetolt(){
    return new Promise((resolve) => {
    this.http.get( this.url ) 
    .map(res => res.json()) 
    .subscribe(data => 
        {  
          this.items = data;
         console.log("átadott wp api",data);
         
        }); 
        resolve(true);
      });
   }
  ionViewDidLoad() {
    this.hirfolyamLoading();
  }
  hirfolyamLoading(){
    let loader = this.loadingCtrl.create({content: "Hírfolyam betöltése..."});
    loader.present();
    this.hirfolyambetolt().then((x) => {
        if (x) loader.dismiss();
    });
  }

  terkepnyit(){
    this.navCtrl.push(TerkepPage);
   }
   idojarasMegnyit(){
     this.navCtrl.push(IdojarasPage);
   }
   idomeroMegnyit(){
     this.navCtrl.push(IdomeroPage);
   }

  itemKlikk(item){

    this.navCtrl.push(ItemPage,{hiradatok:item,facebookadatok:this.navParams.data});
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Mit keresel a közelben?',
      buttons: [
        {
          text: 'Horgásztavakat',
          handler: () => {
            this.terkepnyit();
          }
        },{
          text: 'Horgászboltokat',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Szervízeket',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
