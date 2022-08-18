import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  Chart: any;
  constructor(private apServ: ApiService) {}

  ngOnInit(): void {
    this.Chart = document.getElementById('myChart');
    Chart.register(...registerables);
    this.loadChart();
  }

  loadChart(): void {
    new Chart(this.Chart, {
      type: 'line', 
      data: {
        datasets: [{
          label: 'full 05',
          data: [this.apServ.VALUE_IN_EUROS_ON_QUANTITY_IN_KG],
          backgroundColor: '#007bff',
          tension: 0.2,
          borderColor: '#007bff',
        }],
        labels: [this.apServ.PERIOD]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales:  {
          y:{
            beginAtZero: true,
          }
        }
      }
    })
  }
}


