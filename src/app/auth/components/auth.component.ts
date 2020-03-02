import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  // public ligining: boolean = true;
  public submitted: boolean = false;
  public message: string;

  constructor(public auth: AuthService) {}

  public ngOnInit(): void {}
}
