import {
  SzerverzoreszletekPageModule
} from './../pages/szerverzoreszletek/szerverzoreszletek.module';
import {
  StatisztikakPageModule
} from './../pages/statisztikak/statisztikak.module';
import {
  SzervezoPageModule
} from './../pages/szervezo/szervezo.module';
import {
  TosnapPageModule
} from './../pages/tosnap/tosnap.module';
import {
  IdomerobeallitasokPageModule
} from './../pages/idomerobeallitasok/idomerobeallitasok.module';
import {
  FogasreszletekPageModule
} from './../pages/fogasreszletek/fogasreszletek.module';
import {
  EtetoanyagreszletekPageModule
} from './../pages/etetoanyagreszletek/etetoanyagreszletek.module';
import {
  EtetoanyaglistazasPageModule
} from './../pages/etetoanyaglistazas/etetoanyaglistazas.module';
import {
  LadaPageModule
} from './../pages/lada/lada.module';
import {
  MyetetoPageModule
} from './../pages/myeteto/myeteto.module';
import {
  MycsaliPageModule
} from './../pages/mycsali/mycsali.module';
import {
  MytoPageModule
} from './../pages/myto/myto.module';
import {
  CsalireszletekPageModule
} from './../pages/csalireszletek/csalireszletek.module';
import {
  CsalilistazasPageModule
} from './../pages/csalilistazas/csalilistazas.module';
import {
  IdomeroPageModule
} from './../pages/idomero/idomero.module';
import {
  ToreszletekPageModule
} from './../pages/toreszletek/toreszletek.module';
import {
  TolistazasPageModule
} from './../pages/tolistazas/tolistazas.module';
import {
  EtetoanyagfeltoltesPageModule
} from './../pages/etetoanyagfeltoltes/etetoanyagfeltoltes.module';
import {
  TofeltoltesPageModule
} from './../pages/tofeltoltes/tofeltoltes.module';
import {
  CsalifeltoltesPageModule
} from './../pages/csalifeltoltes/csalifeltoltes.module';
import {
  ProfilePageModule
} from './../pages/profile/profile.module';
import {
  IdojarasPageModule
} from './../pages/idojaras/idojaras.module';
import {
  ItemPageModule
} from './../pages/item/item.module';
import {
  FogasfeltoltesPageModule
} from './../pages/fogasfeltoltes/fogasfeltoltes.module';
import {
  TerkepPageModule
} from './../pages/terkep/terkep.module';
import {
  FogasinaploPageModule
} from './../pages/fogasinaplo/fogasinaplo.module';
import {
  TudastarPageModule
} from './../pages/tudastar/tudastar.module';
import {
  UdvozoljukPageModule
} from './../pages/udvozoljuk/udvozoljuk.module';
import {
  BeallitasokPageModule
} from './../pages/beallitasok/beallitasok.module';
import {
  SzerverzoreszletekPage
} from '../pages/szerverzoreszletek/szerverzoreszletek';
import {
  StatisztikakPage
} from '../pages/statisztikak/statisztikak';
import {
  SzervezoPage
} from '../pages/szervezo/szervezo';
import {
  TosnapPage
} from '../pages/tosnap/tosnap';
import {
  IdomerobeallitasokPage
} from '../pages/idomerobeallitasok/idomerobeallitasok';
import {
  FogasreszletekPage
} from '../pages/fogasreszletek/fogasreszletek';
import {
  EtetoanyagreszletekPage
} from '../pages/etetoanyagreszletek/etetoanyagreszletek';
import {
  EtetoanyaglistazasPage
} from '../pages/etetoanyaglistazas/etetoanyaglistazas';
import {
  LadaPage
} from '../pages/lada/lada';
import {
  MyetetoPage
} from '../pages/myeteto/myeteto';
import {
  MycsaliPage
} from '../pages/mycsali/mycsali';
import {
  MytoPage
} from '../pages/myto/myto';
import {
  CsalireszletekPage
} from '../pages/csalireszletek/csalireszletek';
import {
  CsalilistazasPage
} from '../pages/csalilistazas/csalilistazas';
import {
  ToreszletekPage
} from '../pages/toreszletek/toreszletek';
import {
  TolistazasPage
} from '../pages/tolistazas/tolistazas';
import {
  EtetoanyagfeltoltesPage
} from './../pages/etetoanyagfeltoltes/etetoanyagfeltoltes';
import {
  TofeltoltesPage
} from '../pages/tofeltoltes/tofeltoltes';
import {
  CsalifeltoltesPage
} from '../pages/csalifeltoltes/csalifeltoltes';
import {
  ProfilePage
} from '../pages/profile/profile';
import {
  IdojarasPage
} from '../pages/idojaras/idojaras';
import {
  BeallitasokPage
} from '../pages/beallitasok/beallitasok';
import {
  NgModule,
  ErrorHandler
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  IonicApp,
  IonicModule,
  IonicErrorHandler
} from 'ionic-angular';
import {
  MyApp
} from './app.component';
import {
  HttpModule
} from '@angular/http';
import {
  Network
} from '@ionic-native/network';
import {
  TudastarPage
} from '../pages/tudastar/tudastar';
import {
  FogasinaploPage
} from '../pages/fogasinaplo/fogasinaplo';
import {
  TerkepPage
} from '../pages/terkep/terkep';
import {
  ItemPage
} from '../pages/item/item';
import {
  HomePage
} from '../pages/home/home';
import {
  TabsPage
} from '../pages/tabs/tabs';
import {
  UdvozoljukPage
} from './../pages/udvozoljuk/udvozoljuk';
import {
  FogasfeltoltesPage
} from '../pages/fogasfeltoltes/fogasfeltoltes';
import {
  StatusBar
} from '@ionic-native/status-bar';
import {
  SplashScreen
} from '@ionic-native/splash-screen';
import {
  AngularFireModule
} from 'angularfire2';
import {
  AngularFireDatabaseModule
} from 'angularfire2/database';
import {
  AngularFireAuthModule
} from 'angularfire2/auth';
import {
  HelyekProvider
} from '../providers/helyek/helyek';
import {
  Geolocation
} from '@ionic-native/geolocation';
import {
  Camera
} from '@ionic-native/camera';
import {
  Vibration
} from '@ionic-native/vibration'
import {
  IdojarasProvider
} from '../providers/idojaras/idojaras';
import {
  IonicStorageModule
} from '@ionic/storage';
import {
  IdomeroPage
} from '../pages/idomero/idomero';
import {
  LocalNotifications
} from '@ionic-native/local-notifications';
import {
  BackgroundMode
} from '@ionic-native/background-mode';
import {
  Calendar
} from '@ionic-native/calendar';
import {
  InAppBrowser
} from '@ionic-native/in-app-browser';
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
import {
  Keyboard
} from '@ionic-native/keyboard';
import {
  Chart
} from 'chart.js';


import { PhotoViewer } from '@ionic-native/photo-viewer';
var config = {
  apiKey: "AIzaSyA72jwyN81S3d9YRS5kzINPIZD_92-o1cs",
  authDomain: "feeder-horgasz.firebaseapp.com",
  databaseURL: "https://feeder-horgasz.firebaseio.com",
  projectId: "feeder-horgasz",
  storageBucket: "feeder-horgasz.appspot.com",
  messagingSenderId: "381413323256"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }),
    HttpModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot(),
    BeallitasokPageModule,
    UdvozoljukPageModule,
    TudastarPageModule,
    FogasinaploPageModule,
    TerkepPageModule,
    FogasfeltoltesPageModule,
    ItemPageModule,
    IdojarasPageModule,
    ProfilePageModule,
    CsalifeltoltesPageModule,
    TofeltoltesPageModule,
    EtetoanyagfeltoltesPageModule,
    TolistazasPageModule,
    ToreszletekPageModule,
    IdomeroPageModule,
    CsalilistazasPageModule,
    CsalireszletekPageModule,
    MytoPageModule,
    MycsaliPageModule,
    MyetetoPageModule,
    LadaPageModule,
    EtetoanyaglistazasPageModule,
    EtetoanyagreszletekPageModule,
    FogasreszletekPageModule,
    IdomerobeallitasokPageModule,
    TosnapPageModule,
    SzervezoPageModule,
    StatisztikakPageModule,
    SzerverzoreszletekPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    UdvozoljukPage,
    TudastarPage,
    FogasinaploPage,
    TerkepPage,
    FogasfeltoltesPage,
    ItemPage,
    BeallitasokPage,
    IdojarasPage,
    ProfilePage,
    CsalifeltoltesPage,
    TofeltoltesPage,
    EtetoanyagfeltoltesPage,
    TolistazasPage,
    ToreszletekPage,
    IdomeroPage,
    CsalifeltoltesPage,
    CsalilistazasPage,
    CsalireszletekPage,
    MytoPage,
    MycsaliPage,
    MyetetoPage,
    LadaPage,
    EtetoanyaglistazasPage,
    EtetoanyagreszletekPage,
    FogasreszletekPage,
    IdomerobeallitasokPage,
    TosnapPage,
    SzervezoPage,
    StatisztikakPage,
    SzerverzoreszletekPage



  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    HelyekProvider,
    Geolocation,
    Network,
    Camera,
    IdojarasProvider,
    Vibration,
    LocalNotifications,
    BackgroundMode,
    GoogleMaps,
    LocationAccuracy,
    Keyboard,
    InAppBrowser,
    Calendar,
    PhotoViewer
  ]
})
export class AppModule {

}
