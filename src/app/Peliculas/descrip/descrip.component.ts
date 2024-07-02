import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatabaseServiceService } from '../../services/database/database.service.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../user/footer/footer.component';

@Component({
  selector: 'app-descrip',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './descrip.component.html',
  styleUrls: ['./descrip.component.css']
})
export class DescripComponent implements OnInit, OnDestroy {
  movies: any[] = []; // Opcional: si manejas una lista de películas
  movie: any;
  safeVideoUrl: SafeResourceUrl | undefined;
  private subscription: Subscription | undefined;
  loadMovies: any;
  search: string = ''; // Propiedad para almacenar el término de búsqueda

  constructor(
    private dataService: DatabaseServiceService,
    private sanitizer: DomSanitizer,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.dataService.obtenerObjeto().subscribe(objeto => {
      this.setMovie(objeto);
    }, (error: any) => {
      console.error('Error al obtener el objeto:', error);
    });

    // Verificar si estamos en el navegador antes de usar localStorage
    if (isPlatformBrowser(this.platformId)) {
      const storedMovie = localStorage.getItem('selectedMovie');
      if (storedMovie && !this.movie) {
        this.setMovie(JSON.parse(storedMovie));
      }
    }
  }

  // Método para establecer la película seleccionada
  private setMovie(movie: any) {
    this.movie = movie;
    if (this.movie && this.movie.video) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.video);
    }
  }

  // Método para manejar la búsqueda de películas
  onSearch(): void {
    // Implementa la lógica de búsqueda aquí
    if (!this.movies) return; // Opcional: si manejas una lista de películas
    // Filtra las películas basadas en el término de búsqueda
    this.movies = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
