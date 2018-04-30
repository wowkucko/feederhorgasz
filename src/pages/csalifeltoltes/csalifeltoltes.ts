import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import {
  AngularFireDatabase
} from 'angularfire2/database';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
/**
 * Generated class for the CsalifeltoltesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-csalifeltoltes',
  templateUrl: 'csalifeltoltes.html',
})
export class CsalifeltoltesPage {
  tipus: string
  nev: string
  meret: number
  szin: string
  leiras: string
  kiszereles: number
  allag: string
  marka: string
  submitAttempt: boolean = false;
  csalifeltoltesForm: FormGroup;


  constructor(private toastCtrl: ToastController, public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase) {
    this.csalifeltoltesForm = formBuilder.group({
      csalinev: ['', Validators.compose([Validators.maxLength(60), Validators.required])],
      csalikiszereles: ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern('[0-9]*')])],
      csalimeret: ['', Validators.compose([Validators.required, Validators.maxLength(2), Validators.pattern('[0-9]*')])],
      csalimarka: ['', Validators.required],
      csalitipus: ['', Validators.required],
      csaliallag: ['', Validators.required],
      csaliszin: ['', Validators.required]
    });
  }


  csalifeltolt() {

    this.firebasedb.list("/csalik/")
      .push({
        tipus: this.tipus,
        nev: this.nev,
        marka: this.marka,
        meret: this.meret,
        szin: this.szin,
        leiras: "",
        kiszereles: this.kiszereles,
        keplink: "",
        approved: 0,
        allag: this.allag
      });
  }

  save() {
    this.submitAttempt = true;

    if (!this.csalifeltoltesForm.valid) {
      alert("Ellenőrizd a mezőket!");
    } else {
      this.csalifeltolt();
      this.navCtrl.pop();
      this.presentToast();
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'A feltöltés sikeres!',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
