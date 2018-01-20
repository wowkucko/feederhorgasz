import { IdomerobeallitasokPage } from '../idomerobeallitasok/idomerobeallitasok';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the IdomeroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-idomero',
  templateUrl: 'idomero.html',
})
export class IdomeroPage {
  timeInSeconds: number;
  
  time: number;
  remainingTime: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
  userido:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private vibration: Vibration,private storage: Storage) {
    
  }

  ionViewDidEnter() {
  }

  ionViewDidLoad(){
    this.storage.get('idomerouserido').then((val)=>{
      if(val!=null){
        this.userido=parseInt(val);
        console.log("if ág eleje",this.userido);
        this.initTimer();
      } else{
        console.log("else ág",this.userido)
        this.userido=10;
        this.initTimer();
      }});
      
    }



  
  idomeroBeallitasok(){
    this.navCtrl.push(IdomerobeallitasokPage);
  }


  
  initTimer() {
    console.log("inittimer ág",this.userido)
    if (!this.timeInSeconds) { this.timeInSeconds = this.userido*60 }
  
    this.time = this.timeInSeconds;
     this.runTimer = false;
     this.hasStarted = false;
     this.hasFinished = false;
     this.remainingTime = this.timeInSeconds;
    
     this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
  }
  
  startTimer() {
     this.runTimer = true;
    this.hasStarted = true;
    this.timerTick();
  }
  
  pauseTimer() {
    this.runTimer = false;
  }
  
  resumeTimer() {
    this.startTimer();
  }
  
  timerTick() {
    setTimeout(() => {
  
      if (!this.runTimer) { return; }
      this.remainingTime--;
      this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
      if (this.remainingTime > 0) {
        this.timerTick();
      }
      else {
        console.log("vége");
        this.hasFinished = true;
        this.vibration.vibrate(1000);        
      }
    }, 1000);
  }
  
  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); 
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }
}