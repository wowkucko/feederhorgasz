

import { Component } from '@angular/core';

import { TudastarPage } from '../tudastar/tudastar';
import { FogasinaploPage } from '../fogasinaplo/fogasinaplo';
import { HomePage } from '../home/home';
import { NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = HomePage;
  tab2Root = TudastarPage;
  tab3Root = FogasinaploPage;
  homeParams={
    facebooknev: this.navParams.get('nev'),
    facebookemail: this.navParams.get('email'),
    facebookprofilkep: this.navParams.get('profilkep')

  }

  constructor(public navParams: NavParams) {

  }
}
