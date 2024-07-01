import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dash-menu',
  standalone: true,
  imports: [],
  templateUrl: './dash-menu.component.html',
  styleUrl: './dash-menu.component.css'
})
export class DashMenuComponent {
  //Se utilizará para manipular propiedades de estilo del elemento
  @ViewChild('myDiv') myDiv!: ElementRef;
  @ViewChild('icon') icon!: ElementRef;
  @ViewChild('nav') nav!: ElementRef;
  //controla el estado de visibilidad del menú. Inicialmente está oculto (false).
  isDisplayed = false;
  constructor (){
  }
  //activa el evento para mostrar u ocultar el menú. Cambia el estado de isDisplayed y ajusta los estilos de los elementos myDiv y nav según el estado actual.
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
  //Aquí se realiza una verificación inicial del estado de myDiv. Si está oculto (display: none), muestra una alerta ("hello").
  ngAfterViewInit() {
    if (this.myDiv.nativeElement.style.display === 'none') {
      alert('hello');
    }
  }
}
