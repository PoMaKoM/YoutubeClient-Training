import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public form: FormGroup;
  public ligining: boolean = true;
  public loginForm: FormGroup;
  public regForm: FormGroup;
  public submitted: boolean = false;
  public message: string;

  constructor(public auth: AuthService, private router: Router) {}

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
    this.regForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  public register(): void {
    console.log('reg');
  }

  public login(): void {
    console.log('login');
<<<<<<< HEAD
    this.router.navigate(['/']);
=======
>>>>>>> Task2-Components
  }
}
