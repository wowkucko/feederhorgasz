import {
  FogasreszletekPage
} from '../fogasreszletek/fogasreszletek';
import {
  Component,
  Input,
  ViewChild
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
  Content
} from 'ionic-angular';
import {
  FogasfeltoltesPage
} from '../fogasfeltoltes/fogasfeltoltes';
import {
  AngularFireDatabase
} from 'angularfire2/database';



/**
 * Generated class for the FogasinaploPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fogasinaplo',
  templateUrl: 'fogasinaplo.html',
})
export class FogasinaploPage {
  sajatfogasadatok = []
  osszesfogasadatok = []
  displayfogasok: string
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  active: boolean;
  headerImage: any = "";





  constructor(public loadingCtrl: LoadingController, private modal: ModalController, public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase) {
    this.displayfogasok = "sajat";
    this.sajatchange();
  }

  ionViewWillEnter() {
    this.sajatfogasokLoading();
  }

  osszeschange() {
    this.osszesfogasokLoading();
  }
  sajatchange() {
    this.sajatfogasok();
  }
  openFeltoltes() {;

    const feltolt = this.modal.create(FogasfeltoltesPage, this.navParams.data);
    feltolt.present();
  }
  deleteNaplobol(item) {
    this.firebasedb.list("/fogasok/").remove(item.$key);
  }
  openFogasReszletek(item) {
    this.navCtrl.push(FogasreszletekPage, {
      fogasreszletek: item
    });

  }

  sajatfogasok() {
    return new Promise((resolve) => {
      this.firebasedb.list("/fogasok/").subscribe(_data => {

        this.sajatfogasadatok = _data.filter(item => item.useremail == this.navParams.get("facebookemail"));
        resolve(true);
      });
    })
  }
  osszesfogasok() {
    return new Promise((resolve) => {
      this.firebasedb.list("/fogasok/").subscribe(_data => {

        this.osszesfogasadatok = _data.filter(item => item.publikus == true);
        resolve(true);
      });
    });


  }

  sajatfogasokLoading() {
    let loader = this.loadingCtrl.create({
      content: "Kérlek várj..."
    });
    loader.present();
    this.sajatfogasok().then((x) => {
      if (x) loader.dismiss();
    });
  }
  osszesfogasokLoading() {
    let loader = this.loadingCtrl.create({
      content: "Kérlek várj..."
    });
    loader.present();
    this.osszesfogasok().then((x) => {
      if (x) loader.dismiss();
    });
  }
  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  ngOnChanges(changes: {
    [propKey: string]: any
  }) {
    if (changes.data && changes.data.currentValue) {
      this.headerImage = changes.data.currentValue.headerImage;
    }
    this.subscribeToIonScroll();
  }

  ngAfterViewInit() {
    this.subscribeToIonScroll();
  }

  ngAfterViewChecked() {
    this.subscribeToIonScroll();
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

}
