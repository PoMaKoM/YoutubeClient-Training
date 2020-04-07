import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/core/state/app.state';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-auth-info',
  templateUrl: './auth-info.component.html',
  styleUrls: ['./auth-info.component.scss'],
})
export class AuthInfoComponent implements OnInit, OnDestroy {
  public nameSub: Subscription;
  public name: string;

  constructor(
    public auth: AuthService,
    public router: Router,
    private store: Store<AppState>
  ) {}

  public logout(): void {
    this.router.navigate(['/auth', 'login']);
    this.auth.logout();
  }

  public ngOnInit(): void {
    this.nameSub = this.store
      .select((state: AppState) => {
        return state.authState.user.name;
      })
      .subscribe(
        (name: string) => {
          this.name = name;
        },
        () => {
          this.name = 'LogIn';
        }
      );
  }

  public ngOnDestroy(): void {
    this.nameSub.unsubscribe();
  }
}
