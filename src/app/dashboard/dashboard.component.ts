import { Component, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
	messages = [{
		title: 'Financial Results/Dividend',
		subject: 'To consider and approve the financial results for the period ended March 31, 2023 and dividend, if any',
		date: '12-Apr-2023'
	},
	{
		title: 'Dividend/Other business matters',
		subject: 'To consider dividend and other business matters',
		date: '13-Apr-2023'
	},
	{
		title: 'Other business matters',
		subject: 'To consider and approve the financial results for the period ended March 31, 2023 and dividend, if any',
		date: '12-Apr-2023'
	},
	{
		title: 'Financial Results/Dividend',
		subject: 'To consider and approve the financial results for the period ended March 31, 2023 and dividend, if any',
		date: '12-Apr-2023'
	},
	{
		title: 'Financial Results/Dividend',
		subject: 'To consider and approve the financial results for the period ended March 31, 2023 and dividend, if any',
		date: '12-Apr-2023'
	}];
		
    messagesLatest: Object[] = this.messages.slice(0, 3);
	
	ngAfterViewInit() { }

}
