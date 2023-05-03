import { Component, OnInit } from '@angular/core';
 class Message {
  from='';
  email='';
  date=0;
  subject='';
  avatar='';
  icon: any;
  iconClass: any;
  body='';
  tag='';
  type='';
  designation='';
  important=false;
  id=0;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  selectedMessage: Message ={
    from: 'Nirav Joshi',
    email: 'info@wrappixel.com',
    designation: 'Director of engineering',
    date: 1527207139000,
    subject:
      'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
    avatar: 'assets/images/users/1.jpg',
    icon: 'group',
    iconClass: 'mat-text-primary',
    body:
      '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>  <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n   <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
    tag: 'Personal',
    type: 'danger',
    important: true,
    id: 1
  };

  constructor() { }

  ngOnInit(): void {
  }

}
