import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  // public ligining: boolean = true;
  public submitted: boolean = false;
  public message: string;

  constructor() {}

  public ngOnInit(): void {}
}
