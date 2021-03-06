import {
  CsalireszletekPage
} from '../csalireszletek/csalireszletek';
import {
  Component,
  Input,
  ViewChild
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  Content,
  AlertController
} from 'ionic-angular';
import {
  AngularFireDatabase
} from 'angularfire2/database';

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
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  active: boolean;

  animateItems = [];
  animateClass: any;
  mycsalik = []
  facebookadatok = []
  hozzaadas: boolean
  torles: boolean
  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase) {
    this.animateClass = {
      'fade-in-left-item': true
    };

    this.mycsaliLoading();
  }

  mycsaliFetch() {
    return new Promise((resolve) => {
      this.firebasedb.list("/mycsali/").subscribe(_data => {
        this.mycsalik = _data.filter(item =>
          item.useremail == this.navParams.get("facebookadatok").facebookemail
        );
      })

      if (this.navParams.get("oldalnev") != null) {
        this.hozzaadas = false;
        this.torles = true;
      } else {
        this.hozzaadas = true;
        this.torles = false;
      }
      resolve(true);
    })
  }

  mycsaliLoading() {
    let loader = this.loadingCtrl.create({
      content: "Csalik betöltése..."
    });
    loader.present();
    this.mycsaliFetch().then((x) => {
      if (x) loader.dismiss();
    });
  }



  openMycsalireszletek(item) {
    this.navCtrl.push(CsalireszletekPage, {
      mycsalireszletek: item
    });
  }

  addFogashoz(item) {


    this.navCtrl.getPrevious().data.valasztottCsali = item;
    this.navCtrl.pop();


  }
  deleteLadabol(item) {
    this.firebasedb.list("/mycsali/").remove(item.$key);
  }

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  ngOnChanges(changes: {
    [propKey: string]: any
  }) {
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
        if (d.scrollTop < 200) {
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

  showConfirm(item) {
    let confirm = this.alertCtrl.create({
      title: 'Törlés',
      message: 'Biztos, hogy törlöd a tételt a ládából?',
      buttons: [{
          text: 'Mégsem',
          handler: () => {}
        },
        {
          text: 'Igen',
          handler: () => {
            this.deleteLadabol(item);
          }
        }
      ]
    });
    confirm.present();
  }

}
