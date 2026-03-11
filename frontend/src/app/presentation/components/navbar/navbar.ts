import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../application/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

private auth = inject(AuthService);
private router = inject(Router);

logout(){

this.auth.logout();

this.router.navigate(['/login']);

}

}