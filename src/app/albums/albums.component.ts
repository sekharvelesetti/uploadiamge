import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
albums:any
  constructor(private photo:FirebaseService) { }

  ngOnInit() {
    this.albums = this.photo.getalbums();

  }

}
