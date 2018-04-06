import { Component,Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the CsalireszletekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-csalireszletek',
  templateUrl: 'csalireszletek.html',
})
export class CsalireszletekPage {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  active: boolean;
  headerImage:any = "";
  public csalireszletek={}
  public facebookadatok={}
  ladabol:boolean

  constructor(public navCtrl: NavController, public navParams: NavParams,private firebasedb: AngularFireDatabase) {
    
    if(this.navParams.get("mycsalireszletek")!=null)
    {
      
      
      this.firebasedb.list("/csalik/").subscribe(_data => {
        
        this.csalireszletek = _data.filter(item => item.$key == this.navParams.get("mycsalireszletek").id);
        
        this.ladabol=true;
        
      })
    }
    else{
      this.csalireszletek=this.navParams.get("csalireszletek");
      this.facebookadatok=this.navParams.get("facebookadatok");
      this.ladabol=false;
    }
  }


  PushTolada(){
    this.firebasedb.list("/mycsali/")
    .push({
      id:this.navParams.get("csalireszletek").$key,
      useremail:this.navParams.get("facebookadatok").facebookemail,
      csalineve:this.navParams.get("csalireszletek").nev
    });
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
            if (d.scrollTop < 200) {
                this.active = false;
                return;
            }
            this.active = true;
        });
    }
}
}
