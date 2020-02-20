import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8Firebase';
  description = 'Angular-Fire-Demo';
 
  
  
  //  Url :'https://jsonplaceholder.typicode.com/posts';
  posts:any;
  items=[]
  selectedFile:File=null;
 
  constructor(private http:HttpClient) {
    
  }
 
  

  getposts(){
     this.posts= this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  onfileselected(event:any){
    this.selectedFile=<File>event.target.files[0];
  }
upload(){
  const fd =new FormData();
  fd.append('image',this.selectedFile,this.selectedFile.name)
this.http.post('https://jsonplaceholder.typicode.com/photos',fd).subscribe(res=>{
  console.log(res);
})
}
  
}

  

