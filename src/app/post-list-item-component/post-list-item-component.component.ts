import { Component, OnInit, Input } from '@angular/core';





@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

  ajouteLove(){
  		this.post.loveIts ++;
  		this.post.lovePositif ++;
  		console.log(this.post.loveIts);
  	}
  	soustraitLove(){
  		this.post.loveIts --;
  		this.post.loveNegatif ++;
  		console.log(this.post.loveIts);
  	}

}
