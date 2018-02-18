import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  kommentForm: FormGroup;
  public hiradatok={};
  myDate: String = new Date().toISOString();
  bejegyzesszovege:string;
  kommentek=[];
  kommenteloneve:string;
  kommenteloavatar:string;
  submitAttempt: boolean = false;
  video: boolean=false;
  googleToken: string='AIzaSyD6OuW8NI3dLxpmgGkU2Ea0dTvZukZ_gPU';
  videos: any=[];
  loader: any;
  videoid:string;


  constructor(private iab: InAppBrowser,private http:Http,public loading: LoadingController,private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase,public formBuilder: FormBuilder) {
    this.kommentForm = formBuilder.group({
      uzenet: ['', Validators.compose([Validators.maxLength(60), Validators.required])],
    });
    this.hiradatok=this.navParams.get("hiradatok");
    if(this.navParams.get("hiradatok").acf.youtube_id!=null){
      this.video=true;
    this.videoid=this.navParams.get("hiradatok").acf.youtube_id;
  }

    this.loader=this.loading.create({content: 'Videó betöltése'});
    this.loader.present().then(()=>{
      this.fetchYt();
    });
    
    this.firebasedb.list("/cikkmegjegyzesek/").subscribe(_data => {

      _data.reverse();
      this.kommentek = _data.filter(item => item.bejegyzesid == this.navParams.get("hiradatok").id);
      
      

    })
  }
  fetchYt(){
    let url='https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id='+
    this.videoid+'&key=' + this.googleToken;

    this.http.get(url).map(res=>res.json()).subscribe(data=>{
      console.log(data.items);
      this.videos=this.videos.concat(data.items);})
      this.loader.dismiss();
    }
  
  openVideo(){
    let videourl='https://www.youtube.com/watch?v='+this.videoid;
    var ref = this.iab.create(videourl);


  }
  kommentelkuld(){
    this.submitAttempt = true;
    if(!this.kommentForm.valid){
      console.log("invalid");
  }
  

  else {
    this.firebasedb.list("/cikkmegjegyzesek/")
    .push({
      kommenteloneve:this.navParams.get("facebookadatok").facebooknev,
      kommenteloavatar:this.navParams.get("facebookadatok").facebookprofilkep,
      kommentido:this.myDate,
      bejegyzesid:this.navParams.get("hiradatok").id,
      bejegyzesszovege:this.bejegyzesszovege

      

    });
    this.presentToast();
  }
    
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Komment elküldve!',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
    

}
