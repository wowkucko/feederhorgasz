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
   /* this.firebasedb.list("/fogasok/").subscribe(_data => {

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
      this.sulyhavonta = sulySumByDate;
      console.log(this.sulyhavonta);

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
*/
  }



  ionViewDidLoad() {
    let labels = [];
    let datasets = [];
    let fishData = {};

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
    var sulyhavonta=sulySumByDate;
    console.log("sulyhavonta",sulyhavonta)
    for (let [yearKey, yearVal] of sulyhavonta.entries()) {
      debugger;
      console.log(sulyhavonta.entries());
      for (let [monthKey, monthVal] of yearVal.entries()) {
        debugger;
        console.log(yearVal.entries());
        for (let [dayKey, dayVal] of monthVal.entires()) {
          labels.push(yearKey + '.' + monthKey + '.' + dayKey);
          for (let [fish, fishVal] of dayVal.entires()) {
            if (fishData[fish] === undefined) {
              fishData[fish] = [];
            }
            fishData[fish].push(fishVal);
            console.log("fishdata",fishData);
          }
        }
      }
    }
    var colors = [
      ["#ce8d00", "#ffae00"],
      ["#007bce", "#84ceff"]
    ];
    var i = 0;
    for (let key in fishData) {
      datasets.push({
        label: key,
        data: fishData[key],
        backgroundColor: colors[i % 2][0],
        hoverBackgroundColor: colors[i % 2][1],
        hoverBorderWidth: 0
      });
      i++;
    }
    console.log("dataset",datasets)
  });

    var bar_ctx = document.getElementById('bar-chart');
    var bar_chart = new Chart(bar_ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        animation: {
          duration: 10,
        },
        scales: {
          xAxes: [{
            stacked: true,
            gridLines: {
              display: false
            },
          }],
          yAxes: [{
            stacked: true
          }],
        }, // scales
        legend: {
          display: true
        }
      } // options
    });
  }
}