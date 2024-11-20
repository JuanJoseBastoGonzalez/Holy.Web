import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
 // standalone: true,
 // imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  email2: string = '';
  userForm!: FormGroup;

  constructor(private router: Router) {
   /*  this.userForm = new FormGroup({
      firstname: new FormControl(this.firstname, Validators.required),
      lastname: new FormControl(this.lastname, Validators.required),
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      email2: new FormControl(this.email2, [Validators.required, Validators.email])
    }); */
  }
 /*  register(): void {
    // Verifica que todos los campos sean válidos y que los correos coincidan
    if (this.userForm.valid && this.email === this.email2) {
      alert(`Logging in with email: ${this.email}`);
      this.router.navigate(['/home']); // Navegación con Router
    } else {
      // Mostrar errores específicos
      if (this.email !== this.email2) {
        alert('Email and confirm email must match.');
      } else {
        alert('Please enter your data correctly.');
      }
    }
  } */





  //need create validation of data fake or not data
  ngOnInit(): void {
    const fb = new FormBuilder();
    this.userForm = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      acceptPolicies: [false, [Validators.requiredTrue]]
    }, { validator: this.emailMatchValidator.bind(this) });
  }

  //need create validation whith brakend data an validate fake data 
  emailMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const email = group.get('email')?.value;
    const confirmEmail = group.get('confirmEmail')?.value;
    return email && confirmEmail && email === confirmEmail ? null : { 'emailMismatch': true };
  }


  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Formulario enviado:', this.userForm.value);
      this.router.navigate(['/home']);
      // Aquí puedes agregar la lógica para enviar el formulario
    } else {
      console.error('Formulario inválido');
      // Marcar todos los campos como tocados para mostrar errores
      Object.values(this.userForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
  onBack(): void {
    console.log('Volver');
  }
  goToLogin(): void {
    console.log('Iniciar sesión');
    this.router.navigate(['/auth/login'])
  }
}