import { Calendar } from '@ionic-native/calendar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the SzerverzoreszletekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-szerverzoreszletek',
  templateUrl: 'szerverzoreszletek.html',
})
export class SzerverzoreszletekPage {
  calName='';
  events=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar, private plt: Platform) {
    this.calName=this.navParams.get('name');
    if (this.plt.is('ios')){
      this.calendar.findAllEventsInNamedCalendar(this.calName).then(data=>{
        this.events=data;
      
      });
    } else if (this.plt.is('android')){
      let start=new Date();
      let end=new Date();
      end.setDate(end.getDate()+31);
      this.calendar.listEventsInRange(start,end).then(data=>{
          this.events=data;

        console.log("eventek",this.events)
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SzerverzoreszletekPage');
  }

}
