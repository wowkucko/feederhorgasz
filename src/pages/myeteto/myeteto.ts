import { EtetoanyagreszletekPage } from '../etetoanyagreszletek/etetoanyagreszletek';
import { Component,Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Content} from 'ionic-angular';
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
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  active: boolean;
  
  animateItems = [];
  animateClass: any;
  myetetoanyagok= []
  facebookadatok=[]
  hozzaadas:boolean
  torles:boolean

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
    this.animateClass = { 'fade-in-left-item': true };
    
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

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
        this.events[event](item);
    }
}

ngOnChanges(changes: { [propKey: string]: any }) {
    let that = this;
    that.data = changes['data'].currentValue;
    if (that.data && that.data.items) {
        that.animateItems = [];
        for (let i = 0; i < that.data.items.length; i++) {
            setTimeout(function () {
                that.animateItems.push(that.data.items[i]);
            }, 200 * i);
        }
    }
}
isClassActive() {
  return this.active;
}
subscribeToIonScroll() {
  if (this.content != null && this.content.ionScroll != null) {
      this.content.ionScroll.subscribe((d) => {
          if (d.scrollTop < 200 ) {
              this.active = false;
              return;
          }
          this.active = true;
      });
  }
}
ngAfterViewInit() {
  this.subscribeToIonScroll();
}

}
