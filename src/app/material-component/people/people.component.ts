import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  contacts: any[] = [];
  searchText: any;
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  constructor() { 
    this.contacts = [
      {
          contactimg: 'assets/images/users/2.jpg',
          contactname: 'Johnathan Doe',
          contactpost: 'Web Designer',
          contactadd: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107',
          contactno: '(123) 456-7890',
          contactinstagram: '254',
          contactlinkedin: '54',
          contactfacebook: '154'
      },
      {
          contactimg: 'assets/images/users/8.jpg',
          contactname: 'Oliver Smith',
          contactpost: 'Theme Designer',
          contactadd: '55 E 11th St #1OTH, Suite 600 New York, NY, 10003 ',
          contactno: '(212) 228-8403',
          contactinstagram: '150',
          contactlinkedin: '14',
          contactfacebook: '165'
      },
      {
          contactimg: 'assets/images/users/4.jpg',
          contactname: 'George Johnson',
          contactpost: 'Front End Developer',
          contactadd: '36 W 138th St, San Francisco New York, NY, 10037',
          contactno: '(212) 234-0783',
          contactinstagram: '300',
          contactlinkedin: '65',
          contactfacebook: '130'
      },
      {
          contactimg: 'assets/images/users/5.jpg',
          contactname: 'Harry Potter',
          contactpost: 'Hacker',
          contactadd: '2289 5th Ave, Suite 600 San Francisco New York, NY, 10037',
          contactno: '(212) 456-8403',
          contactinstagram: '220',
          contactlinkedin: '38',
          contactfacebook: '178'
      },
      {
          contactimg: 'assets/images/users/6.jpg',
          contactname: 'Jack Williams',
          contactpost: 'Back End Developer',
          contactadd: '425 5th Ave, San Francisco New York, NY, 10016',
          contactno: '(154) 456-8745',
          contactinstagram: '650',
          contactlinkedin: '150',
          contactfacebook: '195'
      },
      {
          contactimg: 'assets/images/users/7.jpg',
          contactname: 'Jacob Jones',
          contactpost: 'Graphics Designer',
          contactadd: '17 Stuyvesant Walk, Suite 600 New York, NY, 10009',
          contactno: '(150) 784-7890',
          contactinstagram: '151',
          contactlinkedin: '29',
          contactfacebook: '160'
      }
  ];
  }

  ngOnInit(): void {
  }

}
