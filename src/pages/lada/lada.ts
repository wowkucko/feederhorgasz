import {
  MyetetoPage
} from '../myeteto/myeteto';
import {
  MytoPage
} from '../myto/myto';
import {
  MycsaliPage
} from '../mycsali/mycsali';
import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';

/**
 * Generated class for the LadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lada',
  templateUrl: 'lada.html',
})
export class LadaPage {

  constructor(private modal: ModalController, public navCtrl: NavController, public navParams: NavParams) {}



  openMycsali() {
    const mycsalipanel = this.modal.create(MycsaliPage, {
      facebookadatok: this.navParams.data,
      oldalnev: "lada"
    });
    mycsalipanel.present();
  }

  openMyto() {
    const mytopanel = this.modal.create(MytoPage, {
      facebookadatok: this.navParams.data,
      oldalnev: "lada"
    });
    mytopanel.present();
  }
  openMyetetoanyag() {
    const myetetoanyagpanel = this.modal.create(MyetetoPage, {
      facebookadatok: this.navParams.data,
      oldalnev: "lada"
    });
    myetetoanyagpanel.present();
  }

}
