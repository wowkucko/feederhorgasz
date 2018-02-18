import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Platform
} from 'ionic-angular';
import {
  AngularFireDatabase
} from 'angularfire2/database';
import {
  SocialSharing
} from '@ionic-native/social-sharing';

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
  constructor(private platform: Platform, private socialSharing: SocialSharing, private firebasedb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.message = "teszt<br>teszt";
    this.image = this.navParams.get("fogasreszletek").keplink;
    this.uri = "http://feederhorgaszapp.com";
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

  facebookShare() {
    
    this.platform.ready()
      .then(() => {


        this.socialSharing.shareViaFacebook(null, this.image, null)
          .then((data) => {
            console.log('Shared via Facebook');
          });

      })
      .catch((err) => {
        alert("Nem lehet megosztani! Ellenőrizd, hogy a Facebook app megfelelően van-e telepítve!")
      });

  };

}
