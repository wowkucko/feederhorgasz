import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
/**
 * Generated class for the EtetoanyagfeltoltesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etetoanyagfeltoltes',
  templateUrl: 'etetoanyagfeltoltes.html',
})
export class EtetoanyagfeltoltesPage {
  tipus:string
  nev:string
  szin:string
  leiras:string
  kiszereles:number
  allag:string
  marka:string
  submitAttempt: boolean = false;
  etetoanyagfeltoltesForm: FormGroup;  
  constructor(private toastCtrl: ToastController,public formBuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
    this.etetoanyagfeltoltesForm = formBuilder.group({
      etetonev: ['', Validators.compose([Validators.maxLength(60), Validators.required])],
      etetokiszereles: ['', Validators.compose([Validators.required,Validators.maxLength(4), Validators.pattern('[0-9]*')])],
      etetomarka: ['', Validators.required],
      etetotipus:['', Validators.required],
      etetoallag: ['', Validators.required],
      etetoszin: ['', Validators.required]      
    });
  }

  etetoanyagfeltolt() {
    
    this.firebasedb.list("/etetoanyagok/")
    .push({
      tipus:this.tipus,
      nev:this.nev,
      marka:this.marka,
      szin:this.szin,
      leiras:"",
      kiszereles:this.kiszereles,
      keplink:"",
      approved:0,
      allag:this.allag
    });
}

save(){
  this.submitAttempt = true;
   
   if(!this.etetoanyagfeltoltesForm.valid){
    alert("Ellenőrizd a mezőket!");
}
else{
  this.etetoanyagfeltolt();
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
