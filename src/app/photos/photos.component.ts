import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
photos:any;
  constructor(private ser:FirebaseService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.albumId;
    this.photos = this.ser.getPhotos(this.userId);
  }
  userId(userId: any): any {
    throw new Error("Method not implemented.");
  }

}
