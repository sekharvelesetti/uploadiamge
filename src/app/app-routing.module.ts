import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { PostComponent } from './post/post.component';



const routes: Routes = [
  { path: '',component:AlbumsComponent},
  {path: 'photos/:albumId', component:PhotosComponent},
  {path:'post',component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
