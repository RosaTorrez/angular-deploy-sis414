import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseServiceService } from '../../services/database/database.service.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, 
            FormsModule ,
            LazyLoadImageModule
            ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {
  url = 'https://angularsis414-default-rtdb.firebaseio.com/'
  movies: any[] = [];
  dataService: any;
  search: string = '';

  constructor(private router: Router, private idService: DatabaseServiceService){
    this.getMovie();
  }

  ngOnInit(){
    this.getMovie();
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
    alert('Eliminación exitosa');
    this.getMovie();
  }
  
  sendId(id: string){
    this.idService.changeId(id);
    this.router.navigate(['/addMovie']);
  }
  searchMovies(title: string): boolean {
    return title.toLowerCase().includes(this.search.toLowerCase());
  }
}
