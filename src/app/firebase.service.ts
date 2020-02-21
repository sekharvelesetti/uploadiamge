import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http:HttpClient) { }
  getalbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPhotos(userId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?userId=${userId}`);
  }

  create(post){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(post))
  }
}
