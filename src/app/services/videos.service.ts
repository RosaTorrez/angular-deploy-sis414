import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VideosService {

  lista: any =[
    {name:"Ejemplo 1", description: "Ejemplo", link:"http//", Image:"./peliculas/imgds.png"},
    {name:"Ejemplo 2", description: "Ejemplo", link:"http//", Image:"./peliculas/imgds.png"}

  ]
  constructor() { }
  public getVides():any{
    return this.lista;
  }
}
