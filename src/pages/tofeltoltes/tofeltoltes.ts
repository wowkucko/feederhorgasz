import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

/**
 * Generated class for the TofeltoltesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tofeltoltes',
  templateUrl: 'tofeltoltes.html',
})
export class TofeltoltesPage {

  cim:any
  nev:string
  vizterulet:number
  facebook:any
  weboldal:string
  tipus:string
  halfajtak:string
  szolgaltatasleiras:string
  egyeb:string
  megye:string
  tel:string
  submitAttempt: boolean = false;
  tofeltoltesForm: FormGroup; 
  
  constructor(public formBuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase,private toastCtrl: ToastController) {
    this.tofeltoltesForm = formBuilder.group({
      toneve: ['', Validators.compose([Validators.maxLength(60), Validators.required])],
      tocime: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
      toszama: ['', Validators.compose([Validators.maxLength(18), Validators.required,Validators.pattern('[0-9]*')])],
      tomegyeje: ['', Validators.compose([Validators.maxLength(60), Validators.required])],
    });
  }


  adatfeltolt() {
      this.firebasedb.list("/tavak/")
      .push({
        cim:this.cim,
        nev:this.nev,
        megye:this.megye,
        vizterulet:"",
        facebookurl:"",
        weboldal:"",
        tipus:"",
        halfajtak:"",
        szolgaltasleiras:"",
        egyeb:"",
        keplink:"",
        keplink2:"",
        keplink3:"",
        keplink4:"",
        lat:"",
        long:"",
        approved:0,
        tel:this.tel

      });
  }

  save(){
    this.submitAttempt = true;
    
       if(!this.tofeltoltesForm.valid){
           alert("Helytelen kitöltés!");
       }

       else {
           this.adatfeltolt();
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
