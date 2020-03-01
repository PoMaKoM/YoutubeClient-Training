import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss']
})
export class SearchSettingsComponent implements OnInit {
  constructor(public searchService: SearchService) {}

  public ngOnInit(): void {}
}
