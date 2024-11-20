import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login', // Elimina standalone: true
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
 
})
export class LoginComponent {
  email: string = '';
  citaBiblica: string | null = null;

  constructor(private router: Router) {}

  onLogin(): void {
   // this.router.navigate(['/home']);//pendiente quitar solo de pruebas de navegacion
    if (this.email) {
      //alert(`Logging in with email: ${this.email}`);
      this.router.navigate(['/home']); // Navegación con Router
    } else {
      alert('Please enter your email address.');
    }
  }

  goToRegister(): void {
   // alert(`Redirecting to register: ${this.email}`);
    this.router.navigate(['/auth/register']);
  }

  ngOnInit(): void {
    this.citaBiblica = 'John 3:16 - "For God so loved the world..."';
  }
}
