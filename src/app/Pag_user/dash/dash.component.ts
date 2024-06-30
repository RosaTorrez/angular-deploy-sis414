import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MainComponent } from '../../user/main/main.component';
import { HeaderComponent } from '../../user/header/header.component';
import { FooterComponent } from '../../user/footer/footer.component';
import { RegisterComponent } from '../../Dashboard/register/register.component';
import { DashMenuComponent } from '../../Dashboard/dash-menu/dash-menu.component';
import { CrudComponent } from '../../Dashboard/crud/crud.component';
import { DashMainComponent } from '../../Dashboard/dash-main/dash-main.component';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [DashMainComponent,MainComponent, HeaderComponent, FooterComponent, RegisterComponent,DashMenuComponent, CrudComponent],
  templateUrl:'./dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent {
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
