import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TerkepPage } from './../terkep/terkep';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ItemPage } from './../item/item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url: string = 'http://feederhorgasz.000webhostapp.com/wp-json/wp/v2/posts?_embed?filter[orderby]=date&order=asc'; 
  items: any; 
  
  
  constructor(public navParams: NavParams,public navCtrl: NavController, private http:Http) {
   
    console.log('Passed params', navParams.data);
  }
  ionViewDidEnter() { 
    this.http.get( this.url ) 
    .map(res => res.json()) 
    .subscribe(data => 
        {  
         this.items = data; 
         console.log("átadott wp api",data);
         
        }); 
        
   } 
  ionViewDidLoad() {
    
    
  }

  terkepnyit(){
    this.navCtrl.push(TerkepPage);
   }
  itemKlikk(item){

    this.navCtrl.push(ItemPage,{
      hiradatok:item
    });
  }

}
