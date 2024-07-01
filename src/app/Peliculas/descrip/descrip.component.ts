import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatabaseServiceService } from '../../services/database/database.service.service';

@Component({
  selector: 'app-descrip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './descrip.component.html',
  styleUrl: './descrip.component.css'
})
export class DescripComponent {
  movie: any;
  safeVideoUrl: SafeResourceUrl | undefined;
  private subscription: Subscription | undefined;

  constructor(
    private dataService: DatabaseServiceService,
    private sanitizer: DomSanitizer,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit() {
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

  private setMovie(movie: any) {
    this.movie = movie;
    if (this.movie && this.movie.video) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.video);
    }
  }
}
