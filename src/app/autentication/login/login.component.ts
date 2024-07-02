import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordComponent } from '../password/password.component';
import { Router } from '@angular/router';
import { UserCredential } from '@angular/fire/auth';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,PasswordComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('closeLogin') closeLogin!: ElementRef;
  @ViewChild('closeReset') closeReset!: ElementRef;

  display = true;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  onInit(){
  }
  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.loginWithEmail(email, password).subscribe((userCredential: UserCredential) => {
        console.log('Login exitoso:', userCredential);
        this.router.navigate(['/movies']); 
        // esta seccion hace que te Redireccione haci la pelicula
      }, error => {
        console.error('Error en el inicio de sesión:', error);
        alert('Error en el inicio de sesión');
         // Mostrar mensaje de error al usuario
      });
    }
  }
  closeResetW(){
    this.closeReset.nativeElement.style.display = 'none';
  }
  openReset(){
      this.closeReset.nativeElement.style.display = 'block';
  }
  home(){
    this.router.navigate(['/movies']);
  }
  loginWithGoogle() {
    this.authService.signInWithGoogle().subscribe(
      res => {
        console.log('Logged in with Google:', res);
        this.router.navigate(['/movies']);
      },
      error => {
        console.error('Error logging in with Google:', error);
      }
    );
  }
}
