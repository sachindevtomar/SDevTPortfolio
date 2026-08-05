import { Component, OnInit, HostListener, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import Highcharts from 'highcharts/esm/highcharts';
import 'highcharts/esm/highcharts-3d';
import 'highcharts/esm/modules/exporting';
import 'highcharts/esm/modules/export-data';
import 'highcharts/esm/modules/accessibility';

@Component({
  selector: 'app-3D-donut-chart',
  templateUrl: './3D-donut-chart.component.html',
  styleUrls: ['./3D-donut-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false
})
export class Donut3DChartComponent implements OnInit, OnChanges {
  @Input() seriesData: [string, number][] = [];
  @Input() seriesName: string = '';
  @Input() chartTitle: string = '';
  @Input() selectedDifficulty: string = '';
  isMobile: boolean = false;
  chart!: Highcharts.Chart;

  options: Highcharts.Options = {};

  constructor() {
    this.getScreenSize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['seriesData']) {
      this.seriesData = changes['seriesData'].currentValue;
      this.options = {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 40
          },
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 500, y2: 500 },
            stops: [
              [0, 'rgb(255, 255, 255)'],
              [1, 'rgb(200, 200, 255)']
            ]
          },
        },
        plotOptions: {
          pie: {
            innerSize: this.isMobile ? 100 : 150,
            depth: 75
          }
        },
        series: [{
          type: 'pie',
          name: this.seriesName,
          data: this.seriesData
        }],
        title: {
          text: this.chartTitle
        },
        subtitle: {
          text: ''
        }
      };

      this.update3DDonutChart();
    }
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize')
  getScreenSize(): void {
    this.isMobile = window.innerWidth <= 480;
  }

  private update3DDonutChart(): void {
    this.chart = Highcharts.chart('chart-container', this.options);
    this.chart.series[0].data.forEach((d: Highcharts.Point, i: number) => {
      if (d.name === this.selectedDifficulty) {
        this.chart.series[0].data[i].onMouseOver();
      }
    });
    this.chart.setTitle({
      useHTML: true,
      text: "<img src='https://firebasestorage.googleapis.com/v0/b/feehub-b8a09.appspot.com/o/LeetCodeLogo.png?alt=media&token=da272d1b-c4ef-4ec1-80fd-6a3a8d6c0ed5' alt='' width='50' height='50'/>" + " Dashboard"
    });
  }
}
