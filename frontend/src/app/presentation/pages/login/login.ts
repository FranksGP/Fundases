import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../application/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  form = this.fb.group({
    username: [''],
    password: ['']
  });

  login() {

    console.log('login presionado');

    const { username, password } = this.form.value;

    this.auth.login(username!, password!)
       .subscribe({
         next: (res) => {
         console.log("LOGIN OK", res);
         this.router.navigate(['/dashboard']);
      },
     error: (err) => {
       console.error("ERROR LOGIN", err);
    }
  });
   
  }
 }