import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/core/state/app.state';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { LogOut } from 'src/app/core/state/auth.actions';

@Component({
  selector: 'app-auth-info',
  templateUrl: './auth-info.component.html',
  styleUrls: ['./auth-info.component.scss'],
})
export class AuthInfoComponent implements OnInit, OnDestroy {
  public nameSub: Subject<void> = new Subject();
  public name: string;

  constructor(
    public auth: AuthService,
    public router: Router,
    private store: Store<AppState>
  ) {}

  public logout(): void {
    this.router.navigate(['/auth', 'login']);
    this.store.dispatch(new LogOut());
  }

  public ngOnInit(): void {
    this.store
      .select((state: AppState) => {
        return state.authState.user;
      })
      .pipe(takeUntil(this.nameSub))
      .subscribe(
        (user: User) => {
          if (user && user.name) {
            this.name = user.name;
          } else {
            this.name = 'Login';
          }
        },
        () => {
          this.name = 'Login';
        }
      );
  }

  public ngOnDestroy(): void {
    this.nameSub.next();
    this.nameSub.complete();
  }
}
