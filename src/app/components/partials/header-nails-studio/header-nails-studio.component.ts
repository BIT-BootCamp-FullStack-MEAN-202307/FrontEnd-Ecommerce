import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-nails-studio',
  templateUrl: './header-nails-studio.component.html',
  styleUrls: ['./header-nails-studio.component.css']
})
export class HeaderNailsStudioComponent {
  menuVariable: boolean= false;
  menu_icon_variable: boolean=false;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}


  // Getters
  get user() {
    return this.authService.user;
  }
    openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable= !this.menu_icon_variable;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/')
  }
}
