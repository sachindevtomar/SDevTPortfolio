import { Component, VERSION, OnInit, Input } from '@angular/core';
import { IStatsFigure } from 'src/app/model/StatsFigure';
import * as Highcharts from 'highcharts';

import More from 'highcharts/highcharts-more';
More(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);

import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);

import ExportData from 'highcharts/modules/export-data';
ExportData(Highcharts);

import Accessibility from 'highcharts/modules/accessibility';
Accessibility(Highcharts);

@Component({
  selector: 'app-3D-donut-chart',
  templateUrl: './3D-donut-chart.component.html',
  styleUrls: ['./3D-donut-chart.component.scss']
})
export class Donut3DChartComponent implements OnInit {
  //@Input() statsFigure: IStatsFigure;

  activity: any;
  xData: any;
  label: any;
  options:any;

  constructor() { 

    this.options = {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: 'Weekly fruit delivery'
      },
      subtitle: {
          text: ''
      },
      plotOptions: {
          pie: {
              innerSize: 100,
              depth: 45
          }
      },
      series: [{
          name: 'Delivered amount',
          data: [
              ['Bananas', 8],
              ['Kiwi', 3],
              ['Mixed nuts', 1],
              ['Oranges', 6],
              ['Apples', 8],
              ['Pears', 4],
              ['Clementines', 4],
              ['Reddish (bag)', 1],
              ['Grapes (bunch)', 1]
          ]
      }]
    };
  }

  ngOnInit(): void {
    Highcharts.chart('container', this.options);
  }

}
