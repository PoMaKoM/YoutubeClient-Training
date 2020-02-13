import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.scss']
})
export class SerchComponent {
  private sortBy: string;
  private filter: string;
  constructor() {}
}
