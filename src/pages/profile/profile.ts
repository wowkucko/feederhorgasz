import { UdvozoljukPage } from '../udvozoljuk/udvozoljuk';
import { BeallitasokPage } from '../beallitasok/beallitasok';
import { IonicPage, NavController, NavParams, App,Content } from 'ionic-angular';
import { LadaPage } from '../lada/lada';
import firebase from 'firebase';
import { Component, Input, ViewChild } from '@angular/core';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  active: boolean;
  headerImage:any = "./assets/img/lake.jpg";

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }


  openBeallitasok(){
    this.navCtrl.push(BeallitasokPage);
  }

  openLada(){
    this.navCtrl.push(LadaPage,this.navParams.data);
  }
 logout(){
  firebase.auth().signOut().then((result)=>{
    this.app.getRootNav().setRoot(UdvozoljukPage);
    }

  )
 }

 onEvent(event: string, item: any, e: any) {
  if (e) {
      e.stopPropagation();
  }
  if (this.events[event]) {
      this.events[event](item);
  }
}

ngOnChanges(changes: { [propKey: string]: any }) {
  if (changes.data && changes.data.currentValue) {
      this.headerImage = changes.data.currentValue.headerImage;
  } 
  this.subscribeToIonScroll();
}

ngAfterViewInit() {
  this.subscribeToIonScroll();
}

isClassActive() {
  return this.active;
}

subscribeToIonScroll() {
  if (this.content != null && this.content.ionScroll != null) {
      this.content.ionScroll.subscribe((d) => {
          if (d.scrollTop < 200 ) {
              this.active = false;
              return;
          }
          this.active = true;
      });
  }
}


}
