import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold-price',
  templateUrl: './gold-price.component.html',
  styleUrls: ['./gold-price.component.css']
})
export class GoldPriceComponent implements OnInit {
  golds = [
		{
		  name: ' 62,290.00',
		  updated: '24K Gold / 10gm',
		},
		{
		  name: '61,300.00',
		  updated: '22K Gold / 10gm',
		},
		{
		  name: 'USD / INR',
		  updated: '82.0565',
		}, 
	  ];  
  constructor() { }

  ngOnInit(): void {
  }

}
