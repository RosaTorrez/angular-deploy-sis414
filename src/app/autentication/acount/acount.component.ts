import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-acount',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './acount.component.html',
  styleUrl: './acount.component.css'
})
export class AcountComponent {
  @ViewChild('names') names!: ElementRef;
  @ViewChild('lastNames') lastNames!: ElementRef;
  @ViewChild('emails') emails!: ElementRef;

  url = 'https://angularsis414-default-rtdb.firebaseio.com/';
  registerForm: FormGroup;
  name: string = ''
  lastName: string = ''
  email: string = ''

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    // en aqui se crea el formulario con sus validaciones
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.checkPasswords });
  }

  // Método para validar que las contraseñas coincidan
  checkPasswords(group: FormGroup) {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  register() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.authService.registerWithEmail(email, password).subscribe((userCredential: UserCredential) => {
        // Aquí podrías guardar firstName y lastName en tu base de datos si fuera necesario
        console.log('Registro exitoso:', userCredential);
        this.router.navigate(['/home']);
      }, error => {
        console.error('Error en el registro:', error);
        // Aquí se puede  manejar los  errores específicos
      });
    }
  }
  async postUsers( group: FormGroup){
    const user = {
      name : group.get('name')?.value,
      lastName: group.get('lastname')?.value,
      email: group.get('email')?.value
    }
    
    await fetch(`${this.url}users.json`,{
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'aplication/json; charset = UTF-8'
      }
    });
  }
}
