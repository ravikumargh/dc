import { Component } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
 
  constructor(private router: Router) { }
  openAppsPage(){
    this.router.navigate(['/apps'])
  }
  openPeoplePage(){
    this.router.navigate(['/people'])
  }
  openNewsPage(){
    this.router.navigate(['/news'])
  }
}
