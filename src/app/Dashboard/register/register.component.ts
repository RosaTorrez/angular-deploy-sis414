import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseServiceService } from '../../services/database/database.service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  url = 'https://angularsis414-default-rtdb.firebaseio.com/'
  titulo: string = '';
  categoria: string = '';
  descripcion: string = '';
  poster: string = '';
  video: string = '';
  pelicula: any[] = [];
  posterValid: boolean | null = null;
  id: string | null = null;
  update: boolean |null = null;

  constructor(private router: Router, private idService: DatabaseServiceService){
  }
  ngOnInit(): void {
    this.update = false
    this.idService.currentId$.subscribe(id => {
      this.id = id;
      if(this.id != null){
        this.getMovie();
        this.update = true;
      }else{
      }
    });
    
  }

  async getMovie(){
    const res = await fetch(`${this.url}movies/${this.id}.json`);
    const mov = await res.json();
    this.titulo = mov.title;
    this.descripcion = mov.description;
    this.categoria = mov.category;
    this.poster = mov.poster;
    this.video = mov.video;
  }
  async updateData(){
    const movie = {
      title: this.titulo,
      category: this.categoria,
      description: this.descripcion,
      poster: this.poster,
      video: this.video

    }
    const res = await fetch(`${this.url}movies/${this.id}.json`,{
      method: "PUT",
      body: JSON.stringify(movie),
      headers:{
        'Content-type':'aplication/json; charset=UTF-8'
      }
    });
    alert("se actualizó Pelicula con éxito");
    this.redirect();
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
      if(this.id == null){
        this.postMovie();
      }else{
        this.updateData();
      }
    };
    img.onerror = ()=>{
      alert("url invalida");
    } 
  }

  validForm(){
    if(this.titulo=='' || this.categoria == '' || this.descripcion == '' || this.poster == '' || this.video == ''){
      alert("Complete todos los campos");
    }else{
      this.checkImageExists();
    }
  }
  async postMovie(){
    const movie = {
      title: this.titulo,
      category: this.categoria,
      description: this.descripcion,
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
    alert("se Añadió Pelicula con éxito");
    this.redirect();
  }
  close(){
    this.router.navigate(['/crud']);
    this.idService.changeId(null);
  }
  redirect(){
    this.router.navigate(['/crud']);
  }
}