import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dash-menu',
  standalone: true,
  imports: [],
  templateUrl: './dash-menu.component.html',
  styleUrl: './dash-menu.component.css'
})
export class DashMenuComponent {
  @ViewChild('myDiv') myDiv!: ElementRef;
  @ViewChild('icon') icon!: ElementRef;
  @ViewChild('nav') nav!: ElementRef;
  
  isDisplayed = false;
  constructor (){
  }
  toggleMenu(){
    this.isDisplayed = !this.isDisplayed;
    if(this.isDisplayed){
      this.myDiv.nativeElement.style.display = 'block';
      this.icon.nativeElement.style.justifyContent= 'left';
      this.nav.nativeElement.style.width = '70%';
    }else{ 
        this.myDiv.nativeElement.style.display = 'none';
        this.nav.nativeElement.style.width = '0%';
    }
  }
  ngAfterViewInit() {
    // Verificar el estado inicial del display al cargar la página
    if (this.myDiv.nativeElement.style.display === 'none') {
      alert('hello');
    }
  }
}
