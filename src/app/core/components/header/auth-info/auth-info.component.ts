import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-info',
  templateUrl: './auth-info.component.html',
  styleUrls: ['./auth-info.component.scss']
})
export class AuthInfoComponent  {
  constructor(public auth: AuthService, public router: Router) {}

  public logout(): void {
    this.router.navigate(['/auth', 'login']);
    this.auth.logout();
  }
}
