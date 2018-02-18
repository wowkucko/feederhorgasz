import {
  MyetetoPage
} from './../myeteto/myeteto';
import { Keyboard } from '@ionic-native/keyboard';
import {
  MycsaliPage
} from '../mycsali/mycsali';
import {
  MytoPage
} from '../myto/myto';
import {
  dateSortValue
} from 'ionic-angular/umd/util/datetime-util';
import {
  Component,
  ViewChild
} from '@angular/core';
import {
  NavController,
  NavParams,
  ViewController,
  LoadingController,
  ToastController,
  Platform
} from 'ionic-angular';
import {
  Camera
} from '@ionic-native/camera';
import {
  AngularFireDatabase
} from 'angularfire2/database';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import firebase from 'firebase';


/**
 * Generated class for the FogasfeltoltesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-fogasfeltoltes',
  templateUrl: 'fogasfeltoltes.html',
})
export class FogasfeltoltesPage {
  @ViewChild('fogasfeltoltesSlider') fogasfeltoltesSlider: any;

  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;

  submitAttempt: boolean = false;

  picdata: any
  picurl: any
  mypicref: any
  fogasDatuma: string = new Date().toISOString();
  fogasHalfaj
  fogasKepe: string;
  fogasCsali: string
  fogasHelyszin: string
  fogasEtetoanyag1: string
  fogasSuly: number
  fogasEgyeb
  kepmegjelenit
  useremail
  fogasPublikus: boolean
  back:boolean=false;
  forward:boolean=true;
  kepbetolt:boolean=false;


  constructor(public platform: Platform, private keyboard: Keyboard,private toastCtrl: ToastController,public loadingCtrl: LoadingController,public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private view: ViewController, private firebasedb: AngularFireDatabase) {
    this.mypicref = firebase.storage().ref('/');
    this.fogasPublikus=true;
    this.slideOneForm = formBuilder.group({
      datum: [''],
      helyszin: ['', Validators.compose([Validators.maxLength(60), Validators.required])],
      halfaj: ['', Validators.required]
    });
    this.slideTwoForm = formBuilder.group({
      suly: ['', Validators.compose([Validators.maxLength(3), Validators.pattern('[0-9]*')])],
      csali: ['', Validators.compose([Validators.maxLength(60), Validators.required])],
      etetoanyag1: ['', Validators.compose([Validators.maxLength(60), Validators.required])],
      megjegyzes: ['', Validators.maxLength(300)],
      publikus:['']
      });

  }


  public ionViewWillEnter() {
    this.platform.ready().then(() => {
    //this.keyboard.disableScroll(true);
  });
    if (this.navParams.get('valasztottCsali') != null) {
      this.fogasCsali = this.navParams.get('valasztottCsali').csalineve || null;
    }
    if (this.navParams.get('valasztottTo') != null) {
      this.fogasHelyszin = this.navParams.get('valasztottTo').toneve || null;
    }
    if (this.navParams.get('valasztottEtetoanyag') != null) {
      this.fogasEtetoanyag1 = this.navParams.get('valasztottEtetoanyag').etetoanyagneve || null;
    }



  }
  ionViewWillLeave(){
    this.platform.ready().then(() => {
    //this.keyboard.disableScroll(false);
  });
  }
  bezarFeltolt() {
    this.view.dismiss();
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'A feltöltés sikeres!',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


  next() {
    this.fogasfeltoltesSlider.slideNext();
    this.back=true;
    this.forward=false;
  }

  prev() {
    this.fogasfeltoltesSlider.slidePrev();
    this.back=false;
    this.forward=true;
  }

  fotoKeszit() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true

    }).then(imgdata => {
      this.picdata = imgdata;
      this.kepmegjelenit = "data:image/jpeg;base64," + imgdata;
      this.kepbetolt=true;

    })
    
  }
  fotoValaszt() {
    this.camera.getPicture({

      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM

    }).then(imgdata => {
      this.picdata = imgdata;
      this.kepmegjelenit = "data:image/jpeg;base64," + imgdata;
      this.kepbetolt=true;

    })
  }
  valasztasLadabolcsali() {
    this.navCtrl.push(MycsaliPage, {
      facebookadatok: this.navParams.data
    });
  }
  valasztasLadabolhelyszin() {
    this.navCtrl.push(MytoPage, {
      facebookadatok: this.navParams.data
    });
  }
  valasztasLadaboletetoanyag() {
    this.navCtrl.push(MyetetoPage, {
      facebookadatok: this.navParams.data
    });
  }

  save(){
    this.submitAttempt = true;
    
       if(!this.slideOneForm.valid){
           this.fogasfeltoltesSlider.slideTo(0);
       }
       else if(!this.slideTwoForm.valid){
           this.fogasfeltoltesSlider.slideTo(1);
       }
       else {
           this.adatfeltolt();
       }
  }



  async adatfeltolt() {
    let loader = this.loadingCtrl.create({content: "Feltöltés folyamatban..."});
    loader.present();
    if (this.picdata) {
      const savedPic = await this.mypicref.child(this.uid()).child('pic.jpg')
        .putString(this.picdata, 'base64', {
          contentType: 'image/jpg'
        });
      this.fogasKepe = savedPic.downloadURL;
    }



    if (!this.picdata) {
      this.fogasKepe = "https://firebasestorage.googleapis.com/v0/b/feeder-horgasz.appspot.com/o/default-no-image.png?alt=media&token=71bcb2d7-acbb-42ef-9ac8-39b9d1132410"
    };
    if (!this.fogasSuly) {
      this.fogasSuly = 0;
    };
    if (!this.fogasEgyeb) {
      this.fogasEgyeb = ""
    };



    this.firebasedb.list("/fogasok/")
      .push({
        datum: this.fogasDatuma,
        halfaj: this.fogasHalfaj,
        suly: this.fogasSuly,
        egyeb: this.fogasEgyeb,
        hasznaltcsali: this.fogasCsali,
        keplink: this.fogasKepe,
        useremail: this.navParams.get("facebookemail"),
        helyszin: this.fogasHelyszin,
        etetoanyag1: this.fogasEtetoanyag1,
        publikus: this.fogasPublikus
      });
      loader.dismiss();
      this.navCtrl.pop();
      this.presentToast();

  }
  uid() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }


}
