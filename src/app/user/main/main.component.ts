import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  slideIndex: number = 1;
  movies: any[] = [];

  constructor() {}

 

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number): void {
    if (typeof document !== 'undefined') {
      let i: number;
      let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
      let dots: HTMLCollectionOf<Element> = document.getElementsByClassName("dot");
      
      if (slides.length === 0 || dots.length === 0) {
        return; 
        // Salir si no se encuentran elementos
      }
  
      if (n > slides.length) { this.slideIndex = 1; }    
      if (n < 1) { this.slideIndex = slides.length; }
  
      for (i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";  
      }
  
      for (i = 0; i < dots.length; i++) {
        (dots[i] as HTMLElement).className = (dots[i] as HTMLElement).className.replace(" active", "");
      }
  
      (slides[this.slideIndex-1] as HTMLElement).style.display = "block";  
      (dots[this.slideIndex-1] as HTMLElement).className += " active";
    }
  }
}
