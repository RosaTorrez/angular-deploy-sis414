import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-use',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delete-use.component.html',
  styleUrl: './delete-use.component.css'
})
export class DeleteUseComponent {
  url = 'https://angularsis414-default-rtdb.firebaseio.com/'
  users: any[] = [];
  users2: any[] = [];
  dataService: any;
  search: string = '';

  constructor(private router: Router){
    //cargar los usuarios al inicializar el componente.
    this.getUsers();
  }
  
  ngOnInit(){
    //para cargar los usuarios al inicializar el componente.
    this.getUsers();
  }
  
  async getUsers(){
    const res = await fetch(`${this.url}users.json`);
    const data = await res.json();
    this.users2 = data;
    this.users = Object.keys(data).map(key => ({
      ...data[key],
      id: key,
      backgroundColor: this.getRandomColor()
    }));
  }
  async deleteUser(email: any){
    // eliminar un usuario de la base de datos Firebase
    const res = await fetch(`${this.url}users.json`);
    const data = await res.json();
    for(let key in data){
      if(data[key].email == email){
        await fetch(`${this.url}users/${key}.json`,{
          method: "DELETE"
        });
        alert('Eliminación exitosa');
        this.getUsers();
        break;
      }
    }
  }
  
  searchMovies(name: string): boolean {
    //Método que filtra los usuarios por nombre basado en el término
    // de búsqueda (search). Devuelve true si el nombre coincide con 
    //el término de búsqueda.
    return name.toLowerCase().includes(this.search.toLowerCase());
  }
  
  getRandomColor(): string {
    //Método que genera un color
    // hexadecimal aleatorio para cada usuario
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }  
}
