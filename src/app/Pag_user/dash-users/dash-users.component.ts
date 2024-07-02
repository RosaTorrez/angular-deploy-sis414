import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DashMenuComponent } from '../../Dashboard/dash-menu/dash-menu.component';
import { CrudComponent } from '../../Dashboard/crud/crud.component';
import { DeleteUseComponent } from '../../Dashboard/delete-use/delete-use.component';
import { FooterComponent } from '../../user/footer/footer.component';

@Component({
  selector: 'app-dash-users',
  standalone: true,
  imports: [DashMenuComponent, DeleteUseComponent,FooterComponent],
  templateUrl: './dash-users.component.html',
  styleUrl: './dash-users.component.css'
})
export class DashUsersComponent {
  @ViewChild('icon') icon!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  isDisplayed = false;
  windowWidth: number = 0;
  windowHeight: number = 0;

  constructor() { }

  ngOnInit() {
    // No llamamos a updateWindowSize aquí porque las ViewChilds aún no están inicializadas
  }

  ngAfterViewInit() {
    this.updateWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateWindowSize();
  }

  toggleMenu() {
    this.isDisplayed = !this.isDisplayed;
    if (this.isDisplayed) {
      this.menu.nativeElement.style.display = 'block';
    } else {
      this.menu.nativeElement.style.display = 'none';
    }
  }

  updateWindowSize() {
    if (this.isBrowser()) {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 1000) {
        this.menu.nativeElement.style.display = 'block';
        this.isDisplayed = false;
      } else {
        this.menu.nativeElement.style.display = 'none';
      }
    }
  }

  isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}
