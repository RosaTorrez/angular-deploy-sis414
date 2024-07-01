import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseServiceService } from '../../services/database/database.service.service';



@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, 
            FormsModule ,
          ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
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
    this.router.navigate(['/addUpdateMovie']);
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
    this.router.navigate(['/addUpdateMovie']);
  }
  searchMovies(title: string): boolean {
    return title.toLowerCase().includes(this.search.toLowerCase());
  }
}
