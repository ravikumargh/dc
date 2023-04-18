import { Component, Input } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  @Input() sidenav: any;
  
  constructor(private router: Router) { 
  console.log(this.sidenav);

  }
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
