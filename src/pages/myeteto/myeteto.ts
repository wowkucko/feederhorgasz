import { EtetoanyagreszletekPage } from '../etetoanyagreszletek/etetoanyagreszletek';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the MyetetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myeteto',
  templateUrl: 'myeteto.html',
})
export class MyetetoPage {
  myetetoanyagok= []
  facebookadatok=[]
  hozzaadas:boolean
  torles:boolean

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
    this.myetetoLoading();
  }

  myetetoFetch(){
    return new Promise((resolve) => {
    this.firebasedb.list("/myetetoanyag/").subscribe(_data => {
      this.myetetoanyagok = _data.filter(item =>
        item.useremail == this.navParams.get("facebookadatok").facebookemail
      );
    })
    if(this.navParams.get("oldalnev")!=null){
      this.hozzaadas=false;
      this.torles=true;
    }
    else{
      this.hozzaadas=true;
      this.torles=false;
    }
    resolve(true);
  })
  }

  myetetoLoading(){
    let loader = this.loadingCtrl.create({content: "Etetőanyagok betöltése..."});
    loader.present();
    this.myetetoFetch().then((x) => {
        if (x) loader.dismiss();
    });
  }

  openMyetetoanyagreszletek(item){
    this.navCtrl.push(EtetoanyagreszletekPage, {
      myetetoanyagreszletek: item
    });
  }

  addFogashoz(item){
    
    this.navCtrl.getPrevious().data.valasztottEtetoanyag = item;
    this.navCtrl.pop();
  }
  deleteLadabol(item){
    this.firebasedb.list("/myetetoanyag/").remove(item.$key);
  }

}
