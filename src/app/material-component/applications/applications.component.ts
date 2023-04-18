import { Component, OnInit } from '@angular/core';
import { MATICONS } from './mock-mat-icon';
import { Maticons } from './mat-icon-services';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  maticons = MATICONS;

  selectedMaticons:Maticons[] = [];
  constructor() {
    this.maticons.forEach((value:any, index) => {
      console.log(index); // 0, 1, 2
      console.log(value); // 9, 2, 5
      // value.selected = false;
      if (index == 2 || index == 4 || index == 5 || index == 6 || index == 8 || index == 9 || index == 10) {
        value.selected = true;
        this.selectedMaticons.push(value); 
      }

  });
  console.log(this.selectedMaticons); // 0, 1, 2

   }

  ngOnInit(): void {
  }

}
