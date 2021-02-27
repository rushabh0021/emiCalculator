import { Input, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() prinicipalAmount;
  @Input() intrestAmount;

  constructor() { }

  ngOnInit(): void {
    this.DrawChart(this.prinicipalAmount, this.intrestAmount);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.prinicipalAmount && changes.intrestAmount) {
      this.DrawChart(changes.prinicipalAmount.currentValue, changes.intrestAmount.currentValue);
    } else if (changes.prinicipalAmount) {
      this.DrawChart(changes.prinicipalAmount.currentValue, this.intrestAmount);
    } else {
      this.DrawChart(this.prinicipalAmount, this.intrestAmount);
    }
  }

  DrawChart(A, totalInterestVal) {
    var ctx = document.getElementById("myChart");

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Principal Amount", "Interest Amount"],
        datasets: [
          {
            backgroundColor: ["#5367ff", "#00d09c"],
            data: [A, totalInterestVal]
          },
        ],
      },
      options: {
        segmentShowStroke: false,
        responsive: true,
      },
    });
  }
}
