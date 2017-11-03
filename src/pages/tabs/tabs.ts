

import { Component } from '@angular/core';

import { TudastarPage } from '../tudastar/tudastar';
import { FogasinaploPage } from '../fogasinaplo/fogasinaplo';
import { ProfilePage } from '../profile/profile';

import { HomePage } from '../home/home';
import { NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = HomePage;
  tab2Root = TudastarPage;
  tab3Root = FogasinaploPage;
  tab4Root = ProfilePage;
  homeParams={
    facebooknev: this.navParams.get('nev'),
    facebookemail: this.navParams.get('email'),
    facebookprofilkep: this.navParams.get('profilkep')

  }

  constructor(public navParams: NavParams) {

  }
}
