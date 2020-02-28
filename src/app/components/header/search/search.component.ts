import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { SearchResponse } from 'src/app/models/search-response.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public settings: boolean = false;
  public searchForm: FormGroup;

  constructor(private searchSercive: SearchService) {}

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      request: new FormControl(null, Validators.required)
    });
  }

  public search(): void {
    if (this.searchForm.invalid) {
      return;
    }
  }
}
