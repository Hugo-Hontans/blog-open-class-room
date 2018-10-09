import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-blog-angular';
  date1 = new Date('September 17, 2018');
  date2 = new Date('September 10, 2018');
  date3 = new Date('September 4, 2018');
  date4 = new Date('September 3, 2018');
  date5 = new Date('September 1, 2018')
  lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  arrayPosts = [
  new Post("Je suis un génie", this.lorem, 2, 5, 3, this.date1), 
  new Post("Je découvre Angular", this.lorem, 0, 3, 3, this.date2), 
  new Post("Je suis nul sur Angular", this.lorem, (-2), 0, 2, this.date3),
  new Post("Je suis fort en js", this.lorem, (1), 3, 2, this.date4),
  new Post("Je débute en java", this.lorem, (-1),1, 2, this.date5)
  ];

  
  

}
