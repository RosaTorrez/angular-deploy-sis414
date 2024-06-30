import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CrudComponent } from '../../Dashboard/crud/crud.component';
import { DashMenuComponent } from '../../Dashboard/dash-menu/dash-menu.component';

@Component({
  selector: 'app-dash-cru',
  standalone: true,
  imports: [CrudComponent, DashMenuComponent],
  templateUrl:'./dash-cru.component.html',
  styleUrl: './dash-cru.component.css'
})
export class DashCruComponent {
  @ViewChild('icon') icon!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  isDisplayed = false;

  toggleMenu(){
    
    this.isDisplayed = !this.isDisplayed;
    if(this.isDisplayed){
      this.menu.nativeElement.style.display = 'block';
    }else{ 
      this.menu.nativeElement.style.display = 'none';
    }
  }
  windowWidth: number = 0;
  windowHeight: number = 0;

  ngOnInit() {
    this.updateWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateWindowSize();
  }

  updateWindowSize() {
    if (this.isBrowser()) {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth > 1000){
        this.menu.nativeElement.style.display = 'block';
        this.isDisplayed = false
      }else{
        this.menu.nativeElement.style.display = 'none';
      }
    }
  }

  isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}
