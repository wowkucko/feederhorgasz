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
  url2;


  constructor(public http: Http) {
    this.url='http://api.wunderground.com/api/'+this.apiKey+'/conditions/lang:HU/q';
    this.url2='http://api.wunderground.com/api/'+this.apiKey+'/forecast/lang:HU/q';
  }

  getIdojaras(city, country){
    return this.http.get(this.url+'/'+country+'/'+city+'.json')
    .map(res=>res.json());
  }

  getIdojaraselorejelzes(city, country){
    return this.http.get(this.url2+'/'+country+'/'+city+'.json')
    .map(res=>res.json());
  }

}
