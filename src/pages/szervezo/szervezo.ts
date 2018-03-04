import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

@IonicPage()
@Component({
  selector: 'page-szervezo',
  templateUrl: 'szervezo.html',
})
export class SzervezoPage {

  event = { title: "", location: "", message: "", startDate: "", endDate: "" };
  
    constructor(public alertCtrl: AlertController,
      public navCtrl: NavController,
      public navParams: NavParams,
      private calendar: Calendar) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad AddEventPage');
    }
  
    async save() {
      const canRequest=await this.calendar.hasReadWritePermission();
      if (canRequest){
      this.calendar.createEvent(this.event.title, this.event.location, this.event.message, new Date(this.event.startDate), new Date(this.event.endDate)).then(
        (msg) => {
          let alert = this.alertCtrl.create({
            title: 'Sikeres!',
            subTitle: 'Esemény elmentve!',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.pop();
        },
        (err) => {
          let alert = this.alertCtrl.create({
            title: 'Hiba!',
            subTitle: err,
            buttons: ['OK']
          });
          alert.present();
        }
      );
    }
    else{
      const mehet=await this.calendar.requestReadWritePermission();
      if(mehet){
      this.save();
    }
    }
    }
  
  }