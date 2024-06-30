import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  url = 'https://angularsis414-default-rtdb.firebaseio.com/'
  movies: any[] = [];

  constructor(private router: Router){}

  ngOnInit(){
    this.getMovie()
  }
  addMovie(){
    this.router.navigate(['/addMovie']);
  }
  async getMovie(){
    const res = await fetch(`${this.url}movies.json`);
    const data = await res.json();
    this.movies = data;
  }
  async deleteMovie(id: any){
    await fetch(`${this.url}movies/${id}.json`,{
      method: "DELETE"
    });
    this.getMovie();
  }
}
