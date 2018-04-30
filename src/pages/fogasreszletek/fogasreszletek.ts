import {
  Component,
  Input,
  ViewChild
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Platform,
  Content
} from 'ionic-angular';
import {
  AngularFireDatabase
} from 'angularfire2/database';
import {
  PhotoViewer
} from '@ionic-native/photo-viewer';

/**
 * Generated class for the FogasreszletekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fogasreszletek',
  templateUrl: 'fogasreszletek.html',
})
export class FogasreszletekPage {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  public fogasreszletek = {}
  csali = [];
  etetoanyag = [];
  to = [];
  public sendTo: any;
  public subject: string;
  public message: string;
  public image: string;
  public uri: string;
  public pasteMessageHint: string;
  constructor(private photoViewer: PhotoViewer, private platform: Platform, private firebasedb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {

    this.image = this.navParams.get("fogasreszletek").keplink;

  }
  ionViewWillEnter() {
    this.fogasreszletek = this.navParams.get("fogasreszletek");
    this.adatokbetoltese();
  }

  adatokbetoltese() {
    this.firebasedb.list("/csalik/").subscribe(_data => {

      this.csali = _data.filter(item =>
        item.nev == this.navParams.get("fogasreszletek").hasznaltcsali);
    });
    this.firebasedb.list("/etetoanyagok/").subscribe(_data => {

      this.etetoanyag = _data.filter(item =>
        item.nev == this.navParams.get("fogasreszletek").etetoanyag1 || item.nev == this.navParams.get("fogasreszletek").etetoanyag2);
    });
    this.firebasedb.list("/tavak/").subscribe(_data => {

      this.to = _data.filter(item =>
        item.nev == this.navParams.get("fogasreszletek").helyszin);
    });

  }


  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  togglecsaliGroup(group: any) {
    group.show = !group.show;
  }

  iscsaliGroupShown(group: any) {
    return group.show;
  }
  toggleetetoanyagGroup(group: any) {
    group.show = !group.show;
  }

  isetetoanyagGroupShown(group: any) {
    return group.show;
  }
  toggletoGroup(group: any) {
    group.show = !group.show;
  }

  istoGroupShown(group: any) {
    return group.show;
  }
  kepMegnyit() {
    this.photoViewer.show(this.image);

  }

}
