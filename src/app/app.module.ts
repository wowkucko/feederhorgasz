import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
import { TudastarPage } from '../pages/tudastar/tudastar';
import { FogasinaploPage } from '../pages/fogasinaplo/fogasinaplo';
import { TerkepPage } from '../pages/terkep/terkep';
import { TerkeplistaPage } from '../pages/terkeplista/terkeplista';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UdvozoljukPage } from './../pages/udvozoljuk/udvozoljuk';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GoogleCsatlakozasProvider } from '../providers/google-csatlakozas/google-csatlakozas';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { HelyekProvider } from '../providers/helyek/helyek';
import { Geolocation } from '@ionic-native/geolocation';


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

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleCsatlakozasProvider,
    GoogleMapsProvider,
    HelyekProvider,
    Geolocation,
    Network
  ]
})
export class AppModule {
  
}
