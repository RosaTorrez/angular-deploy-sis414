import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  display = true;
  resetForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.resetForm.valid) {
      const email = this.resetForm.value.email;
      this.authService.resetPassword(email).subscribe(
        () => {
          alert('Se ha enviado un correo electrónico para restablecer tu contraseña.');
          this.resetForm.reset();
          this.router.navigate(['login'])
        },
        (error: any) => {
          console.error('Error al enviar el correo electrónico de restablecimiento:', error);
          alert('Ha ocurrido un error al enviar el correo electrónico de restablecimiento. Por favor, intenta nuevamente.');
        }
      );
    }
  }
}
