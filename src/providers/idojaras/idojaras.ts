import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the IdojarasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IdojarasProvider {
  apiKey='dc05eb73c35c0016';
  url;


  constructor(public http: Http) {
    console.log('Hello IdojarasProvider Provider');
    this.url='http://api.wunderground.com/api/'+this.apiKey+'/conditions/lang:HU/q';
  }

  getIdojaras(city){
    return this.http.get(this.url+'/'+city+'.json')
    .map(res=>res.json());
  }

}
