import { IdomerobeallitasokPage } from '../pages/idomerobeallitasok/idomerobeallitasok';
import { FogasreszletekPage } from '../pages/fogasreszletek/fogasreszletek';
import { EtetoanyagreszletekPage } from '../pages/etetoanyagreszletek/etetoanyagreszletek';
import { EtetoanyaglistazasPage } from '../pages/etetoanyaglistazas/etetoanyaglistazas';
import { LadaPage } from '../pages/lada/lada';
import { MyetetoPage } from '../pages/myeteto/myeteto';
import { MycsaliPage } from '../pages/mycsali/mycsali';
import { MytoPage } from '../pages/myto/myto';
import { CsalireszletekPage } from '../pages/csalireszletek/csalireszletek';
import { CsalilistazasPage } from '../pages/csalilistazas/csalilistazas';
import { ToreszletekPage } from '../pages/toreszletek/toreszletek';
import { TolistazasPage } from '../pages/tolistazas/tolistazas';
import { EtetoanyagfeltoltesPage } from './../pages/etetoanyagfeltoltes/etetoanyagfeltoltes';
import { TofeltoltesPage } from '../pages/tofeltoltes/tofeltoltes';
import { CsalifeltoltesPage } from '../pages/csalifeltoltes/csalifeltoltes';
import { ProfilePage } from '../pages/profile/profile';
import { IdojarasPage } from '../pages/idojaras/idojaras';
import { BeallitasokPage } from '../pages/beallitasok/beallitasok';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
import { TudastarPage } from '../pages/tudastar/tudastar';
import { FogasinaploPage } from '../pages/fogasinaplo/fogasinaplo';
import { TerkepPage } from '../pages/terkep/terkep';
import { ItemPage } from '../pages/item/item';
import { TerkeplistaPage } from '../pages/terkeplista/terkeplista';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UdvozoljukPage } from './../pages/udvozoljuk/udvozoljuk';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { FogasfeltoltesPage } from '../pages/fogasfeltoltes/fogasfeltoltes';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GoogleCsatlakozasProvider } from '../providers/google-csatlakozas/google-csatlakozas';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { HelyekProvider } from '../providers/helyek/helyek';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { Vibration } from '@ionic-native/vibration'
import { IdojarasProvider } from '../providers/idojaras/idojaras';
import { IonicStorageModule } from '@ionic/storage';
import { IdomeroPage } from '../pages/idomero/idomero';

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
    TabsPage,
    LoginPage,
    SignupPage,
    UdvozoljukPage,
    TudastarPage,
    FogasinaploPage,
    TerkepPage,
    TerkeplistaPage,
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
    IdomerobeallitasokPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    UdvozoljukPage,
    TudastarPage,
    FogasinaploPage,
    TerkepPage,
    TerkeplistaPage,
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
    IdomerobeallitasokPage
    
    
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleCsatlakozasProvider,
    GoogleMapsProvider,
    HelyekProvider,
    Geolocation,
    Network,
    Camera,
    IdojarasProvider,
    Vibration
  ]
})
export class AppModule {
  
}
