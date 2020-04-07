import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/core/state/app.state';
import { Store } from '@ngrx/store';
import { Subscription, Observable, Subject } from 'rxjs';
import { takeUntil, map, catchError } from 'rxjs/operators';
import { AuthState } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-auth-info',
  templateUrl: './auth-info.component.html',
  styleUrls: ['./auth-info.component.scss'],
})
export class AuthInfoComponent implements OnInit, OnDestroy {
  public nameSub: Subject<void> = new Subject();
  public userName$: Observable<string>;
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
    this.store
      .select((state: AppState) => {
        return state.authState.user.name;
      })
      .pipe(takeUntil(this.nameSub))
      .subscribe(
        (name: string) => {
          this.name = name;
        },
        () => {
          this.name = 'LogIn';
        }
      );

    this.userName$ = this.store.select('authState').pipe(
      map((state: AuthState) => state.user.name),
      catchError(() => {
        return 'Login';
      })
    );
  }

  public ngOnDestroy(): void {
    // this.nameSub.next();
    // this.nameSub.complete();
  }
}

//  this.nameSub = this.store.select('authState').subscribe(
//       map((state: AuthState) => state.user.name),
//       tap(
//         (name: string) => {
//           this.name = name;
//         },
//         () => {
//           this.name = 'LogIn';
//         }
//       )
//     );
