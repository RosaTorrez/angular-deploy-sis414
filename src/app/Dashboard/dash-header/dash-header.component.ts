import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dash-header.component.html',
  styleUrl: './dash-header.component.css'
})
export class DashHeaderComponent {

  url: string ='https://angularsis414-default-rtdb.firebaseio.com/';
  email: string = '';
  loggedInUserEmail: string | null = null;
  user: any = null;
  errorMessage: string | null = null;

  toggleMenu(): void {
    const x = document.getElementById("myTopnav");
    if (x !== null) {
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  user$: Observable<User | null>;

  constructor(private authService: AuthService, private router: Router) {
    this.user$ = this.authService.getCurrentUser();
  }

  ngOnInit():void {
    this.loggedInUserEmail = this.authService.getCurrentUserEmail();
    this.searchUser();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
  async searchUser() {
    const resp = await fetch(`${this.url}users.json`);
    const data = await resp.json();
    for(let key of data){
      
    console.log(data[key]);
    }
  }
}
