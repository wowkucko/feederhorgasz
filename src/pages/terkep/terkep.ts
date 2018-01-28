import {
  TosnapPage
} from './../tosnap/tosnap';
import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Platform,
  ToastController,
  ModalController,
  LoadingController
} from 'ionic-angular';
import {
  HelyekProvider
} from '../../providers/helyek/helyek';
import {
  Geolocation
} from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import {
  LocationAccuracy
} from '@ionic-native/location-accuracy';

/**
 * Generated class for the TerkepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terkep',
  templateUrl: 'terkep.html',
})
export class TerkepPage {
  map: GoogleMap;
  lat: number;
  lang: number;
  answer: boolean;
  constructor(private locationAccuracy: LocationAccuracy, public loadingCtrl: LoadingController, public modal: ModalController, public locations: HelyekProvider, private toastCtrl: ToastController, private plt: Platform, private geolocation: Geolocation, public navCtrl: NavController) {


  }
  ionViewWillEnter() {
    this.locationReq();

  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'A helyadatok lekérdezése nem sikerült! Budapest lett megjelölve!',
      duration: 3000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: "OK",


    });
    toast.present();
  }
  async locationReq() {
    const canRequest = await this.locationAccuracy.canRequest();

    if (canRequest) {
      const success = await this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then((success) => {
        
        if (success.code==1 || success.code==0){
          this.answer=true;
        }
        else{
         alert("Hiba történt! Próbáld újra!")
        }
      });
    }

    if (this.answer == true) {
      console.log('answer is true');
      await this.plt.ready();

      const loader = this.loadingCtrl.create({
        content: 'Helyadatok lekérdezése...'
      });
      loader.present();

      const options = {
        timeout: 15000
      };

      try {
        const resp = await this.geolocation.getCurrentPosition(options);
        this.lat = resp.coords.latitude;
        this.lang = resp.coords.longitude;
      } catch (err) {
        this.lat = 47.49801;
        this.lang = 19.03991;
        this.presentToast(); // Not sure if this must be awaited..
      } finally {
        loader.dismiss();
        this.mapLoadingPresent();
      }
    } else {
      console.log('answer is no or undefinied');
    }

  }


  mapLoadingPresent() {
    let loader = this.loadingCtrl.create({
      content: "Térkép betöltése..."
    });
    loader.present();
    this.loadGoogleMap().then((x) => {
      if (x) loader.dismiss();
    });
  }
  loadGoogleMap() {
    return new Promise((resolve) => {
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: this.lat,
            lng: this.lang
          },
          zoom: 10,
          tilt: 30
        }
      };
      this.map = GoogleMaps.create('map_canvas', mapOptions);


      this.map.one(GoogleMapsEvent.MAP_READY)
        .then(() => {

          this.map.addMarker({

            title: 'Jelenlegi helyzet',
            icon: 'yellow',
            animation: 'DROP',
            position: {
              lat: this.lat,
              lng: this.lang
            }
          }).then(() => {

            let locationsLoaded = this.locations.load().then((result) => {
              this.map.addMarker({

                title: 'Jelenlegi helyzet',
                icon: 'yellow',
                animation: 'DROP',
                position: {
                  lat: this.lat,
                  lng: this.lang
                }
              })

              let locations = result.locations;

              for (let location of locations) {
                this.map.addMarker({

                  title: location.title,
                  icon: 'red',
                  animation: 'DROP',
                  position: {
                    lat: location.latitude,
                    lng: location.longitude
                  }
                }).then(marker => {
                  marker.on(GoogleMapsEvent.MARKER_CLICK)
                    .subscribe(() => {
                      let toSnap = this.modal.create(TosnapPage, {
                        latparams: location.latitude,
                        lngparams: location.longitude
                      });
                      toSnap.present();
                    });

                });

              }
            })
          })
        });
      resolve(true);
    })
  }
}
