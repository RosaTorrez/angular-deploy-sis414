import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './connons/header/header.component';
import { FooterComponent } from './connons/footer/footer.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { SerieComponent } from './app/serie/serie.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,PeliculaComponent,SerieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Sis414 emergentes'; 
}
