import {
  IdojarasProvider
} from '../../providers/idojaras/idojaras';
import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  Storage
} from '@ionic/storage';
import {
  InAppBrowser
} from '@ionic-native/in-app-browser';

/**
 * Generated class for the IdojarasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-idojaras',
  templateUrl: 'idojaras.html',
})
export class IdojarasPage {
  idojaras: any;
  elorejelzes: any;
  hely: {
    city: string,
    country: string
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private idojarasProvider: IdojarasProvider,
    private storage: Storage,
    private iab: InAppBrowser
  ) {

  }

  ionViewWillEnter() {
    this.storage.get('hely').then((val) => {
      if (val != null) {
        this.hely = JSON.parse(val);
      } else {
        this.hely = {
          city: 'Budapest',
          country: 'HU'
        }
      }
      this.idojarasProvider.getIdojaras(this.hely.city, this.hely.country).subscribe(idojaras => {
        this.idojaras = idojaras.current_observation;
      });

      this.idojarasProvider.getIdojaraselorejelzes(this.hely.city, this.hely.country).subscribe(idojaraselorejelzes => {
        this.elorejelzes = idojaraselorejelzes.forecast.simpleforecast.forecastday;


      });

    });



  }
  ionViewDidLoad() {

  }
  openWeather() {
    let weatherurl = 'https://www.wunderground.com/weather/hu/' + this.hely.city;
    var ref = this.iab.create(weatherurl);
  }

}
