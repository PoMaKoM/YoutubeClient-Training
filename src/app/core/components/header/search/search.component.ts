import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public settings: boolean = false;
  public searchForm: FormGroup;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      request: new FormControl(null, Validators.required)
    });
  }

  public search(): void {
    if (this.searchForm.invalid) {
      this.router.navigate(['/'], {
        queryParams: {}
      });
      return;
    }

    this.router.navigate(['/'], {
      queryParams: { search: this.searchForm.value.request }
    });
  }
}
