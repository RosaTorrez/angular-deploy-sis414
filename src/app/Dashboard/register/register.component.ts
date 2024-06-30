import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  url = 'https://angularsis414-default-rtdb.firebaseio.com/'
  title: string = '';
  category: string = '';
  description: string = '';
  poster: string = '';
  video: string = '';
  movies: any[] = [];
  posterValid: boolean | null = null;

  constructor(private router: Router){
  }
  validatePoster(): void {
    const urlPattern = /\.(jpeg|jpg|gif|png|svg|webp)$/i;
    this.posterValid = urlPattern.test(this.poster);
    if(this.posterValid){
      this.checkImageExists();
    }else{
      alert("url invalida")
    }
  }
  checkImageExists(){
    const img = new Image();
    img.src = this.poster;
    img.onload = ()=>{
        this.postMovie();
    };
    img.onerror = ()=>{
      alert("url invalida");
    } 
  }

  validForm(){
    if(this.title=='' || this.category == '' || this.description == '' || this.poster == '' || this.video == ''){
      alert("Complete todos los campos");
    }else{
      this.checkImageExists();
    }
  }
  async postMovie(){
    const movie = {
      title: this.title,
      category: this.category,
      description: this.description,
      poster: this.poster,
      video: this.video

    }
    await fetch(`${this.url}movies.json`,{
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-type': 'aplication/json; charset = UTF-8'
      }
    });
    this.router.navigate(['/dashboard']);
  }
}
