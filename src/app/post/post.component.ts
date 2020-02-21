import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts:any
  constructor(private service:FirebaseService) { }

  ngOnInit() {
    this.service.getalbums()
    .subscribe(response => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';
  
    this.service.create(post)
      .subscribe((response: { id }) => {
        post['id'] = response.id;
        this.posts.splice(0,0, post);
      });
  }

}
