import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public submitted: boolean = false;
  public regForm: FormGroup;

  constructor(public auth: AuthService, private router: Router) {}

  public ngOnInit(): void {
    this.regForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  public register(): void {
    if (this.regForm.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = {
      email: this.regForm.value.email,
      password: this.regForm.value.password,
      returnSecureToken: true
    };

    this.auth.register(user).subscribe(
      () => {
        this.router.navigate(['/client']);
        this.submitted = false;
      },
      () => {
        this.submitted = false;
      }
    );
  }
}
