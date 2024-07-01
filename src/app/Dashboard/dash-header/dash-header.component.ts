import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
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
  loggedInUserEmail: string | null = null;
  name: string | null = null;
  log: boolean | null = null;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {
    this.userState$ = new BehaviorSubject<User | null>(null);
    this.user$ = this.userState$.asObservable();
  }
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
  private userState$: BehaviorSubject<User | null>;

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.userState$.next(user);
      if (user && user.email) {
        this.loggedInUserEmail = user.email;
        this.log = true;
        this.searchUser();
      } else {
        this.loggedInUserEmail = null;
        this.log = false;
      }
    });
  }

  admin(){
    return this.loggedInUserEmail;
  }

  logout() {
    this.authService.logout().subscribe(() => {
      //this.router.navigate(['/login']);
      this.log = false;
      this.name = null;
    });
  }
  singIn(){
    this.router.navigate(['/login']);
  }

  async searchUser() {
    try {
      const resp = await fetch(`${this.url}users.json`);
      const data = await resp.json();
      console.log(data); // Debugging: Log the API response
      for (let key in data) {
        if (data[key].email.toLowerCase() === this.loggedInUserEmail?.toLocaleLowerCase()) {
          this.name = data[key].name;
          break; // Exit loop once the user is found
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
}