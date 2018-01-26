import { CsalireszletekPage } from '../csalireszletek/csalireszletek';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the MycsaliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mycsali',
  templateUrl: 'mycsali.html',
})
export class MycsaliPage {
  mycsalik= []
  facebookadatok=[]
  hozzaadas:boolean
  torles:boolean
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase) {
    this.mycsaliLoading();
  }

  mycsaliFetch(){
    return new Promise((resolve) => {
    this.firebasedb.list("/mycsali/").subscribe(_data => {
      this.mycsalik = _data.filter(item =>
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

  mycsaliLoading(){
    let loader = this.loadingCtrl.create({content: "Csalik betöltése..."});
    loader.present();
    this.mycsaliFetch().then((x) => {
        if (x) loader.dismiss();
    });
  }


  ionViewDidLoad() {
    console.log("hali",this.navParams.get("oldalnev"))
  }

  openMycsalireszletek(item){
    this.navCtrl.push(CsalireszletekPage, {
      mycsalireszletek: item
    });
  }

  addFogashoz(item){
    
    
    this.navCtrl.getPrevious().data.valasztottCsali = item;
    this.navCtrl.pop();


  }
  deleteLadabol(item){
    this.firebasedb.list("/mycsali/").remove(item.$key);
  }

}
