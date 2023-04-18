import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

	messages = [{
		title: '9 since yestarday',
		subject: 'To consider and approve the financial results for the period ended March 31, 2023 and dividend, if any',
		date: '12-Apr-2023'
	},
	{
		title: '24 in last 7 days',
		subject: 'To consider dividend and other business matters',
		date: '13-Apr-2023'
	},
	{
		title: '100 in last 30 days',
		subject: 'To consider and approve the financial results for the period ended March 31, 2023 and dividend, if any',
		date: '12-Apr-2023'
	}];
		
    messagesLatest: Object[] = this.messages.slice(0, 3);
  constructor() { }

  ngOnInit(): void {
  }

}
