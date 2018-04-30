import {
  SzerverzoreszletekPage
} from '../szerverzoreszletek/szerverzoreszletek';
import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Platform
} from 'ionic-angular';
import {
  Calendar
} from '@ionic-native/calendar';
import {
  AngularFireDatabase
} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-szervezo',
  templateUrl: 'szervezo.html',
})
export class SzervezoPage {
  calendars = [];
  tonev: string;

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private calendar: Calendar, private plt: Platform, private firebasedb: AngularFireDatabase) {
    this.tonev = this.navParams.get("toadatok").toreszletek.nev;

    this.plt.ready().then(() => {
      this.calendar.listCalendars().then(data => {
        this.calendars = data;
      });
    });
  }
  ionViewWillEnter() {
    console.log("lol", this.navParams.data);
  }
  addEvent(cal) {
    let date = new Date();
    let options = {
      calendarId: cal.id,
      calendarName: cal.name,
      firstReminderMinutes: 60
    };
    this.calendar.createEventInteractivelyWithOptions('Horgászat', this.tonev, 'Felvéve a Feeder Horgász applikáción keresztül.', date, date, options).then(() => {});
  }
  openCal(cal) {
    this.navCtrl.push(SzerverzoreszletekPage, {
      name: cal.name
    });
  }


}
