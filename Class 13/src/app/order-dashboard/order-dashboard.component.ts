import { Component, OnInit } from '@angular/core';
import { generate, interval } from 'rxjs';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {
allOrders = []
startingOrderNumber = 1;
handle = setInterval(() => {
  this.allOrders.push(this.startingOrderNumber++);

}, 2000);

  onStart() { this.handle
  }

  onStop() {
    clearInterval(this.handle);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
