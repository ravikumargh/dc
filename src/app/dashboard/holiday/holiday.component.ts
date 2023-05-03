import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {
  messages = [{
		title: 'Bakrid / Eid al Adha',
		subject: 'To consider and approve the financial results for the period ended March 31, 2023 and dividend, if any',
		date: '29-Jun-2023'
	},
	{
		title: 'Independence Day',
		subject: 'To consider dividend and other business matters',
		date: '15-Aug-2023'
	},
	{
		title: 'Varamahalakshmi Vratha',
		subject: 'To consider and approve the financial results for the period ended March 31, 2023 and dividend, if any',
		date: '25-Aug-2023'
	},
	{
		title: 'Ganesha Chathurthi',
		subject: 'To consider and approve the financial results for the period ended March 31, 2023 and dividend, if any',
		date: '18-Sep-2023'
	},
	{
		title: 'Gandhi Jayanthi',
		subject: 'To consider and approve the financial results for the period ended March 31, 2023 and dividend, if any',
		date: '02-Oct-2023'
	}];
		
    messagesLatest: Object[] = this.messages.slice(0, 3);
  constructor() { }

  ngOnInit(): void {
  }

}
