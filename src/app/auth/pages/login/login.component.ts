import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { User, AuthState } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { LogIn, Inint } from 'src/app/core/state/auth.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loading$: Observable<boolean>;

  constructor(
    public auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.store.dispatch(new Inint());
  }

  public login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading$ = this.store
      .select('authState')
      .pipe(map((state: AuthState) => state.loading));

    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      returnSecureToken: true,
    };

    this.store.dispatch(new LogIn(user));
  }
}
