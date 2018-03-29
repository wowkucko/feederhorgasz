import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  AngularFireDatabase
} from 'angularfire2/database';
import * as d3 from "d3";
import {
  Chart
} from 'chart.js';
import {
  ViewChild
} from '@angular/core';
/**
 * Generated class for the StatisztikakPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statisztikak',
  templateUrl: 'statisztikak.html',
})
export class StatisztikakPage {
  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  osszesfogasadatok = []


  constructor(public navCtrl: NavController, public navParams: NavParams, private firebasedb: AngularFireDatabase) {
    this.firebasedb.list("/fogasok/").subscribe(_data => {

      // this.osszesfogasadatok = _data.filter(item => item.publikus == true);
      // let fogasSzam=this.osszesfogasadatok.length;
      let sulySum = _data.reduce((sum, item) => sum + parseInt(item.suly), 0);
      let sulySumMap = _data.map((item, index) => {
        var n = new Date(item.datum);
        return {

          ev: n.getFullYear(),
          honap: n.getMonth() + 1,
          nap: n.getDate(),
          suly: item.suly,
          halfaj: item.halfaj,
          eteto: item.etetoanyag1,
          csali: item.hasznaltcsali,
          helyszin: item.helyszin
        }

      });
      var sulySumByDate = d3.nest()
        .key(function (d) {
          return d.ev;
        })
        .key(function (d) {
          return d.honap;
        })
        .key(function (d) {
          return d.nap;
        })
        .key(function (d) {
          return d.halfaj;
        })
        .rollup(function (values) {
          return d3.sum(values, function (d) {
            return parseInt(d.suly);
          });
        })
        .map(sulySumMap)
      console.log("sulysum", sulySumByDate);

      var etetoSumByDate = d3.nest()
        .key(function (d) {
          return d.ev;
        })
        .key(function (d) {
          return d.honap;
        })
        .key(function (d) {
          return d.nap;
        })
        .key(function (d) {
          return d.halfaj;
        })
        .key(function (d) {
          return d.eteto;
        })
        .key(function (d) {
          return d.helyszin;
        })
        .rollup(function (values) {
          return d3.sum(values, function (d) {
            return parseInt(d.suly);
          });
        })
        .map(sulySumMap)
     // console.log("etetosum", etetoSumByDate);

      var csaliSumByDate = d3.nest()
        .key(function (d) {
          return d.ev;
        })
        .key(function (d) {
          return d.honap;
        })
        .key(function (d) {
          return d.nap;
        })
        .key(function (d) {
          return d.halfaj;
        })
        .key(function (d) {
          return d.csali;
        })
        .key(function (d) {
          return d.helyszin;
        })
        .rollup(function (values) {
          return d3.sum(values, function (d) {
            return parseInt(d.suly);
          });
        })
        .map(sulySumMap)
     // console.log("etetosum", csaliSumByDate);


    });


  }

  ionViewDidLoad() {
   /* this.barChart = new Chart(this.barCanvas.nativeElement, {
      
                 type: 'bar',
                 data: {
                     labels: ["zex"],
                     datasets: [{
                         label: '# of Votes',
                         data: chartData,
                         backgroundColor: [
                             'rgba(255, 99, 132, 0.2)',
                             'rgba(54, 162, 235, 0.2)',
                             'rgba(255, 206, 86, 0.2)',
                             'rgba(75, 192, 192, 0.2)',
                             'rgba(153, 102, 255, 0.2)',
                             'rgba(255, 159, 64, 0.2)'
                         ],
                         borderColor: [
                             'rgba(255,99,132,1)',
                             'rgba(54, 162, 235, 1)',
                             'rgba(255, 206, 86, 1)',
                             'rgba(75, 192, 192, 1)',
                             'rgba(153, 102, 255, 1)',
                             'rgba(255, 159, 64, 1)'
                         ],
                         borderWidth: 1
                     }]
                 },
                 options: {
                     scales: {
                         yAxes: [{
                             ticks: {
                                 beginAtZero:true
                             }
                         }]
                     }
                 }
      
             });*/
  }
  

}
