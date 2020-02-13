import { Component, OnInit } from '@angular/core';
import { ResponseYT } from '../shared/interfaces';

@Component({
  selector: 'app-searching-results',
  templateUrl: './searching-results.component.html',
  styleUrls: ['./searching-results.component.scss']
})
export class SearchingResultsComponent {
  private res: ResponseYT;
  constructor() {}
}
