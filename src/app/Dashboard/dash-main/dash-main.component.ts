import { Component, OnInit } from '@angular/core';
import { DashHeaderComponent } from '../dash-header/dash-header.component';
import { FooterComponent } from '../../user/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-main',
  standalone: true,
  imports: [DashHeaderComponent, FooterComponent, CommonModule, DashMainComponent],
  templateUrl: './dash-main.component.html',
  styleUrl: './dash-main.component.css'
})
export class DashMainComponent implements OnInit {
  url = 'https://angularsis414-default-rtdb.firebaseio.com/';
  movies: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.getMovies();
  }

  async getMovies() {
    try {
      const res = await fetch(`${this.url}movies.json`);
      const data = await res.json();
      if (data) {
        this.movies = data; 
        // Convierte el objeto JSON a un array de películas
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      // Aquí podrías manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
  }
}
