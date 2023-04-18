import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.css']
})
export class StockPriceComponent implements OnInit {
  folders = [
		{
		  name: 'NSE',
		  updated: '129.70 0.39% +0.50',
		},
		{
		  name: 'BOM',
		  updated: '129.85 0.40% +0.50',
		}
	  ];
  constructor() { }

  ngOnInit(): void {
  }

}
