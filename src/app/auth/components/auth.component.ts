import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  private erorrSub: Subscription;
  public message: string;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.erorrSub = this.store
      .select((state: AppState) => {
        return state.authState.errorMessage;
      })
      .subscribe((errorMessage: string) => {
        this.message = errorMessage;
      });
  }

  public ngOnDestroy(): void {
    this.erorrSub.unsubscribe();
  }
}
