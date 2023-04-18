import { Component, AfterViewInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
	slides = [{
		image:'assets/images/big/kbl-b-1.jpg'
	},{
		image:'assets/images/big/kbl-b-2.jpg'
	},{
		image:'assets/images/big/kbl-b-3.jpg'
	}
	];
	 
	 
	  
	ngAfterViewInit() { }

}
