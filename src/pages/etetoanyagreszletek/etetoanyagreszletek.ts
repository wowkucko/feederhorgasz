import {
  Component,
  Input,
  ViewChild
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Content
} from 'ionic-angular';
import {
  AngularFireDatabase
} from 'angularfire2/database';

/**
 * Generated class for the EtetoanyagreszletekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etetoanyagreszletek',
  templateUrl: 'etetoanyagreszletek.html',
})
export class EtetoanyagreszletekPage {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  active: boolean;
  headerImage: any = "";
  public etetoanyagreszletek = {}
  public facebookadatok = {}
  ladabol: boolean

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase) {
    if (this.navParams.get("myetetoanyagreszletek") != null) {


      this.firebasedb.list("/etetoanyagok/").subscribe(_data => {

        this.etetoanyagreszletek = _data.filter(item => item.$key == this.navParams.get("myetetoanyagreszletek").id);
        this.ladabol = true;

      })
    } else {
      this.etetoanyagreszletek = this.navParams.get("etetoanyagreszletek");
      this.facebookadatok = this.navParams.get("facebookadatok");
      this.ladabol = false;

    }

  }

  PushTolada() {
    console.log("pusholok")
    this.firebasedb.list("/myetetoanyag/")
      .push({
        id: this.navParams.get("etetoanyagreszletek").$key,
        useremail: this.navParams.get("facebookadatok").facebookemail,
        etetoanyagneve: this.navParams.get("etetoanyagreszletek").nev
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
