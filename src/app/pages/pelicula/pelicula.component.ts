import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  constructor(private visdeos:VideosService){

  }
OnInit(){
  this.data =this.visdeos.getVideos();
  console.log(this.data);
}
}
